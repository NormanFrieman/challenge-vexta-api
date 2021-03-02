import { Request, Response } from 'express';

import { Controller, ServiceStatus, PropsClient } from '../../protocols';

export class UpdateClient implements Controller{
    constructor(
        private validateUUID: Function,
        private checkPermissionClient: Function,
        private listCities: Function,
        private updateClient: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });

        const validate = this.validateUUID(`${req.params.id}`);
        if(!validate.status)
            return res.status(400).json({ msg: 'id is not UUID format' });
        
        const permission: ServiceStatus = await this.checkPermissionClient(req.params.id, req.headers.id);
        if(!permission.status)
            return res.status(400).json({ msg: permission.body });

        if(!req.body)
            return res.status(400).json({ msg: 'missing body json' });
        
        if(req.body.email){
            const validateMail = /\S+@\S+\.\S+/;
            if(!validateMail.test(req.body.email))
                return res.status(400).json({ msg: 'invalid email format'});
        }

        if(req.body.site){
            const validateSite = /www+\.\S+\.\S+/;
            if(!validateSite.test(req.body.site))
                return res.status(400).json({ msg: 'invalid site format'});
        }

        const attributes = ['nome', 'username', 'address', 'numAddress', 'complement', 'idDistrict', 'tel', 'email', 'site', 'phone'];
        const properties: PropsClient = {
            idUser: `${req.headers.id}`
        };
        let valid: boolean = false;
        for(const attribute of attributes){
            if(req.body[attribute]){
                valid = true;
                properties[attribute] = req.body[attribute];
            }
        }
        if(!valid)
            return res.status(400).json({ msg: 'no modifiable parameters were passed' });

        if(properties.idDistrict){
            const validateIdDistrict: ServiceStatus = this.validateUUID(req.body.idDistrict);
            if(!validateIdDistrict.status)
                return res.status(400).json({ msg: 'idDistrict not in UUID format' });
            
            const checkIdDistrict: ServiceStatus = await this.listCities({ id: req.body.idDistrict, idUser: req.headers.id });
            if(!checkIdDistrict.status)
                return res.status(400).json({ msg: checkIdDistrict.body });
            
            properties.uf = checkIdDistrict.body[0].dataValues.uf;
            properties.district = checkIdDistrict.body[0].dataValues.nome;
        }

        const client = await this.updateClient(req.params.id, properties);
        if(!client.status)
            return res.status(404).json({ msg: client.body });
        
        return res.status(200).json({ msg: client.body });
    }
}
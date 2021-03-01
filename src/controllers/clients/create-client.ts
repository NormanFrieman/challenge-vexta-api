import { Request, Response } from "express";

import { Controller, ServiceStatus } from "../../protocols";

export class CreateClient implements Controller{
    constructor(
        private addClientDB: Function,
        private generateUUID: Function,
        private validateUUID: Function,
        private validateCpfOrCnpj: Function,
        private consultCnpj: Function,
        private listCities: Function
    ){}

    async handle(req: Request, res: Response){
        const attributes = ['cpfOrCnpj', 'typePerson', 'nome', 'username', 'address', 'numAddress', 'complement', 'idDistrict', 'tel', 'email', 'site', 'phone'];
        const mandatoryAttributes = ['cpfOrCnpj', 'nome', 'idDistrict'];
        
        if(req.body.cnpj){
            const result: ServiceStatus = await this.consultCnpj(req.body.cnpj)
            
            if(!result.status)
                return res.status(400).json(result.body);

            if(result.body.status === 'ERROR')
                return res.status(400).json(result.body);

            return res.status(200).json(result.body);
        }

        for(const mandatory of mandatoryAttributes){
            if(!req.body[mandatory])
                return res.status(400).json({ msg: `missing ${mandatory} param `});
        }

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

        if(!req.body.tel && !req.body.email && !req.body.site && !req.body.phone)
            return res.status(400).json({ msg : 'pass at least one form of contact' });
        
        const validateIdDistrict: ServiceStatus = this.validateUUID(req.body.idDistrict);
        if(!validateIdDistrict.status)
            return res.status(400).json({ msg: 'idDistrict not in UUID format' });
        
        const checkIdDistrict: ServiceStatus = await this.listCities({ id: req.body.idDistrict, idUser: req.headers.id });
        if(!checkIdDistrict.status)
            return res.status(400).json({ msg: checkIdDistrict.body });

        const typePerson: ServiceStatus = await this.validateCpfOrCnpj(req.body.cpfOrCnpj);
        if(!typePerson.status){
            return res.status(400).json({ msg: typePerson.body });
        }

        if(req.body.username && typePerson.body !== 'J')
            return res.status(400).json({ msg: 'do not pass the username parameter if typePerson is F' });

        const uuid = await this.generateUUID();

        const client = {
            id: uuid.body,
            idUser: `${req.headers.id}`,
            typePerson: typePerson.body,
            uf: checkIdDistrict.body[0].dataValues.uf,
            district: checkIdDistrict.body[0].dataValues.nome
        };
        for(const attribute of attributes){
            if(!req.body[attribute])
                continue;
            client[attribute] = req.body[attribute];
        }

        const insertResult: ServiceStatus = await this.addClientDB(client);
        if(!insertResult.status)
            return res.status(500).json({ msg: insertResult.body });

        return res.status(200).json(client);
    }
}
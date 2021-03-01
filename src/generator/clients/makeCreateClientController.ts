import { CreateClient } from '../../controllers/clients/create-client';

import { Controller } from "../../protocols";

import { consultCnpj } from '../../services/consult-cnpj';

import { validateCpfOrCnpj } from '../../services/validate-cpf-or-cnpj';

import { generateUUID } from '../../services/generate-uuid';

import { validateUUID } from '../../services/validate-uuid';

import { addClientDB } from '../../services/add-client-db';

import { listCities } from '../../services/list-cities-db';

export const makeCreateClientController = (): Controller => {
    const controller = new CreateClient(addClientDB, generateUUID, validateUUID, validateCpfOrCnpj, consultCnpj, listCities);

    return controller;
}
export interface ServiceStatus{
    status: boolean,
    body?: any
}

export interface PropsUser{
    login?: string,
    nome?: string,
    id?: string,
    idUser?: string,
}

export interface PropsCity{
    nome?: string,
    uf?: string,
    idUser?: string
}

export interface PropsClient{
    cpfOrCnpj?: string,
    nome?: string,
    tel?: string,
    district?: string,
    uf?: string
}
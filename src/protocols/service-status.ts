export interface ServiceStatus{
    status: boolean,
    body?: any
}

export interface PropsUser{
    login?: string,
    nome?: string
}

export interface PropsCity{
    nome?: string,
    uf?: string,
    idUser?: string
}
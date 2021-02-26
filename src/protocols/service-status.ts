export interface ServiceStatus{
    status: boolean,
    body?: any
}

export interface PropsUser extends Object{
    login?: string,
    nome?: string
}

export interface PropsCity extends Object{
    nome?: string,
    uf?: string
}
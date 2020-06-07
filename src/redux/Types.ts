
//interface de las acciones
export interface Action {
    type: string,
    payload?: any
}

//Los tipos de las acciones
export const NEW_ACCOUNT = 'NEW_ACCOUNT';
export const NEW_LOGIN = 'NEW_LOGIN';
export const NEWS_ACTION = 'NEWS_ACTION';
export const VIDEOGAMES_ACTION = 'VIDEOGAMES_ACTION';
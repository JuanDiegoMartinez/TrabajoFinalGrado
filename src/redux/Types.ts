
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
export const VIDEOGAME_ACTION = 'VIDEOGAME_ACTION';
export const SESSION_ACTION = 'SESSION_ACTION';
export const NEW_COMMENT = 'NEW_COMMENT';
export const VALORACIONES_ACTION = 'VALORACIONES_ACTION';
export const OBTAIN_USER_DATA_ACTION = 'OBTAIN_USER_DATA_ACTION';
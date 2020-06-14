
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
export const GENRES_ACTION = 'GENRES_ACTION';
export const GENRE_ACTION = 'GENRE_ACTION';
export const PUBLISHERS_ACTION = 'PUBLISHERS_ACTION';
export const PUBLISHER_ACTION = 'PUBLISHER_ACTION';
export const WEBS_ACTION = 'WEBS_ACTION';
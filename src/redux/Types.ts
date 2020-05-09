import React from "react";

//interface de las acciones
export interface Action {
    type: string,
    payload?: any
}

//Los tipos de las acciones
export const NEW_ACCOUNT = 'NEW_ACCOUNT';
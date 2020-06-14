import {Dispatch} from "react";
import {PUBLISHERS_ACTION} from "../../../redux/Types";

export const publishersAction = () => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerEditores', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: PUBLISHERS_ACTION,
        payload: body
    })
}
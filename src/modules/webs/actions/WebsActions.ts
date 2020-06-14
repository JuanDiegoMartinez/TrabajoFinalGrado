import {Dispatch} from "react";
import {WEBS_ACTION} from "../../../redux/Types";

export const websAction = () => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerWebs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: WEBS_ACTION,
        payload: body
    })
}
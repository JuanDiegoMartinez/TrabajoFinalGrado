import {Dispatch} from "react";
import {PUBLISHER_ACTION} from "../../../redux/Types";

export const publisherAction = (editor: string) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerEditor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({editor})
    });

    const body = await response.json();

    dispatch({
        type: PUBLISHER_ACTION,
        payload: body
    })
}
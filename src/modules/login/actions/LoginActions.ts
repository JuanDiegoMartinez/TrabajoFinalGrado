import {Login} from "../../../models/data/Login";
import {Dispatch} from "react";
import {NEW_LOGIN} from "../../../redux/Types";
import history from "../../../history";


export const newLogin = (formValues: Login, id: string | undefined) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del login
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: formValues.email, password: formValues.password})
    });

    const body = await response.json();

    dispatch({
        type: NEW_LOGIN,
        payload: body
    })

    if (id === "registro") {
        history.push("/");
    }
    else {
        history.goBack();
    }
}
import {Action, NEW_ACCOUNT} from "../../../redux/Types";
import {Dispatch} from "react";
import axios from "../../../connection/Axios";
import {User} from "../../../models/User";


export const newUser = (formValues: User) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    const response = await axios.post('/culo', {...formValues});

    dispatch({
        type: NEW_ACCOUNT,
        payload: response.data
    })

    //history.push('/');
}
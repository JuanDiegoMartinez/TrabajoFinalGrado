import {NEW_ACCOUNT} from "../../../redux/Types";
import {Dispatch} from "react";
import axios from "../../../connection/Axios";


export const newUser = (formValues: any) => async (dispatch: Dispatch<any>) => {

    /*
    //Llamar al backend y pasarle los datos del formulario
    //const response = await axios.post('/streams', {...formValues});

    dispatch({
        type: NEW_ACCOUNT,
        payload: response.data
    })

    //history.push('/');

     */
}
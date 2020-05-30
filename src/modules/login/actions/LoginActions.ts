import {Login} from "../../../models/data/Login";
import {Dispatch} from "react";
import axios from "../../../connection/Axios";
import {NEW_LOGIN} from "../../../redux/Types";


export const newLogin = (formValues: Login) => async (dispatch: Dispatch<any>) => {

    console.log("Estoy en la acción: ", formValues);
    //Llamar al backend y pasarle los datos del login
    const response = await axios.post("/login", formValues);
    console.log("Estoy en la acción: ", response.data);

    dispatch({
        type: NEW_LOGIN,
        payload: response.data
    })
}
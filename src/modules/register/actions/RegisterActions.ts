import {NEW_ACCOUNT} from "../../../redux/Types";
import {Dispatch} from "react";
import {UserRegister} from "../../../models/data/User";

export const newUser = (formValues: UserRegister) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    //const response = await axios.post('/register', {...formValues});

    dispatch({
        type: NEW_ACCOUNT,
        payload: "falta petición"
    })
}
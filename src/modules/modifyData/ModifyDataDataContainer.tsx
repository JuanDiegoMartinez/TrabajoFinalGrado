import React from "react";
import ModifyDataView from "./ModifyDataView";
import {Login} from "../../models/data/Login";
import {connect} from "react-redux";
import {newUser} from "../register/actions/RegisterActions";
import {UserComplete, UserRegister} from "../../models/data/User";
import {obtenerDatosUsuarioAction} from "./actions/ModifyDataActions";
import {Valoracion} from "../../models/data/Valoracion";

interface ReduxState {
    datosUsuario: UserComplete,
    comentarios: Valoracion[]
}

interface ActionProps {
    obtenerDatosUsuarioAction: () => any
}

type Props = ActionProps & ReduxState;

class ModifyDataDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.obtenerDatosUsuarioAction();
    }

    onModifyDataSubmit = (values: Login) : void => {
        console.log("Estoy en LoginDataContainer");
        console.log(values);
        //Insertar en bbdd e ir a login
        //new TaskUserAdd(values).execute();
        //goToRoute(ROUTE_USERS,{});
    }

    render(): React.ReactNode {

        console.log("Estoy en ModifiDataDataContainer")
        console.log("Soy los datos del usuario: ", this.props.datosUsuario)
        console.log("Soy los comentarios: ", this.props.comentarios)

        return(
            <ModifyDataView onFormSubmit={this.onModifyDataSubmit} initialValues={this.props.datosUsuario} comentarios={this.props.comentarios}/>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        datosUsuario: state.ModifyDataReducer.datosUsuario,
        comentarios: state.ModifyDataReducer.comentarios
    }
}

export default connect(mapStateToProps, {obtenerDatosUsuarioAction})(ModifyDataDataContainer);
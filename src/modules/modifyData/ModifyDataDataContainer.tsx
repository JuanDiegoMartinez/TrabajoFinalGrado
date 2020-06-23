import React from "react";
import ModifyDataView from "./ModifyDataView";
import {Login} from "../../models/data/Login";
import {connect} from "react-redux";
import {UserComplete} from "../../models/data/User";
import {
    enviarComentariosAction,
    enviarDatosUsuarioAction,
    enviarImagenAction,
    obtenerDatosUsuarioAction
} from "./actions/ModifyDataActions";
import {Valoracion} from "../../models/data/Valoracion";
import {borrarCookies} from "../../conexion/borrarCookies";

interface ReduxState {
    datosUsuario: UserComplete,
    comentarios: Valoracion[],
    imagenUsuario: string
}

interface ActionProps {
    obtenerDatosUsuarioAction: () => any,
    enviarDatosUsuarioAction: (datosUsuario: UserComplete) => void,
    enviarImagenAction: (url: string) => void,
    enviarComentariosAction: (comentarios: Valoracion[]) => void
}

type Props = ActionProps & ReduxState;

class ModifyDataDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        borrarCookies("");
        this.props.obtenerDatosUsuarioAction();
    }

    onImageSubmit = (url: string) => {
        this.props.enviarImagenAction(url);
    }

    onUserDataSubmit = (values: UserComplete) : void => {
        this.props.enviarDatosUsuarioAction(values);
    }

    onCommentsSubmit = (comentarios: Valoracion[]) => {
        this.props.enviarComentariosAction(comentarios);
    }

    render(): React.ReactNode {

        return(
            <ModifyDataView
                onFormUserDataSubmit={this.onUserDataSubmit}
                initialValues={this.props.datosUsuario}
                comentarios={this.props.comentarios}
                imagen={this.props.imagenUsuario}
                onImagenSubmit={this.onImageSubmit}
                onCommentsSubmit={this.onCommentsSubmit}
            />
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        datosUsuario: state.ModifyDataReducer.datosUsuario,
        comentarios: state.ModifyDataReducer.comentarios,
        imagenUsuario: state.ModifyDataReducer.imagenUsuario
    }
}

export default connect(mapStateToProps, {obtenerDatosUsuarioAction, enviarDatosUsuarioAction, enviarImagenAction, enviarComentariosAction})(ModifyDataDataContainer);
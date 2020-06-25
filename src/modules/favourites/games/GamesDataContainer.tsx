import React from "react";
import GamesView from "./GamesView";
import {connect} from "react-redux";

interface ReduxState {
    user: string,
    juegosFavoritos: any[],
}
type Props = ReduxState;

class GamesDataContainer extends React.Component<Props, {}> {

    modificarJuegosFavoritos = async (listaJuegos: any[]) => {


        fetch('/modificarJuegosFavoritos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listaJuegos)
        });
    }

    render(): React.ReactNode {

        if (this.props.user !== "") {
            return (
                <GamesView modificarFavoritos={this.modificarJuegosFavoritos} datos={this.props.juegosFavoritos} tipo={"videojuegos"}/>
            )
        }
        else {
            return (
                <div>
                    Para ver tus favoritos debes iniciar sesión
                </div>
            )
        }

    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        user: state.NavbarReducer.user,
        juegosFavoritos: state.NavbarReducer.juegosFavoritos,
    }
}

// @ts-ignore
export default connect(mapStateToProps, {})(GamesDataContainer);
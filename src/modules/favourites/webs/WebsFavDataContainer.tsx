import React from "react";
import {connect} from "react-redux";
import WebsFavView from "./WebsFavView";

interface ReduxState {
    user: string,
    websFavoritas: any[],
}
type Props = ReduxState;

class WebsFavDataContainer extends React.Component<Props, {}> {

    modificarWebsFavoritas = async (listaWebs: any[]) => {

        fetch('/modificarWebsFavoritas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listaWebs)
        });
    }

    render(): React.ReactNode {

        if (this.props.user !== "") {
            return (
                <WebsFavView modificarFavoritos={this.modificarWebsFavoritas} datos={this.props.websFavoritas} tipo={"webs"}/>
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
        websFavoritas: state.NavbarReducer.websFavoritas,
    }
}

// @ts-ignore
export default connect(mapStateToProps, {})(WebsFavDataContainer);
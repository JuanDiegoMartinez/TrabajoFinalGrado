import React from "react";
import WebsView from "./WebsView";
import {connect} from "react-redux";
import {Web} from "../../models/data/Web";
import {modificarNavbarWebsFavoritas, websAction, websBusquedaAction} from "./actions/WebsActions";
import {borrarCookies} from "../../conexion/borrarCookies";

interface ReduxState {
    webs: Web[],
    page: number,
    rowsPerPage: number,
    seleccionado: string,
    user: string,
    websFavoritas: any[]
}

interface ActionProps {
    websAction: () => Web[],
    websBusquedaAction: (pestanaActual: number | undefined, seleccionado: string | undefined) => Web[],
    modificarNavbarWebsFavoritas: (web: any) => void
}

type Props = ReduxState & ActionProps;

class WebsDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        borrarCookies("webs");
        this.props.websAction();
    }

    onFilterSubmit = (pestanaActual: number | undefined, seleccionado: string | undefined) : void => {
        this.props.websBusquedaAction(pestanaActual, seleccionado);
    }

    anadirWebFavorita = (web: any) => {

        let copiaFavoritos = this.props.websFavoritas;

        copiaFavoritos[0].childrenIds.push(web.id);

        let archivos = [...copiaFavoritos, web];

        fetch('/modificarWebsFavoritas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(archivos)
        });

        this.props.modificarNavbarWebsFavoritas(archivos);
    }

    render(): React.ReactNode {
        return (
          <WebsView
            webs={this.props.webs}
            seleccionado={this.props.seleccionado}
            page={this.props.page}
            rowsPerPage={this.props.rowsPerPage}
            onFilterSubmit={this.onFilterSubmit}
            user={this.props.user}
            websFavoritas={this.props.websFavoritas}
            anadirFavorito={this.anadirWebFavorita}
            />
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        webs: state.WebsReducer.webs,
        seleccionado: state.WebsReducer.seleccionado,
        page: state.WebsReducer.page,
        rowsPerPage: state.WebsReducer.rowsPerPage,
        user: state.NavbarReducer.user,
        websFavoritas: state.NavbarReducer.websFavoritas
    }
}

export default connect(mapStateToProps, {websAction, websBusquedaAction, modificarNavbarWebsFavoritas})(WebsDataContainer as unknown as React.ComponentType<{}>);
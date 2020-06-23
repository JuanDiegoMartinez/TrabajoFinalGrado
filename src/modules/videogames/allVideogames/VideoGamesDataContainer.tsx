import React from "react";
import VideoGamesView from "./VideoGamesView";
import {connect} from "react-redux";
import {PartialVideogame} from "../../../models/data/Videogame";
import {busquedaActionCreator, vaciarReducerVideojuegos, videogamesActionCreator} from "../actions/VideogamesActions";
import {borrarCookies} from "../../../conexion/borrarCookies";

interface ReduxState {
    videojuegos: PartialVideogame[],
    palabra: string,
    pestanaActual: number,
    seleccionado: string
}

interface ActionProps {
    videogamesActionCreator: () => PartialVideogame[]
    busquedaActionCreator: (palabra: string | undefined, pestanaActual: number | undefined, seleccionado: string | undefined) => PartialVideogame[],
    vaciarReducerVideojuegos: () => void
}

type Props = ReduxState & ActionProps;

class VideoGamesDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        borrarCookies("videojuegos");
        this.props.videogamesActionCreator();
    }

    onSearchSubmit = (palabra: string): void => {
        this.props.busquedaActionCreator(palabra, undefined, undefined);
    }

    onFilterSubmit = (pestanaActual: number | undefined, seleccionado: string | undefined) : void => {
        this.props.busquedaActionCreator(undefined, pestanaActual, seleccionado);
    }

    componentWillUnmount(): void {
        this.props.vaciarReducerVideojuegos();
    }

    render(): React.ReactNode {

        return (
            <VideoGamesView
                videojuegos={this.props.videojuegos}
                palabra={this.props.palabra}
                onFormSubmit={this.onSearchSubmit}
                pestanaActual={this.props.pestanaActual}
                seleccionado={this.props.seleccionado}
                onFilterSubmit={this.onFilterSubmit}
            />
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    if (state.VideogamesReducer.objeto !== undefined) {
        return {
            videojuegos: state.VideogamesReducer.objeto.videojuegos,
            palabra: state.VideogamesReducer.objeto.palabra,
            pestanaActual: state.VideogamesReducer.objeto.pestanaActual,
            seleccionado: state.VideogamesReducer.objeto.seleccionado
        }
    }
}

export default connect(mapStateToProps, {videogamesActionCreator, busquedaActionCreator, vaciarReducerVideojuegos})(VideoGamesDataContainer as unknown as React.ComponentType<{}>);
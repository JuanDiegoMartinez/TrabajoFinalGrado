import React from "react";
import VideoGamesView from "./VideoGamesView";
import {connect} from "react-redux";
import {PartialVideogame} from "../../../models/data/Videogame";
import {videogamesActionCreator, busquedaActionCreator} from "../actions/VideogamesActions";

interface ReduxState {
    videojuegos: PartialVideogame[],
    palabra: string,
    pestanaActual: number,
    seleccionado: string
}

interface ActionProps {
    videogamesActionCreator: () => PartialVideogame[]
    busquedaActionCreator: (palabra: string | undefined, pestanaActual: number | undefined, seleccionado: string | undefined) => PartialVideogame[]
}

type Props = ReduxState & ActionProps;

class VideoGamesDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.videogamesActionCreator();
    }

    onSearchSubmit = (palabra: string): void => {
        this.props.busquedaActionCreator(palabra, undefined, undefined);
    }

    onFilterSubmit = (pestanaActual: number | undefined, seleccionado: string | undefined) : void => {
        this.props.busquedaActionCreator(undefined, pestanaActual, seleccionado);
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

export default connect(mapStateToProps, {videogamesActionCreator, busquedaActionCreator})(VideoGamesDataContainer as unknown as React.ComponentType<{}>);
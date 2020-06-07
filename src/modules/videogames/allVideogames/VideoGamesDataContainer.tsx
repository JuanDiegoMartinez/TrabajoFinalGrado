import React from "react";
import VideoGamesView from "./VideoGamesView";
import {connect} from "react-redux";
import {PartialVideogame} from "../../../models/data/Videogame";
import {videogamesActionCreator, searchBarJuegosActionCreator} from "../actions/VideogamesActions";

interface ReduxState {
    videojuegos: PartialVideogame[],
    palabra: string,
}

interface ActionProps {
    videogamesActionCreator: () => PartialVideogame[]
    searchBarJuegosActionCreator: (palabra: string) => PartialVideogame[]
}

type Props = ReduxState & ActionProps;

class VideoGamesDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.videogamesActionCreator();
    }

    onSearchSubmit = (palabra: string): void => {
        this.props.searchBarJuegosActionCreator(palabra);
    }

    render(): React.ReactNode {

        return (
            <VideoGamesView videojuegos={this.props.videojuegos} palabra={this.props.palabra} onFormSubmit={this.onSearchSubmit}/>
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    if (state.VideogamesReducer.objeto !== undefined) {
        return {
            videojuegos: state.VideogamesReducer.objeto.videojuegos,
            palabra: state.VideogamesReducer.objeto.palabra,
        }
    }
}

export default connect(mapStateToProps, {videogamesActionCreator, searchBarJuegosActionCreator})(VideoGamesDataContainer as unknown as React.ComponentType<{}>);
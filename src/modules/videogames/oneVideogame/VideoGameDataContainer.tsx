import React from "react";
import VideoGameView from "./VideoGameView";
import {connect} from "react-redux";
import {videogameActionCreator} from "../actions/VideogameActions";
import {Videogame} from "../../../models/data/Videogame";

interface ExternalProps {
    id: string
}

interface ReduxState {
    videojuego: Videogame,
}

interface ActionProps {
    videogameActionCreator: (slug: string) => Videogame
}

type Props = ExternalProps & ReduxState & ActionProps;

class VideoGameDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        console.log("Estoy en componentWillMount")
        console.log(this.props.id)
        this.props.videogameActionCreator(this.props.id);
    }

    render() : React.ReactNode {

        console.log("Estoy en el render")
        console.log(this.props.id);

        //No se porque llama con los datos anteriores
        if (this.props.videojuego !== undefined && this.props.id !== this.props.videojuego.slug) {
            return null

        }

        return(
            <VideoGameView videojuego={this.props.videojuego}/>
        );

    }
}

//@ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    return {
        videojuego: state.VideogameReducer.videojuego
    }
}

// @ts-ignore
export default connect(mapStateToProps, {videogameActionCreator})(VideoGameDataContainer)
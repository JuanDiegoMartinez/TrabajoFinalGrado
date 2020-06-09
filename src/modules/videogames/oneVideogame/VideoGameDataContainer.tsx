import React from "react";
import VideoGameView from "./VideoGameView";
import {connect} from "react-redux";
import {videogameActionCreator} from "../actions/VideogameActions";
import {Videogame} from "../../../models/data/Videogame";
import {Backdrop, CircularProgress} from "@material-ui/core";
import {Valoracion} from "../../../models/data/Valoracion";

interface ExternalProps {
    id: string
}

interface ReduxState {
    videojuego: Videogame,
    valoraciones: Valoracion[]
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
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );

        }

        return(
            <VideoGameView videojuego={this.props.videojuego} valoraciones={this.props.valoraciones} id={this.props.id}/>
        );

    }
}

//@ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    if(state.VideogameReducer.objeto !== undefined) {

        return {
            videojuego: state.VideogameReducer.objeto.videojuego,
            valoraciones: state.VideogameReducer.objeto.valoraciones
        }
    }

}

// @ts-ignore
export default connect(mapStateToProps, {videogameActionCreator})(VideoGameDataContainer as unknown as React.ComponentType<ExternalProps>)
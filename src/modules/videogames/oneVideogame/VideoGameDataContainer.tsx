import React from "react";
import VideoGameView from "./VideoGameView";
import {connect} from "react-redux";
import {newComment, valoracionesAction, videogameActionCreator} from "../actions/VideogameActions";
import {Videogame} from "../../../models/data/Videogame";
import {Backdrop, CircularProgress, Modal} from "@material-ui/core";
import {Valoracion} from "../../../models/data/Valoracion";

interface ExternalProps {
    id: string,
}

interface ReduxState {
    videojuego: Videogame,
    valoraciones: Valoracion[],
    user: string,
    imagen: string,
    nuevoComentario: boolean
}

interface ActionProps {
    videogameActionCreator: (slug: string) => Videogame,
    newComment: (comment: Comment) => boolean,
    valoracionesAction: (slug: string) => Valoracion[],
}

interface State {
    haComentado: boolean
}

type Props = ExternalProps & ReduxState & ActionProps;

class VideoGameDataContainer extends React.Component<Props, State> {

    componentWillMount(): void {
        //console.log("Estoy en componentWillMount")
        //console.log(this.props.id)
        this.props.videogameActionCreator(this.props.id);
        this.setState({haComentado: false});
    }

    onCommentSubmit = (values: Comment): void => {
        this.props.newComment(values);
        this.setState({haComentado: true})
    }

    render() : React.ReactNode {

        //console.log("Estoy en el render")
        //console.log(this.props.id);

        //No se porque llama con los datos anteriores
        if (this.props.videojuego !== undefined && this.props.id !== this.props.videojuego.slug) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        if(this.state.haComentado) {
            this.setState({haComentado: false});
            this.props.valoracionesAction(this.props.id);
        }

        return(
            <VideoGameView
                videojuego={this.props.videojuego}
                valoraciones={this.props.valoraciones}
                id={this.props.id}
                user={this.props.user}
                imagen={this.props.imagen}
                onCommentSubmit={this.onCommentSubmit}
            />
        );
    }
}

//@ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    return {
        videojuego: state.VideogameReducer.videojuego,
        valoraciones: state.VideogameReducer.valoraciones,
        user: state.NavbarReducer.user,
        imagen: state.NavbarReducer.imagen,
        nuevoComentario: state.VideogameReducer.nuevoComentario
    }
}

// @ts-ignore
export default connect(mapStateToProps, {videogameActionCreator, newComment, valoracionesAction})(VideoGameDataContainer as unknown as React.ComponentType<ExternalProps>)
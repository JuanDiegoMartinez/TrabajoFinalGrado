import React from "react";
import VideoGameView from "./VideoGameView";
import {connect} from "react-redux";
import {
    newComment,
    vaciarReducerVideojuego,
    valoracionesAction,
    videogameActionCreator
} from "../actions/VideogameActions";
import {Videogame} from "../../../models/data/Videogame";
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
    vaciarReducerVideojuego: () => void
}

interface State {
    haComentado: boolean
}

type Props = ExternalProps & ReduxState & ActionProps;

class VideoGameDataContainer extends React.Component<Props, State> {

    componentWillMount(): void {
        this.props.videogameActionCreator(this.props.id);
        this.setState({haComentado: false});
    }

    onCommentSubmit = (values: Comment): void => {
        this.props.newComment(values);
        this.setState({haComentado: true})
    }

    componentWillUnmount(): void {
        this.props.vaciarReducerVideojuego();
    }

    render() : React.ReactNode {

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
export default connect(mapStateToProps, {videogameActionCreator, newComment, valoracionesAction, vaciarReducerVideojuego})(VideoGameDataContainer as unknown as React.ComponentType<ExternalProps>)
import React from "react";
import VideoGameView from "./VideoGameView";
import {connect} from "react-redux";
import {
    modificarNavbarJuegosFavoritos,
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
    juegosFavoritos: any[],
    nuevoComentario: boolean
}

interface ActionProps {
    videogameActionCreator: (slug: string) => Videogame,
    newComment: (comment: Comment) => boolean,
    valoracionesAction: (slug: string) => Valoracion[],
    vaciarReducerVideojuego: () => void,
    modificarNavbarJuegosFavoritos: (listaJuegos: any[]) => void
}

interface State {
    haComentado: boolean,
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

    anadirJuegoFavorito = (juego: any) => {

        let copiaFavoritos = this.props.juegosFavoritos;

        copiaFavoritos[0].childrenIds.push(juego.id);

        let archivos = [...copiaFavoritos, juego];

        fetch('/modificarJuegosFavoritos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(archivos)
        });

        this.props.modificarNavbarJuegosFavoritos(archivos);
    }

    componentWillUnmount(): void {
        this.props.vaciarReducerVideojuego();
    }

    render() : React.ReactNode {

        let estaFavoritos = false;

        if (this.props.videojuego) {

            this.props.juegosFavoritos.forEach((file: any) => {

                if(this.props.videojuego.slug === file.id) {
                    estaFavoritos = true;
                }
            })
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
                anadirFavorito={this.anadirJuegoFavorito}
                estaFavoritos={estaFavoritos}
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
        juegosFavoritos: state.NavbarReducer.juegosFavoritos,
        nuevoComentario: state.VideogameReducer.nuevoComentario
    }
}

// @ts-ignore
export default connect(mapStateToProps, {videogameActionCreator, newComment, valoracionesAction, vaciarReducerVideojuego, modificarNavbarJuegosFavoritos})(VideoGameDataContainer as unknown as React.ComponentType<ExternalProps>)
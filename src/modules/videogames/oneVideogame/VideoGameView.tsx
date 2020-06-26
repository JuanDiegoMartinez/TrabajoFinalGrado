import React from 'react';
import {Videogame} from "../../../models/data/Videogame";
import {Avatar, Backdrop, Box, Button, CircularProgress, Container, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import ZoomImg from "./ZoomImg";
import {Valoracion} from "../../../models/data/Valoracion";
import {Rating} from "@material-ui/lab";
import Comentario from "./Comentario";
import {PhotoCamera} from "@material-ui/icons";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Noty from "noty";

interface VideoGameViewProps {
    videojuego: Videogame,
    id: string,
    valoraciones: Valoracion[],
    user: string,
    onCommentSubmit: (values: any) => void,
    imagen: string,
    anadirFavorito: (juego: any) => void,
    estaFavoritos: boolean
}

export default class VideoGameView extends React.Component<VideoGameViewProps, {}> {

    componentDidMount(): void {

        if(this.props.videojuego !== undefined) {
            // @ts-ignore
            document.getElementById("textoVideojuego").innerHTML = this.props.videojuego.description;

        }
    }

    //Para que el primero me salga bien
    componentDidUpdate(prevProps: Readonly<VideoGameViewProps>, prevState: Readonly<{}>, snapshot?: any): void {

        if(this.props.videojuego !== undefined) {
            // @ts-ignore
            document.getElementById("textoVideojuego").innerHTML = this.props.videojuego.description;
        }
    }

    handleFavoritos = () => {

        if (this.props.user === "") {
            new Noty({text: 'Debes iniciar sesión para añadir el juego a favoritos.', type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
        }

        else if (this.props.estaFavoritos) {
            new Noty({text: 'El juego ya se encuentra en tus favoritos. Para gestionar tus favoritos ve a Juegos Favoritos.', type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
        }
        else {
            const favorito = {
                id: this.props.videojuego.slug,
                name: this.props.videojuego.name,
                isDir: false,
                thumbnailUrl: this.props.videojuego.urlImage,
                childrenIds: [],
                parentId: "Juegos Favoritos"
            };

            new Noty({text: 'Juego añadido a favoritos.', type: 'success', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();

            this.props.anadirFavorito(favorito);
        }
    }

    tipoBotonFavoritos = (tipo: boolean) => {

        if (!tipo) {
            return (
                // @ts-ignore
                <IconButton color="primary" className="botonFavoritos" onClick={this.handleFavoritos}>
                    <FavoriteBorderIcon className="iconoFavoritos" />
                </IconButton>
            )
        }
        return (
            // @ts-ignore
            <IconButton color="primary" className="botonFavoritos" onClick={this.handleFavoritos}>
                <FavoriteIcon className="iconoFavoritos" />
            </IconButton>
        )
    }

    render() : React.ReactNode {

        if (!this.props.videojuego) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        const {name, urlImage, lanzamiento, metacritic, urlMetacritic, platforms,
            genres, stores, developers, clip, tags, screenshots, website} = this.props.videojuego;

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <div className="divInterior">
                        <Typography component="h1" className="tituloJuego">
                            {name}
                        </Typography>
                        {this.tipoBotonFavoritos(this.props.estaFavoritos)}
                    </div>
                    <Grid container spacing={3}>
                        <Grid item className="grid" xs={12}>
                            <img alt="Imagen no disponible" className="imagenJuego" src={urlImage} />
                            <aside className="texto" id="textoVideojuego"> {this.props.videojuego.description}</aside>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>MetaScore:</div>
                            <div>{metacritic}</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>urlMetacritic: </div>
                            <div>{urlMetacritic}</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>Platformas: </div>
                            <div>{platforms.map((plataforma: any) => { return(platforms.indexOf(plataforma) === platforms.length - 1 ? plataforma : plataforma + ", ")})} </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>Fecha de lanzamiento: </div>
                            <div>{lanzamiento}</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>Generos: </div>
                            <div>{genres.map((genre: any) => { return(genres.indexOf(genre) === genres.length - 1 ? genre : genre + ", ")})} </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>Desarrolladores: </div>
                            <div>{developers.map((desarrolador: any) => { return(developers.indexOf(desarrolador) === developers.length - 1 ? desarrolador : desarrolador + ", ")})} </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>Etiquetas: </div>
                            <div>{tags.map((tag: any) => { return(tags.indexOf(tag) === tags.length - 1 ? tag : tag + ", ")})} </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>Tiendas: </div>
                            <div>{stores.map((store: any) => {
                                return( <Link href={store.url} target="_blank"> {store.name} </Link>)})} </div>
                        </Grid>
                        <Grid item xs={12} >
                            <div>Website: </div>
                            <div><Link href={website} target="_blank"> {website} </Link></div>
                        </Grid>
                        <Grid item xs={12} >
                            <div>Imágenes del juego: </div>
                        </Grid>
                            {screenshots.map((screen) => (
                                <Grid item xs={12} sm={6}>
                                    <ZoomImg
                                        //@ts-ignore
                                        src={screen}
                                    />
                                </Grid>
                            ))}
                        <Grid item xs={12} >
                            <div>Gameplay: </div>
                        </Grid>
                        <Grid item xs={12} >
                            <div>
                                <video controls loop width="570" height="320" muted>
                                    <source src={clip} type="video/mp4"/>
                                </video>
                            </div>
                        </Grid>
                        <Grid item xs={12} >
                            <div>Reseñas de usuarios: </div>
                        </Grid>
                        <Grid item xs={12} >
                            {this.props.valoraciones.map((valoracion: Valoracion) => (
                                <div>
                                    <div style={{display: 'flex'}}> <Avatar src={valoracion.image} /> {valoracion.user} </div>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating value={valoracion.rating} readOnly precision={0.5}/>
                                    </Box>
                                    <div> {valoracion.comment} </div>
                                    <div> {valoracion.date}</div>
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={12} >
                            <Comentario user={this.props.user} valoraciones={this.props.valoraciones} onCommentSubmit={this.props.onCommentSubmit} imagen={this.props.imagen} id={this.props.id}/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}
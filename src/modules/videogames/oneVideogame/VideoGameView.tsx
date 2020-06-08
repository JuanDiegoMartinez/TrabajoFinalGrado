import React from 'react';
import {Videogame} from "../../../models/data/Videogame";
import {Backdrop, CircularProgress, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface VideoGameViewProps {
    videojuego: Videogame
}

export default class VideoGameView extends React.Component<VideoGameViewProps, {}> {

    componentDidMount(): void {

        if (this.props.videojuego !== undefined) {
            // @ts-ignore
            document.getElementById("textoVideojuego").innerHTML = this.props.videojuego.description;
        }
    }

    render() : React.ReactNode {

        if (!this.props.videojuego) {
            return null;
        }

        console.log("Estoy en VideoGameView")
        console.log(this.props.videojuego)

        const {name, urlImage, lanzamiento, metacritic, urlMetacritic, platforms,
        genres, stores, developers, clip, tags, screenshots, website} = this.props.videojuego;

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Typography component="h1" className="titulo">
                        {name}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid className="grid" item xs={12}>
                            <img alt="Imagen no disponible" className="imagen" src={urlImage} />
                            <aside className="texto" id="textoVideojuego"/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}
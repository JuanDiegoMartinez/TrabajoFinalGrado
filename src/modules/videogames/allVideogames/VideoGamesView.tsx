import React from "react";
import Container from "@material-ui/core/Container";
import Pestanas from "../tabs/Pestanas";
import {Backdrop, CircularProgress, Grid, Link} from "@material-ui/core";
import {gridContainer, gridItem} from "../../../res/otrosCss/VideogamesList";
import {PartialVideogame} from "../../../models/data/Videogame";
import SearchBar from "../../../models/templates/SearchBar";
import {Link as RouterLink} from "react-router-dom";

interface VideoGamesViewProps {
    videojuegos: PartialVideogame[]
    palabra: string,
    onFormSubmit: (palabra: string) => void,
    pestanaActual: number,
    seleccionado: string,
    onFilterSubmit: (pestanaActual: number | undefined, seleccionado: string | undefined) => void
}

export default class VideoGamesView extends React.Component<VideoGamesViewProps, {}> {

    componentWillMount(): void {

        /*
        fetch('/unicaPeticionApi', {
            method: 'GET'
        }).then(r => {});

         */
    }

    renderVideogames = () => {

        return this.props.videojuegos.map((videojuego: any) => {
            return (
                <Grid item xs={12} sm={6} style={gridItem}>
                    <div className="divImagen">
                        <img src={videojuego.urlImage} alt="no hay imagen" className="image"/>
                    </div>
                    <div className="divTexto">
                        <Link component={RouterLink} to={`/videojuegos/${videojuego.slug}`}>
                            <p className="nombre">{videojuego.name}</p>
                        </Link>
                        <p>Lanzamiento: {videojuego.lanzamiento}</p>
                        <p>{videojuego.platforms.map((plataforma: any) => {
                            return(videojuego.platforms.indexOf(plataforma) === videojuego.platforms.length - 1 ? plataforma : plataforma + ", ")
                        })}</p>
                    </div>
                </Grid>
            );
        })
    }

    render(): React.ReactNode {

        if (this.props.videojuegos === undefined) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        return (
            <Container maxWidth="md">
                <SearchBar onFormSubmit={this.props.onFormSubmit} palabra={this.props.palabra}/>
                <Pestanas pestanaActual={this.props.pestanaActual} seleccionado={this.props.seleccionado} onFilterSubmit={this.props.onFilterSubmit}/>
                {this.props.videojuegos !== undefined && this.props.videojuegos.length === 0 ?
                    <h1> No se han encontrado videojuegos</h1>
                    : <div className="div">
                        <Grid container spacing={3} style={gridContainer}>
                            {this.renderVideogames()}
                        </Grid>
                    </div> }
            </Container>
        );
    }
}
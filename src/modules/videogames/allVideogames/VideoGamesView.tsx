import React from "react";
import Container from "@material-ui/core/Container";
import SimpleTabs from "../tabs/Pestanas";
import {Backdrop, CircularProgress, Grid} from "@material-ui/core";
import {gridContainer, gridItem} from "../../../res/otrosCss/VideogamesList";
import {PartialVideogame} from "../../../models/data/Videogame";
import SearchBar from "../../../models/templates/SearchBar";

interface VideoGamesViewProps {
    videojuegos: PartialVideogame[]
    palabra: string,
    onFormSubmit: (palabra: string) => void
}

export default class VideoGamesView extends React.Component<VideoGamesViewProps, {}> {

    componentWillMount(): void {

        //console.log("mierdaseca");
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
                        <p className="nombre">{videojuego.name}</p>
                        <p>Lanzamiento: {videojuego.lanzamiento}</p>
                        <p>{videojuego.platforms.map((plataforma: any) => {
                            return(plataforma + ", ")
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
                <SimpleTabs/>
                {this.props.videojuegos !== undefined && this.props.videojuegos.length === 0 ?
                    <h1 style={{textAlign: 'center', margin: '20px'}}> No se han encontrado videojuegos</h1>
                    : <div className="div">
                        <Grid container spacing={3} style={gridContainer}>
                            {this.renderVideogames()}
                        </Grid>
                    </div> }
            </Container>
        );
    }
}
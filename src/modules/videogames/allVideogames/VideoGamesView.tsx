import React from "react";
import Container from "@material-ui/core/Container";
import SearchBar from "../../../models/templates/SearchBar";
import SimpleTabs from "../tabs/Pestanas";
import {Grid} from "@material-ui/core";
import {gridContainer, gridItem} from "../../../res/otrosCss/VideogamesList";
import axios from "../../../connection/Axios";

export default class VideoGamesView extends React.Component<{}, {}> {

    componentWillMount(): void {

        console.log("mierdaseca")
        /*
        axios.get("/unicaPeticionApi").then(r => {
            console.log("hola");
        })
         */
    }


    render(): React.ReactNode {
        return (
            <Container maxWidth="md">
                <p>Aquí va la searchbar</p>
                <SimpleTabs/>
                <div className="div">
                    <Grid container spacing={3} style={gridContainer}>
                        <Grid item xs={12} sm={6} style={gridItem}>
                            <div className="divImagen">
                                <img src="https://i11b.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5153833.jpg" alt="no hay imagen" className="image"/>
                            </div>
                            <div className="divTexto">
                                <p>Nombre del juego</p>
                                <p>Fecha lanzamiento</p>
                                <p>Plataformas</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} style={gridItem}>
                            <div className="divImagen">
                                <img src="https://i11b.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5153833.jpg" alt="no hay imagen" className="image"/>
                            </div>
                            <div className="divTexto">
                                <p>Nombre del juego</p>
                                <p>Fecha lanzamiento</p>
                                <p>Plataformas</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} style={gridItem}>
                            <div className="divImagen">
                                <img src="https://i11b.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5153833.jpg" alt="no hay imagen" className="image"/>
                            </div>
                            <div className="divTexto">
                                <p>Nombre del juego</p>
                                <p>Fecha lanzamiento</p>
                                <p>Plataformas</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} style={gridItem}>
                            <div className="divImagen">
                                <img src="https://i11b.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5153833.jpg" alt="no hay imagen" className="image"/>
                            </div>
                            <div className="divTexto">
                                <p>Nombre del juego</p>
                                <p>Fecha lanzamiento</p>
                                <p>Plataformas</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}
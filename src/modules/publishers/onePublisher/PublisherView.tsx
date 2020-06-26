import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Backdrop, CircularProgress, Container} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Publisher} from "../../../models/data/Publisher";

interface PublisherViewProps {
    editor: Publisher,
    juegos: any[]
}

export default class PublisherView extends React.Component<PublisherViewProps, {}> {

    renderJuegos = () => {

        return this.props.juegos.map((juego: any) => {
            return(
                <Grid className="gridImagenes" item xs={12} sm={4}>
                    <img src={juego.urlImage} className="imagen"/>
                    <Link to={`/videojuegos/${juego.slug}`} className="link">{juego.name}</Link>
                </Grid>
            )
        })
    }

    render() : React.ReactNode {

        if (!this.props.editor && !this.props.juegos) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        const {name, urlImage, description} = this.props.editor;

        return(
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Typography component="h1" className="titulo">
                        {name}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid className="grid" item xs={12}>
                            <img alt="Imagen no disponible" className="imagen" src={urlImage} />
                            <aside className="texto">{description}</aside>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="parrafoGE">Juegos relacionados con el género:</p>
                        </Grid>
                        {this.renderJuegos()}
                    </Grid>
                </div>
            </Container>
        );
    }
}
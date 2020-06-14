import React from "react";
import {PartialGenre} from "../../../models/data/Genre";
import Container from "@material-ui/core/Container";
import {gridContainer, gridItem} from "../../../res/otrosCss/GenresList";
import {Backdrop, CircularProgress, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

interface GenresViewProps {
    generos: PartialGenre[]
}

export default class GenresView extends React.Component<GenresViewProps, {}> {

    renderGeneros = () => {
        return this.props.generos.map((genero: any) => {
            return (
                <Grid item xs={12} sm={4} style={gridItem(genero.urlImage)}>
                    <Link to={`/generos/${genero.name}`} className="linkGenero">
                        {genero.name}
                    </Link>
                </Grid>
            );
        })
    }

    render(): React.ReactNode {

        if (this.props.generos === undefined) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        return (
            <Container maxWidth="lg">
                <Grid container spacing={3} style={gridContainer}>
                    {this.renderGeneros()}
                </Grid>
            </Container>
        );
    }
}
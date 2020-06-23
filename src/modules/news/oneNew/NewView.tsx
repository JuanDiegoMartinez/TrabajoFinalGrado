import React from "react";
import {Backdrop, CircularProgress, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {News} from "../../../models/data/News";

interface NewViewProps {
    noticia: News
}

export default class NewView extends React.Component<NewViewProps, {}> {

    componentDidMount(): void {

        if(this.props.noticia !== undefined) {
            // @ts-ignore
            document.getElementById("textoNoticia").innerHTML = this.props.noticia.content;
        }
    }

    componentDidUpdate(prevProps: Readonly<NewViewProps>, prevState: Readonly<{}>, snapshot?: any): void {

        if(this.props.noticia !== undefined) {
            // @ts-ignore
            document.getElementById("textoNoticia").innerHTML = this.props.noticia.content;
        }
    }

    render(): React.ReactNode {

        if (!this.props.noticia) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        const {author, title, urlImage, published, urlNews} = this.props.noticia;

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Typography component="h1" className="titulo">
                        {title}
                    </Typography>
                    <div className="parrafo">
                        {author} / {published}
                    </div>
                    <Grid container spacing={3}>
                        <Grid className="grid" item xs={12}>
                            <img alt="Imagen no disponible" className="imagen" src={urlImage} />
                            <aside className="texto" id="textoNoticia"/>
                            <p><strong>Enlace de la noticia: </strong></p>
                            <a href={urlNews} target="_blank">{urlNews}</a>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}
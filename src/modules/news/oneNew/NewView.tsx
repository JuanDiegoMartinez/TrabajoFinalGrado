import React from "react";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {News} from "../../../models/data/News";

interface NewViewProps {
    noticia: News
}

export default class NewView extends React.Component<NewViewProps, {}> {

    componentDidMount(): void {
        // @ts-ignore
        document.getElementById("textoNoticia").innerHTML = this.props.noticia.content;
    }

    render(): React.ReactNode {

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
                            <img className="imagen" src={urlImage} />
                            <aside className="texto" id="textoNoticia">
                            </aside>
                            <p><strong>Enlace de la noticia: </strong></p>
                            <a href={urlNews} target="_blank">{urlNews}</a>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}
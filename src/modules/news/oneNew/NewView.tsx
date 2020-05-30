import React from "react";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {News} from "../../../models/data/News";

interface NewViewProps {
    noticia: News
}

export default class NewView extends React.Component<NewViewProps, {}> {

    render(): React.ReactNode {

        const {author, title, urlImage, content, published} = this.props.noticia;

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
                            <aside className="texto">
                                {content}
                            </aside>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}
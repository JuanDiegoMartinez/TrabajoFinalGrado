import React from "react";
import {PartialGenre} from "../../../models/data/Genre";
import Container from "@material-ui/core/Container";
import {gridContainer, gridItem} from "../../../res/otrosCss/GenresList";
import {Backdrop, CircularProgress, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import {PartialPublisher} from "../../../models/data/Publisher";

interface PublishersViewProps {
    editores: PartialPublisher[]
}

export default class PublishersView extends React.Component<PublishersViewProps, {}> {

    renderEditores = () => {
        return this.props.editores.map((editor: any) => {
            return (
                <Grid item xs={12} sm={4} style={gridItem(editor.urlImage)}>
                    <Link to={`/editores/${editor.name}`} className="linkGenero">
                        {editor.name}
                    </Link>
                </Grid>
            );
        })
    }

    render(): React.ReactNode {

        if (this.props.editores === undefined) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        return (
            <Container maxWidth="lg">
                <Grid container spacing={3} style={gridContainer}>
                    {this.renderEditores()}
                </Grid>
            </Container>
        );
    }
}
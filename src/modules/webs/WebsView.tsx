import React from "react";
import SearchBar from "../../models/templates/SearchBar";
import NewsViewTable from "../news/allNews/NewsViewTable";
import Container from "@material-ui/core/Container";

export default class WebsView extends React.Component<{}, {}> {

    render(): React.ReactNode {
        return (
            <Container maxWidth="md" id="top">
                {this.props.noticias !== undefined && this.props.noticias.length === 0 ?
                    <h1 style={{textAlign: 'center', margin: '20px'}}> No se han encontrado noticias</h1>
                    : <NewsViewTable data={this.props.noticias} page={this.props.page} rowsPerPage={this.props.rowsPerPage}/> }
            </Container>
        );
    }
}
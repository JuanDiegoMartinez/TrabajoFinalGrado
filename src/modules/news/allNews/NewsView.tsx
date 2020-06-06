import React from "react";
import SearchBar from "../../../models/templates/SearchBar";
import Container from "@material-ui/core/Container";
import {News} from "../../../models/data/News";
import NewsViewTable from "./NewsViewTable";

interface NewsViewProps {
    noticias: News[],
    onFormSubmit: (palabra: string) => void,
    palabra: string | undefined,
    page: number | undefined,
    rowsPerPage: number | undefined
}

export default class NewsView extends React.Component<NewsViewProps> {

    render() : React.ReactNode {

        return (
            <Container maxWidth="md" id="top">
                <SearchBar onFormSubmit={this.props.onFormSubmit} palabra={this.props.palabra}/>
                {this.props.noticias !== undefined && this.props.noticias.length === 0 ?
                    <h1 style={{textAlign: 'center', margin: '20px'}}> No se han encontrado noticias</h1>
                    : <NewsViewTable data={this.props.noticias} page={this.props.page} rowsPerPage={this.props.rowsPerPage}/> }
            </Container>
        );
    }
}
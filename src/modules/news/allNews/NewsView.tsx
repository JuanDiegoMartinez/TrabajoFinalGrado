import React from "react";
import SearchBar from "../../../models/templates/SearchBar";
import Container from "@material-ui/core/Container";
import {News} from "../../../models/data/News";
import NewsViewTable from "./NewsViewTable";

interface NewsViewProps {
    lastNews: News[]
}

export default class NewsView extends React.Component<NewsViewProps> {

    formSubmit = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault();
        console.log("formulario enviado");
    };

    render() : React.ReactNode {

        console.log("Estoy en el render NewsView: ", this.props.lastNews);

        return (
            <Container maxWidth="md" id="top">
                <SearchBar/>
                <NewsViewTable data={this.props.lastNews}/>
            </Container>
        );
    }
}
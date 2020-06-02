import React from "react";
import SearchBar from "../../../models/templates/SearchBar";
import Container from "@material-ui/core/Container";
import {News} from "../../../models/data/News";
import NewsViewTable from "./NewsViewTable";

interface NewsViewProps {
    lastNews: News[]
}

export default class NewsView extends React.Component<NewsViewProps> {

    render() : React.ReactNode {

        console.log("Estoy en NewsView");

        return (
            <NewsViewTable data={this.props.lastNews}/>
        );
    }
}
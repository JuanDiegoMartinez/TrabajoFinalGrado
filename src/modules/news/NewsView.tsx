import React from "react";
import SearchBar from "../../models/templates/SearchBar";
import Container from "@material-ui/core/Container";
import {ContainerSinPadding} from "../../res/otrosCss/ContainerSinPadding";
import TableComponent from "../../models/templates/TableComponent";
import {News} from "../../models/data/News";
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

        const prueba : News[] = [
            {
                title: 'Noticia0',
                description: 'descripción de la noticia'
            },
            {
                title: 'Noticia1',
                description: 'descripción de la noticia'
            },
            {
                title: "Noticia2",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia3",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia4",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia5",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia6",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia7",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia8",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia9",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia10",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia11",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia12",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia13",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
            {
                title: "Noticia14",
                description: 'fjñladsjfñasfkjñladsjfkjdskñfjas'
            },
        ];

        return (
            <Container maxWidth="md" style={ContainerSinPadding}>
                <SearchBar/>
                <NewsViewTable data={prueba}/>
            </Container>
        );
    }
}
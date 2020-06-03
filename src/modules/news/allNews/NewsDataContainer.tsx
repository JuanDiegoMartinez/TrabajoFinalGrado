import React from "react";
import NewsView from "./NewsView";
import {connect} from "react-redux";
import {News} from "../../../models/data/News";
import {newsActionCreator, searchBarActionCreator} from "../actions/NewsActions";
import SearchBar from "../../../models/templates/SearchBar";
import Container from "@material-ui/core/Container";

interface ReduxState {
    ultimasNoticias: News[]
}

interface ActionProps {
    newsActionCreator: () => News[]
    searchBarActionCreator: () => News[]
}

type Props = ReduxState & ActionProps;

class NewsDataContainer extends React.Component<Props> {

    componentWillMount(): void {
        //history.push("/registro", {a: "hola"});
        //console.log(this.props.history);
        this.props.newsActionCreator();
    }

    prueba = () => {
        this.props.newsActionCreator();
    }

    onSearchSubmit = (palabra: string): void => {
        console.log(palabra);
        this.props.searchBarActionCreator();

    }

    render() : React.ReactNode {

        //this.prueba();

        return (
            <Container maxWidth="md" id="top">
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                <NewsView lastNews={this.props.ultimasNoticias}/>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        ultimasNoticias: state.NewsReducer.lastNews
    }
}

// @ts-ignore
export default connect(mapStateToProps, {newsActionCreator, searchBarActionCreator})(NewsDataContainer);
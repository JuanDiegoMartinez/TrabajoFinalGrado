import React from "react";
import NewsView from "./NewsView";
import {connect} from "react-redux";
import {News} from "../../../models/data/News";
import {newsActionCreator, searchBarActionCreator} from "../actions/NewsActions";

interface ReduxState {
    noticias: News[],
    palabra: string,
    page: number,
    rowsPerPage: number
}

interface ActionProps {
    newsActionCreator: () => News[]
    searchBarActionCreator: (palabra: string) => News[]
}

type Props = ReduxState & ActionProps;

class NewsDataContainer extends React.Component<Props> {

    componentWillMount(): void {
        this.props.newsActionCreator();
    }

    onSearchSubmit = (palabra: string): void => {
        this.props.searchBarActionCreator(palabra);
    }

    render() : React.ReactNode {

        return (
            <NewsView
                noticias={this.props.noticias}
                onFormSubmit={this.onSearchSubmit}
                palabra={this.props.palabra}
                page={this.props.page}
                rowsPerPage={this.props.rowsPerPage}
            />
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    if (state.NewsReducer.objeto !== undefined) {
        return {
            noticias: state.NewsReducer.objeto.noticias,
            palabra: state.NewsReducer.objeto.palabra,
            page: state.NewsReducer.objeto.page,
            rowsPerPage: state.NewsReducer.objeto.rowsPerPage
        }
    }
}

export default connect(mapStateToProps, {newsActionCreator, searchBarActionCreator})(NewsDataContainer as unknown as React.ComponentType<{}>);
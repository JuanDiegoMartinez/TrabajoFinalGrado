import React from "react";
import NewsView from "./NewsView";
import {connect} from "react-redux";
import {News} from "../../../models/data/News";
import {newsActionCreator} from "../actions/NewsActions";

interface ReduxState {
    ultimasNoticias: News[]
}

interface ActionProps {
    newsActionCreator: () => News[]
}


type Props = ReduxState & ActionProps;

class NewsDataContainer extends React.Component<Props> {

    componentWillMount(): void {
        console.log("1.se ha montado el componente");
        this.props.newsActionCreator();
    }

    render() : React.ReactNode {

        console.log("Estoy en el render NewsDataContainer:", this.props.ultimasNoticias);
        return (
            <NewsView lastNews={this.props.ultimasNoticias}/>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        ultimasNoticias: state.NewsReducer.lastNews
    }
}

// @ts-ignore
export default connect(mapStateToProps, {newsActionCreator})(NewsDataContainer);
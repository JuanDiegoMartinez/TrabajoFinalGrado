import React from "react";
import NewsView from "./NewsView";
import {connect} from "react-redux";
import {News} from "../../models/data/News";

interface ReduxState {
    ultimasNoticias: News[]
}

/*
interface ActionProps {
    lastNews: () => News[]
}

 */

type Props = ReduxState;

class NewsDataContainer extends React.Component<Props> {

    componentDidMount(): void {
        //this.props.lastNews();
    }

    render() : React.ReactNode {
        return (
            <NewsView lastNews={this.props.ultimasNoticias}/>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        ultimasNoticias: []
    }
}

export default connect(mapStateToProps, {})(NewsDataContainer);
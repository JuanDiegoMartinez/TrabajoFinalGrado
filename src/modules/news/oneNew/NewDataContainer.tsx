import React from "react";
import NewView from "./NewView";
import {News} from "../../../models/data/News";
import {connect} from "react-redux";
import {noticiaAction, vaciarReducerNoticia} from "../actions/NewActions";

interface ExternalProps {
    id: string
}

interface NewDataContainerProps {
    noticia: News
}

interface ReduxState {
    noticia: News
}

interface ActionProps {
    noticiaAction: (slug: string) => News,
    vaciarReducerNoticia: () => void
}

type Props = ExternalProps & NewDataContainerProps & ReduxState & ActionProps;

class NewDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.noticiaAction(this.props.id);
    }

    componentWillUnmount(): void {
        this.props.vaciarReducerNoticia();
    }

    render(): React.ReactNode {

        return (
            <NewView noticia={this.props.noticia}/>
        );
    }
}

//@ts-ignore
const mapStateToProps = (state: any) : ReduxState => {

    return {
        noticia: state.NewReducer.noticia,
    }
}

// @ts-ignore
export default connect(mapStateToProps, {noticiaAction, vaciarReducerNoticia})(NewDataContainer)
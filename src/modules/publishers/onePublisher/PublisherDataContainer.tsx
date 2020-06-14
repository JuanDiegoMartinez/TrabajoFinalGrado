import React from "react";
import {connect} from "react-redux";
import {Publisher} from "../../../models/data/Publisher";
import {publisherAction} from "../actions/PublisherActions";
import PublisherView from "./PublisherView";

interface ExternalProps {
    id: string
}

interface ReduxState {
    editor: Publisher,
    juegos: any[]
}

interface ActionProps {
    publisherAction: (editor: string) => Publisher
}

type Props = ReduxState & ActionProps & ExternalProps;

class PublisherDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.publisherAction(this.props.id);
    }

    render() : React.ReactNode {

        return(
            <PublisherView editor={this.props.editor} juegos={this.props.juegos}/>
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        editor: state.PublisherReducer.editor,
        juegos: state.PublisherReducer.juegos
    }
}

// @ts-ignore
export default connect(mapStateToProps, {publisherAction})(PublisherDataContainer);
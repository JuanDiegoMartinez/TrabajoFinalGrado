import {connect} from "react-redux";
import {PartialPublisher, Publisher} from "../../../models/data/Publisher";
import React from "react";
import {publishersAction} from "../actions/PublishersActions";
import PublishersView from "./PublishersView";

interface ReduxState {
    editores: PartialPublisher[],
}

interface ActionProps {
    publishersAction: () => Publisher[]
}

type Props = ReduxState & ActionProps;

class PublishersDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.publishersAction();
    }

    render(): React.ReactNode {

        return (
            <PublishersView editores={this.props.editores}/>
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        editores: state.PublishersReducer.editores,
    }
}

export default connect(mapStateToProps, {publishersAction})(PublishersDataContainer as unknown as React.ComponentType<{}>);
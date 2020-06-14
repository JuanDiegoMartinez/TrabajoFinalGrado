import React from "react";
import WebsView from "./WebsView";
import {connect} from "react-redux";
import {Web} from "../../models/data/Web";
import {websAction} from "./actions/WebsActions";

interface ReduxState {
    webs: Web[],
}

interface ActionProps {
    websAction: () => Web[]
}

type Props = ReduxState & ActionProps;

class WebsDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.websAction();
    }

    render(): React.ReactNode {
        return (
          <WebsView />
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        webs: state.WebsReducer.webs,
    }
}

export default connect(mapStateToProps, {websAction})(WebsDataContainer as unknown as React.ComponentType<{}>);
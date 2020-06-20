import React from "react";
import WebsView from "./WebsView";
import {connect} from "react-redux";
import {Web} from "../../models/data/Web";
import {websAction, websBusquedaAction} from "./actions/WebsActions";

interface ReduxState {
    webs: Web[],
    page: number,
    rowsPerPage: number,
    seleccionado: string
}

interface ActionProps {
    websAction: () => Web[],
    websBusquedaAction: (pestanaActual: number | undefined, seleccionado: string | undefined) => Web[]
}

type Props = ReduxState & ActionProps;

class WebsDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.websAction();
    }

    onFilterSubmit = (pestanaActual: number | undefined, seleccionado: string | undefined) : void => {
        this.props.websBusquedaAction(pestanaActual, seleccionado);
    }

    render(): React.ReactNode {
        return (
          <WebsView
            webs={this.props.webs}
            seleccionado={this.props.seleccionado}
            page={this.props.page}
            rowsPerPage={this.props.rowsPerPage}
            onFilterSubmit={this.onFilterSubmit}
          />
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        webs: state.WebsReducer.webs,
        seleccionado: state.WebsReducer.seleccionado,
        page: state.WebsReducer.page,
        rowsPerPage: state.WebsReducer.rowsPerPage
    }
}

export default connect(mapStateToProps, {websAction, websBusquedaAction})(WebsDataContainer as unknown as React.ComponentType<{}>);
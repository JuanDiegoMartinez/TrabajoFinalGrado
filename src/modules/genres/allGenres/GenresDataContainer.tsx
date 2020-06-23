import React from "react";
import GenresView from "./GenresView";
import {Genre, PartialGenre} from "../../../models/data/Genre";
import {connect} from "react-redux";
import {genresAction} from "../actions/GenresActions";
import {borrarCookies} from "../../../conexion/borrarCookies";

interface ReduxState {
    generos: PartialGenre[],
}

interface ActionProps {
    genresAction: () => Genre[]
}

type Props = ReduxState & ActionProps;

class GenresDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        borrarCookies("");
        this.props.genresAction();
    }

    render(): React.ReactNode {

        return (
            <GenresView generos={this.props.generos}/>
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        generos: state.GenresReducer.generos,
    }
}

export default connect(mapStateToProps, {genresAction})(GenresDataContainer as unknown as React.ComponentType<{}>);
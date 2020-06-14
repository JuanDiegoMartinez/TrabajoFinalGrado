import React from "react";
import GenreView from "./GenreView";
import {Genre} from "../../../models/data/Genre";
import {connect} from "react-redux";
import {genreAction} from "../actions/GenreAction";

interface ExternalProps {
    id: string
}

interface ReduxState {
    genero: Genre,
    juegos: any[]
}

interface ActionProps {
    genreAction: (genero: string) => Genre
}

type Props = ReduxState & ActionProps & ExternalProps;

class GenreDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.genreAction(this.props.id);
    }

    render() : React.ReactNode {

        return(
            <GenreView genero={this.props.genero} juegos={this.props.juegos}/>
        );
    }
}

// @ts-ignore
const mapStateToProps = (state: any) : ReduxState => {
    return {
        genero: state.GenreReducer.genero,
        juegos: state.GenreReducer.juegos
    }
}

// @ts-ignore
export default connect(mapStateToProps, {genreAction})(GenreDataContainer);
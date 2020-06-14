import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import GenreDataContainer from "./GenreDataContainer";
import {RouteComponentProps} from "react-router-dom";

type Props = RouteComponentProps<{id: string}>

export default class GenreScreen extends LoggedScreen<Props> {

    renderScreen(): React.ReactNode {
        return (
            <GenreDataContainer id={this.props.match.params.id}/>
        );
    }
}
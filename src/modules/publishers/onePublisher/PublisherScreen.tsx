import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import {RouteComponentProps} from "react-router-dom";
import PublisherDataContainer from "./PublisherDataContainer";

type Props = RouteComponentProps<{id: string}>

export default class PublisherScreen extends LoggedScreen<Props> {

    renderScreen(): React.ReactNode {
        return (
            <PublisherDataContainer id={this.props.match.params.id}/>
        );
    }
}
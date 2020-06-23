import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import NewDataContainer from "./NewDataContainer";
import {RouteComponentProps} from "react-router-dom";

type Props = RouteComponentProps<{id: string}>

export default class NewScreen extends LoggedScreen<Props> {

    renderScreen(): React.ReactNode {

        return (
            <NewDataContainer id={this.props.match.params.id}/>
        );
    }

}
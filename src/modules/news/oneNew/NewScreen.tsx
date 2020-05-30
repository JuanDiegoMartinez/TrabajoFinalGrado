import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import NewDataContainer from "./NewDataContainer";
import {News} from "../../../models/data/News";

interface NewScreenProps {
    noticia: News
}

export default class NewScreen extends LoggedScreen<NewScreenProps> {

    renderScreen(): React.ReactNode {

        return (
            // @ts-ignore
            <NewDataContainer noticia={this.props.location.state}/>
        );
    }

}
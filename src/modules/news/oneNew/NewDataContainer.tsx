import React from "react";
import NewView from "./NewView";
import {News} from "../../../models/data/News";

interface NewDataContainerProps {
    noticia: News
}

export default class NewDataContainer extends React.Component<NewDataContainerProps, {}> {

    render(): React.ReactNode {

        return (
            <NewView noticia={this.props.noticia}/>
        );
    }
}
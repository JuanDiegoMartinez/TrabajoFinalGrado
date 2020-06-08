import React from 'react';
import VideoGameDataContainer from "./VideoGameDataContainer";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import {RouteComponentProps} from 'react-router-dom';

type Props = RouteComponentProps<{id: string}>

export default class VideoGameScreen extends LoggedScreen<Props> {

    renderScreen(): React.ReactNode {

        return (
            <VideoGameDataContainer id={this.props.match.params.id}/>
        );
    }
}
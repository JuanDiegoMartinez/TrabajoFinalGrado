import React from 'react';
import LoggedScreen from "../base/screens/LoggedScreen";
import {Table} from 'react-bootstrap';
import UserListView from "./UserListView";

export default class UserListScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return(
            <UserListView />
        );
    }
}
import React from "react";
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
//import logo from "../../../../res/img/logo.svg";

interface IState {}
interface IProps {}

class NavBar extends React.Component<IProps, IState> {

    render() : React.ReactNode {
        return (
            <Navbar className="navbar">
                <Navbar.Brand href="/">
                    <img alt="Iniciofsdafasdfsadfafasdfa"/>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;
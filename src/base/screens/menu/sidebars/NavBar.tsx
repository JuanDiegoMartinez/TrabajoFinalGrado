import React from "react";
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
import {ROUTE_HOME} from "../../../../routing/routes";
import { Link } from "react-router-dom";
//import logo from "../../../../res/img/logo.svg";

interface IState {}
interface IProps {}

class NavBar extends React.Component<IProps, IState> {

    render() : React.ReactNode {
        return (
            <Navbar className="navbar">
                <Navbar.Brand>
                    <Link to="/"> Volver inicio </Link>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;
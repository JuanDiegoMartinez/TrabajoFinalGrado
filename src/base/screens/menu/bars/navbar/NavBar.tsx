import React from "react";
import {Navbar} from 'react-bootstrap';
import {Link as RouterLink} from "react-router-dom";
import {connect} from "react-redux";
import {newLogin} from "../../../../../modules/login/actions/LoginActions";
import {navbarAction} from "./NavbarActions";
import {Link} from "@material-ui/core";

//import logo from "../../../../res/img/logo.svg";

interface ReduxState {
    user: string,
    imagen: string
}

interface Actions {
    navbarAction: () => string,
}

type Props = ReduxState & Actions;

class NavBar extends React.Component<Props, {}> {

    componentWillMount(): void {
        this.props.navbarAction();

    }

    render() : React.ReactNode {
        return (
            <Navbar className="navbar">
                <Navbar.Brand>
                    <p>{this.props.user}</p>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        user: state.NavbarReducer.user,
        imagen: state.NavbarReducer.imagen
    }
}

// @ts-ignore
export default connect(mapStateToProps, {navbarAction})(NavBar);
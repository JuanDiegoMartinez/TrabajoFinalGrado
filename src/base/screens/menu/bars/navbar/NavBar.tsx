import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {connect} from "react-redux";
import {navbarAction, navbarCerrarSesionAction} from "./NavbarActions";
import {Avatar, IconButton, Link, Menu, MenuItem} from "@material-ui/core";
import logoUji from "../../../../../res/img/logoUji.png";
import AppBar from "@material-ui/core/AppBar";
import {AccountCircle} from "@material-ui/icons";
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import history from "../../../../../history";

interface ReduxState {
    user: string,
    imagen: string,
    juegosFavoritos: any[],
    websFavoritas: any[]
}

interface Actions {
    navbarAction: () => string,
    navbarCerrarSesionAction: () => any
}

type Props = ReduxState & Actions;

interface State {
    open: boolean
}

class NavBar extends React.Component<Props, State> {

    componentWillMount(): void {

        this.props.navbarAction();
        this.setState({
            open: false
        })
    }

    handleMenu = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    opciones = () => {
        history.push(`/usuario/${this.props.user}`);
    }

    cerrarSesion = () => {
        this.props.navbarCerrarSesionAction();
        history.push("/");
    }

    render() : React.ReactNode {

        return (
            <AppBar className="navbar" >
                <div>
                    <img src={logoUji} className="imagen"/>
                    {this.props.user === '' ?
                        <Link to="/login" component={RouterLink} className="link" >Sesión no iniciada (Haz click para iniciar sesión)</Link>
                    :
                        <div className="divSesionIniciada">
                            <div className="divUsuario" onClick={this.handleMenu}>
                                <MoreVertIcon />
                                {this.props.user}
                                <Avatar src={this.props.imagen} className="avatar"/>
                            </div>

                            <Menu style={{top: '40px'}}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.opciones}>
                                    <SettingsIcon/>
                                    Opciones
                                </MenuItem>
                                <MenuItem onClick={this.cerrarSesion}>
                                    <PowerSettingsNewIcon/>
                                    Cerrar Sesión
                                </MenuItem>
                            </Menu>
                        </div>
                    }
                </div>
            </AppBar>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        user: state.NavbarReducer.user,
        imagen: state.NavbarReducer.imagen,
        juegosFavoritos: state.NavbarReducer.juegosFavoritos,
        websFavoritas: state.NavbarReducer.websFavoritas
    }
}

// @ts-ignore
export default connect(mapStateToProps, {navbarAction, navbarCerrarSesionAction})(NavBar);
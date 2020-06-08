import React from "react";
import {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

//import logo from "../../../../res/img/logo.svg";


interface IState {
    usuario: any,
    hayUser: boolean,
}

export default class NavBar extends React.Component<{}, IState> {

    componentWillMount(): void {

        let user = undefined;

        fetch('/session', {
            method: 'GET'
        })
            .then(response => response.text())
            .then(data => {
                //console.log(data);
                user = data;

                this.setState({
                    usuario: user,
                    hayUser: true
                })
            });

        //console.log(user);

        if (user === undefined) {
            //console.log("no hay response");

            this.setState({
                usuario: "No se ha iniciado sesión",
                hayUser: false
            })
        }

        else {
            this.setState({
                usuario: user,
                hayUser: true
            })
        }
    }

    render() : React.ReactNode {

        let nombre;

        if (!this.state.hayUser) {
            nombre = "no se ha iniciado sesión";
        }

        else {
            nombre = this.state.usuario;
        }



        return (
            <Navbar className="navbar">
                <Navbar.Brand>
                    <Link to="/"> Volver inicio </Link>
                    <p>{nombre}</p>
                </Navbar.Brand>
            </Navbar>
        );
    }
}
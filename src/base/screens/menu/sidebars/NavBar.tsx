import React from "react";
import {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {newLogin} from "../../../../modules/login/actions/LoginActions";
import {UserComplete} from "../../../../models/data/User";
import axios from "../../../../connection/Axios";

//import logo from "../../../../res/img/logo.svg";

interface ReduxState {
    login: any
}
interface IState {
    usuario: any,
    hayUser: boolean,
}
type IProps = ReduxState;

class NavBar extends React.Component<IProps, IState> {

    componentWillMount(): void {

        /*
        let response = undefined;

        axios.get("/session").then((resp) => {
            response = resp.data;
            console.log(response);
        });

        if (response === undefined) {
            console.log("no hay response");

            this.setState({
                usuario: "No se ha iniciado sesión",
                hayUser: false
            })
        }

        else {
            this.setState({
                usuario: response,
                hayUser: true
            })
        }

         */
    }

    render() : React.ReactNode {
        /*
        let nombre;

        if (!this.state.hayUser) {
            nombre = "no se ha iniciado sesión";
        }

        else {
            nombre = this.state.usuario.user;
        }

         */

        return (
            <Navbar className="navbar">
                <Navbar.Brand>
                    <Link to="/"> Volver inicio </Link>
                    <p>fdgsfdgdfg</p>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        login: state.LoginReducer.login
    }
}

export default connect(mapStateToProps, {})(NavBar);
import React from "react";
import {Alert} from "@material-ui/lab";
import {Link, Modal} from "@material-ui/core";

interface PropsModalComponent {
    open: boolean,
    parrafo: string,
    icono: any,
    recuperarEmail: boolean
}

interface State {
    open: boolean
}

type Props = PropsModalComponent;

export default class ModalComponent extends React.Component<Props, State> {

    componentWillMount(): void {
        this.setState({
            open: this.props.open
        })
    }

    componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        this.setState({
            open: nextProps.open
        })

    }

    onFormSubmit = async (e: any) => {

        // @ts-ignore
        const email = document.getElementById("email").value;

        const response = await fetch('/recuperarPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email})
        });

    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render(): React.ReactNode {
        return (
            <Modal
                open={this.state.open}
                className="Modal"
                disableAutoFocus
                disableEnforceFocus
                onClose={this.handleClose}
            >
                <Alert className="alerta" variant="filled" severity="success" icon={false}>
                    {this.props.icono}
                    <p>{this.props.parrafo}</p>
                    {this.props.recuperarEmail ?
                        <div>
                            <form onSubmit={this.onFormSubmit}>
                                <input type="text" className="input" id="email"/>
                                <br/>
                                <button className="boton" type="submit">Enviar</button>
                            </form>
                        </div>
                            :
                        <Link className="link" href="/login"> Ir a login </Link>}
                </Alert>
            </Modal>
        );
    }
}
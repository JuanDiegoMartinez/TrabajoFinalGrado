import React from "react";
import {Alert} from "@material-ui/lab";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {Link, Modal} from "@material-ui/core";

interface PropsModalComponent {
    open: boolean,
    parrafo: string,
    icono: any,
    recuperarEmail: boolean
}

type Props = PropsModalComponent;

export default class ModalComponent extends React.Component<Props, {}> {

    onFormSubmit = (e: any) => {
        e.preventDefault();
        //falta fetch
    }

    render(): React.ReactNode {
        return (
            <Modal
                open={this.props.open}
                className="Modal"
                disableAutoFocus
                disableEnforceFocus
            >
                <Alert className="alerta" variant="filled" severity="success" icon={false}>
                    {this.props.icono}
                    <p>{this.props.parrafo}</p>
                    {this.props.recuperarEmail ?
                        <div>
                            <form onSubmit={this.onFormSubmit}>
                                <input type="text" className="input" />
                                <br/>
                                <button className="boton" >Enviar</button>
                            </form>
                        </div>
                            :
                        <Link className="link" href="/login"> Ir a login </Link>}
                </Alert>
            </Modal>
        );
    }
}
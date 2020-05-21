import React from "react";
import {Alert} from "@material-ui/lab";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {Link, Modal} from "@material-ui/core";

interface PropsModalComponent {
    open: boolean
}

type Props = PropsModalComponent;

export default class ModalComponent extends React.Component<Props, {}> {

    render(): React.ReactNode {
        return (
            <Modal
                open={this.props.open}
                className="Modal"
                disableAutoFocus
                disableEnforceFocus
            >
                <Alert className="alerta" variant="filled" severity="success" icon={false}>
                    <CheckCircleOutlineIcon className="icono"/>
                    <p>Cuenta creada satisfactoriamente, haz click para ir a login</p>
                    <Link className="link" href="/login"> Ir a login </Link>
                </Alert>
            </Modal>
        );
    }
}
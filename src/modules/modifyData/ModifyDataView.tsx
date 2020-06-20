import React from "react";
import Container from "@material-ui/core/Container";
import {Avatar, Button, Icon, IconButton, InputAdornment} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {UserComplete, UserRegister} from "../../models/data/User";
import {Valoracion} from "../../models/data/Valoracion";
import Comentarios from "./Comentarios";
import SendIcon from '@material-ui/icons/Send';
import {handleButtonValidate} from "./validation/Validation";
import {AccountCircle, Visibility, VisibilityOff} from "@material-ui/icons";
import firebase from 'firebase';

interface ModifyDataProps {
    comentarios: Valoracion[],
    imagen: string
}

interface ModifyUserDataFormProps {
    initialValues: UserComplete
    onFormUserDataSubmit: (values: UserRegister) => void,
    onImagenSubmit: (url: string) => void
    onCommentsSubmit: (comentarios: Valoracion[]) => void
}

interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string,
    disabled: boolean,
    comment: string
}

type Props = InjectedFormProps<UserRegister, ModifyUserDataFormProps> & ModifyUserDataFormProps & ModifyDataProps;

interface State {
    mostrarComentarios: boolean,
}

class ModifyDataView extends React.Component<Props, State> {

    componentWillMount(): void {
        this.state = {
            mostrarComentarios: false,
        }
    }

    handleUpload = async (event: any) => {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/${this.props.initialValues.user}.jpg`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
        }, (error: any) => {
            console.log(error.message)
        }, () => {
            storageRef.getDownloadURL().then((url: any) => {
                this.props.onImagenSubmit(url);
            })
        })
    }

    //formProps contiene las funciones y datos
    renderInput = (formProps : FormInputProps) : React.ReactNode => {

        const fallo = formProps.meta.error && formProps.meta.touched ? true : false;

        if (formProps.type !== "date") {
            return (
                <TextField
                    disabled={formProps.disabled}
                    error={fallo}
                    helperText={fallo ? formProps.meta.error : ''}
                    autoComplete="off"
                    variant="outlined"
                    fullWidth
                    label={formProps.label}
                    inputProps={{...formProps.input}}
                    type={formProps.type}
                />
            );
        }
        else {
            return (
                <TextField
                    error={fallo}
                    helperText={fallo ? formProps.meta.error : ''}
                    autoComplete="off"
                    variant="outlined"
                    fullWidth
                    label={formProps.label}
                    inputProps={{...formProps.input}}
                    type={formProps.type}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            );
        }
    }

    onFormSubmit = async (formValues: any): Promise<void> => {

        //Comprueba que todos los valores sean correctos, si no son correctos no envía en formulario
        await handleButtonValidate(formValues, this.props.initialValues.email);

        if (!(this.props.initialValues === formValues)) {
            this.props.onFormUserDataSubmit(formValues);
        }
    }

    botonRenderizarComentarios = () => {

        this.setState({
            mostrarComentarios: !this.state.mostrarComentarios
        })

        if (this.state.mostrarComentarios) {
            // @ts-ignore
            document.getElementById("botonComentarios").innerText = "Muestra los comentarios";
        }

        else {
            // @ts-ignore
            document.getElementById("botonComentarios").innerText = "Esconde los comentarios";
        }
    }

    renderizarComentarios = (mostrar: boolean) => {

        if (mostrar) {
            return (<Comentarios comentarios={this.props.comentarios} onCommentsSubmit={this.props.onCommentsSubmit}/>)
        }
        return null;
    }


    render(): React.ReactNode {

        return(
            <Container maxWidth="md" className="container">
                <div className="divModificar">
                    <Avatar className="avatarModificar">
                        <img src={this.props.imagen} alt="no hay imagen" className="imagenModificar"/>
                    </Avatar>
                    <Button
                        variant="contained"
                        color="primary"
                        component="label"
                        startIcon={<CloudUploadIcon/>}
                    >
                        Upload
                        <input type="file" onChange={this.handleUpload} style={{display: 'none'}}/>
                    </Button>
                    <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="form">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Field name="user" component={this.renderInput} label="Nombre de usuario" type="text" disabled={true}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="nombre" component={this.renderInput} label="Nombre y apellidos" type="text"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="email" component={this.renderInput} label="Correo electrónico" type="email"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="nacimiento" component={this.renderInput} label="Fecha de nacimiento" type="date"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="password" component={this.renderInput} label="Contraseña" type="password"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="password2" component={this.renderInput} label="Confirmar contraseña" type="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" color="primary" variant="contained" startIcon={<SendIcon/>} className="botonModificarDatos"> Modificar Datos </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                onClick={this.botonRenderizarComentarios}
                                id="botonComentarios"
                                color="default"
                                variant="contained"
                                className="botonMuestraComentarios"
                            >
                                Muestra los comentarios
                            </Button>
                        </Grid>
                        {this.renderizarComentarios(this.state.mostrarComentarios)}
                    </Grid>
                </div>
            </Container>
        );
    }
}


export default reduxForm<UserRegister, ModifyUserDataFormProps>({
    form: 'modifyForm',
    enableReinitialize: true,
    // @ts-ignore
})(ModifyDataView);
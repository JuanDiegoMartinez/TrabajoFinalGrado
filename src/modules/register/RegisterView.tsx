import React from "react";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {UserRegister} from "../../models/data/User";
import {handleButtonValidate, validate} from "./validation/Validation"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {Link} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


interface UserFormProps {
    onFormSubmit: (values: UserRegister) => void
}

interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string
}

type Props = InjectedFormProps<UserRegister, UserFormProps> & UserFormProps;

class RegisterView extends React.Component<Props> {

    //formProps contiene las funciones y datos
    renderInput = (formProps : FormInputProps) : React.ReactNode => {

        const fallo = formProps.meta.error && formProps.meta.touched ? true : false;

        if (formProps.type !== "date") {
            return (
                <TextField
                    error={fallo}
                    helperText={fallo ? formProps.meta.error : ''}
                    autoComplete="off"
                    variant="outlined"
                    required
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
                    required
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

    handleFormSubmit = async (formValues: any) : Promise<void> => {

        //Comprueba que todos los valores sean correctos, si no son correctos no envía en formulario
        await handleButtonValidate(formValues);

        const user: UserRegister = {
            user: formValues.user,
            nombre: formValues.nombre,
            email: formValues.email,
            password: formValues.password,
            nacimiento: formValues.nacimiento
        }

        this.props.onFormSubmit(user);
    }

    render(): React.ReactNode {

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Avatar className="avatar">
                        <AssignmentIndIcon className="icon"/>
                    </Avatar>
                    <Typography component="h1" className="titulo">
                        Crear cuenta
                    </Typography>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} className="form">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Field name="user" component={this.renderInput} label="Nombre de usuario" type="text"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="nombre" component={this.renderInput} label="Nombre y apellidos" type="text"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="email" component={this.renderInput} label="Correo electrónico" type="email"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="email2" component={this.renderInput} label="Repite el correo electrónico" type="email"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="password" component={this.renderInput} label="Contraseña" type="password"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="password2" component={this.renderInput} label="Confirmar contraseña" type="password"/>
                            </Grid>
                            <Grid item xs={12} sm={6} className="itemNacimiento">
                                <Field name="nacimiento" component={this.renderInput} label="Fecha de nacimiento" type="date"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className="boton"
                                    onClick={() => this.props.reset()}
                                >
                                    Vaciar campos
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="boton"
                                >
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default reduxForm<UserRegister, UserFormProps>({
    form: 'registerForm',
    enableReinitialize: true,
    validate
})(RegisterView);
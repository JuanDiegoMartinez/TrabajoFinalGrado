import React from "react";
import {Field, Form, formValues, InjectedFormProps, reduxForm, reset, WrappedFieldProps} from "redux-form";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {User} from "../../models/User";


interface UserFormProps {
    onFormSubmit: (values: User) => void
}

interface IErrors {
    email: string | undefined,
    email2: string | undefined,
    password: string | undefined,
    password2: string | undefined,
}

export interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string
}

type Props = InjectedFormProps<User, UserFormProps> & UserFormProps;

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

    onSubmit = (formValues: any) : void => {

        const user: User = {
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
                        <LockOutlinedIcon className="icon"/>
                    </Avatar>
                    <Typography component="h1">
                        Crear cuenta
                    </Typography>
                    <form name="form" onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
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
                                    Cancelar
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

const validate = (formValues: any) : IErrors | any =>  {

    const errors : IErrors = {
        email: undefined,
        email2: undefined,
        password: undefined,
        password2: undefined
    }

    //Mirar en la base de datos si el user y el email coinciden

    if(formValues.email !== formValues.email2) {
        errors.email = "El email no coincide";
        errors.email2 = "El email no coincide";
    }

    if(formValues.password !== formValues.password2) {
        errors.password = "La contraseña no coincide";
        errors.password2 = "La contraseña no coincide";
    }

    if(formValues.password !== undefined && formValues.password2 !== undefined) {

        if(formValues.password.length < 7 || formValues.password2.length < 7) {
            errors.password = "La contraseña no coincide";
            errors.password2 = "La contraseña no coincide";
        }
    }


    return errors;
}

export default reduxForm<User, UserFormProps>({
    form: 'registerForm',
    enableReinitialize: true,
    validate
})(RegisterView);
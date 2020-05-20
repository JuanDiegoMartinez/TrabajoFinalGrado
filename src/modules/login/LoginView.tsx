import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {Login} from "../../models/data/Login";

interface LoginFormProps {
    onFormSubmit: (values: Login) => void
}

export interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string
}

type Props = InjectedFormProps<Login, LoginFormProps> & LoginFormProps;

class LoginView extends React.Component<Props> {

    renderInput = (formProps : FormInputProps) : React.ReactNode => {

        const fallo = formProps.meta.error && formProps.meta.touched ? true : false;

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

    onSubmit = (formValues: Login) : void => {

        this.props.onFormSubmit(formValues);
    }

    render() : React.ReactNode {

        return(
            <Container maxWidth="xs" className="container">
                <div className="div">
                    <Avatar className="avatar">
                        <LockOutlinedIcon className="icon"/>
                    </Avatar>
                    <Typography component="h1" className="titulo">
                        Iniciar Sesión
                    </Typography>
                    <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Field name="user" component={this.renderInput} label="Nombre de usuario" type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="password" component={this.renderInput} label="Contraseña" type="password"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="boton"
                                >
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password? (posible fuera)
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"No tienes cuenta? Create una!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    referencias de las apis
                </Box>
            </Container>
        );
    }
}

export default reduxForm<Login, LoginFormProps>({
    form: 'loginForm',
    enableReinitialize: true
})(LoginView);
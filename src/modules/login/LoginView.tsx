import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {Login} from "../../models/data/Login";
import {handleButtonValidate, validate} from "./validation/Validation";
import history from "../../history";

interface LoginViewProps {
    onRecuperarPassword: () => void
}

interface LoginFormProps {
    onFormSubmit: (values: Login) => void
}

export interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string
}

type Props = InjectedFormProps<Login, LoginFormProps> & LoginFormProps & LoginViewProps;

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

    handleFormSubmit = async (formValues: Login) : Promise<void> => {

        //Comprueba que todos los valores sean correctos, si no son correctos no envía en formulario
        await handleButtonValidate(formValues);

        this.props.onFormSubmit(formValues);
    }

    recuperarPassword = () => {
        this.props.onRecuperarPassword();
    }

    crearCuenta = () => {
        history.push("/registro");
    }

    render() : React.ReactNode {

        return(
            <Container maxWidth="xs" className="container">
                <div className="div">
                    <Avatar className="avatar">
                        <PersonIcon className="icon"/>
                    </Avatar>
                    <Typography component="h1" className="titulo">
                        Iniciar Sesión
                    </Typography>
                    <form className="form" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Field name="email" component={this.renderInput} label="Correo electrónico" type="email"/>
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
                                    Iniciar sesión
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link style={{cursor: 'pointer'}}  onClick={this.recuperarPassword}>
                                    Olvidaste la contraseña? (posible gmail)
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link style={{cursor: 'pointer'}} onClick={this.crearCuenta}>
                                    No tienes cuenta? Create una!
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <p>
                        NewsApi.org
                        <br/>
                        RAWG.io
                    </p>
                </Box>
            </Container>
        );
    }
}


export default reduxForm<Login, LoginFormProps>({
    form: 'loginForm',
    enableReinitialize: true,
    validate
    // @ts-ignore
})(LoginView);
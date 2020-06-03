import React from "react";
import Container from "@material-ui/core/Container";
import {
    Avatar,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel
} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {validate} from "../register/validation/Validation";
import {UserRegister} from "../../models/data/User";


interface UserFormProps {
    onFormSubmit: (values: UserRegister) => void
}

interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string
}

type Props = InjectedFormProps<UserRegister, UserFormProps> & UserFormProps;

interface State {
    picture: any
}

class ModifyDataView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            picture: ""
        }
    }

    handleUpload = async (event: any) => {
        const file = event.target.files[0];

        console.log(event.target.files);
        console.log(file);

        this.setState({
            picture: file
        })

        //const response = await axios.post('/imagen2', file);
    }

    handleButton = async (event: any) => {
        event.preventDefault();
        console.log(this.state);

        let formData = new FormData();

        formData.append('pic', this.state.picture);
        formData.append('nombre', "Julian");

        //const response = await axios.post('/imagen2', formData);

        //console.log(response.data);

        this.setState({
            picture: "hfljaksd"
        })
    }

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
        console.log("hola");
    }

    render(): React.ReactNode {
        return(
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Avatar style={{width: '200px', height: '200px', marginBottom: '10px'}}>
                        <img src={require('../../res/img/imagen.png')} alt="no hay imagen"/>
                    </Avatar>
                    <Button
                        variant="contained"
                        color="default"
                        component="label"
                        startIcon={<CloudUploadIcon/>}
                    >
                        Upload
                        <input type="file" onChange={this.handleUpload} style={{display: 'none'}}/>
                    </Button>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
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
                                <Field name="nacimiento" component={this.renderInput} label="Fecha de nacimiento" type="date"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="password" component={this.renderInput} label="Contraseña" type="password"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="password2" component={this.renderInput} label="Confirmar contraseña" type="password"/>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" >
                                        <FormLabel component="legend"> Selecciona tus juegos favoritos </FormLabel>
                                        <FormGroup style={{display: 'flex', flexDirection: 'row'}}>
                                            <Grid item xs={3}>
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="gilad" />}
                                                label="League of Legends"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="jason" />}
                                                label="Hearthstone"
                                            />
                                            </Grid>
                                            <Grid item xs={3}>
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="antoine" />}
                                                label="Antoine Llorca"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="antoine" />}
                                                label="Antoine Llorca"
                                            />
                                            </Grid>
                                            <Grid item xs={3}>
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="antoine" />}
                                                label="Antoine Llorca"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="antoine" />}
                                                label="Antoine Llorca"
                                            />
                                            </Grid>
                                            <Grid item xs={3}>
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="antoine" />}
                                                label="Antoine Llorca"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={false} name="antoine" />}
                                                label="Antoine Llorca"
                                            />
                                            </Grid>
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default reduxForm<UserRegister, UserFormProps>({
    form: 'modifyForm',
    enableReinitialize: true,
})(ModifyDataView);
import React from "react";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {Valoracion} from "../../../models/data/Valoracion";
import {Box, Button, Icon, TextField} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {handleButtonValidate} from "../validation/Validation";


interface ComentarioFormProps {
    onCommentSubmit: (values: any) => void
}

interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string
}

interface ComentarioProps {
    user: string,
    valoraciones: Valoracion[],
    imagen: string,
    id: string
}

interface State {
    rating: number | null
}

type Props = InjectedFormProps<any, ComentarioFormProps> & ComentarioFormProps & ComentarioProps;

class Comentario extends React.Component<Props, State> {

    componentWillMount(): void {
        this.setState({
            rating: 0
        })
    }

    handleFormSubmit = (formValues: any): void => {

        //Comprueba que todos los valores sean correctos, si no son correctos no envía en formulario
        handleButtonValidate(formValues);

        const ano = new Date().getFullYear();
        const mouth = new Date().getMonth() + 1;
        const day = new Date().getDate();

        let mouthString = "-" + mouth;
        let dayString = "-" + day;

        if (mouth < 10) {
            mouthString = "-0" + mouth;
        }

        if (day < 10) {
            dayString = "-0" + day;
        }

        const fecha = ano + mouthString + dayString;

        const datos = {
            comment: formValues.comentario,
            user: this.props.user,
            image: this.props.imagen,
            slug: this.props.id,
            rating: this.state.rating,
            date: fecha
        }

        this.props.onCommentSubmit(datos);
    }

    renderInput = (formProps : FormInputProps) : React.ReactNode => {

        const fallo = formProps.meta.error && formProps.meta.touched ? true : false;

        return(
            <TextField
                error={fallo}
                helperText={fallo ? formProps.meta.error : ''}
                label={formProps.label}
                type={formProps.type}
                inputProps={{...formProps.input}}
                multiline
                rows={4}
                variant="filled"
                className="comentario"
                placeholder="Escribe aquí tú comentario sobre el juego..."
                InputLabelProps={{
                    shrink: true,
                }}
            />
         )
    }

    render(): React.ReactNode {

        let haComentado = false;

        if (this.props.user === "") {
            return (
                <div>
                    <p className="InicioSesionAjustes">Para comentar primero debes <Link component={RouterLink} to="/login"> Iniciar sesión </Link></p>
                </div>
            )
        }

        else {
            let comentario = this.props.valoraciones.map((valoracion: Valoracion) => {

                if (valoracion.user === this.props.user) {
                    haComentado = true;
                    return (
                        <div>
                            <p className="InicioSesionAjustes">Ya has comentado, para modificar tu comentario debes ir a <Link component={RouterLink} to={`/usuario/${this.props.user}`}> Ajustes </Link> </p>
                        </div>
                    )
                }
            })

            if (!haComentado) {
                return (
                    <div>
                        <div className="divPuntuacion">
                        <p>Puntuación: </p>
                        <Box component="fieldset" mb={3} borderColor="transparent" className="cajaComentario">
                            <Rating
                                precision={0.5}
                                value={this.state.rating}
                                onChange={(event, newValue) => {
                                    this.setState({
                                        rating: newValue
                                    })
                                }}
                            />
                        </Box>
                        </div>
                        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                            <Field name="comentario" component={this.renderInput} label="Comentario" type="text" />
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<Icon>send</Icon>}
                                type="submit"
                                className="botonEnviaComen"
                            >
                                Enviar comentario
                            </Button>
                        </form>
                    </div>
                )
            }
            return comentario;
        }
    }
}

export default reduxForm<any, ComentarioFormProps>({
    form: 'comentarioForm',
    enableReinitialize: true
//@ts-ignore
})(Comentario);
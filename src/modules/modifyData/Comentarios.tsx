import React from "react";
import TextField from "@material-ui/core/TextField";
import {UserRegister} from "../../models/data/User";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {Valoracion} from "../../models/data/Valoracion";
import {Box, Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Rating} from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";
import Noty from "noty";

interface ComentariosProps {
    comentarios: Valoracion[]
}

interface ModifyCommentsFormProps {
    initialValues: Valoracion
    onFormUserDataSubmit: (values: UserRegister) => void,
    onCommentsSubmit: (comentarios: Valoracion[]) => void
}

interface FormInputProps extends WrappedFieldProps {
    name: string,
    label: string,
    type: string,
    disabled: boolean,
    comment: string
}

interface State {
    valoraciones: number[]
}

type Props = InjectedFormProps<UserRegister, ModifyCommentsFormProps> & ModifyCommentsFormProps & ComentariosProps;

class Comentarios extends React.Component<Props, State> {

    componentWillMount(): void {

        let ratings: number[] = [];

        this.props.comentarios.forEach((comentario: Valoracion) => {
            ratings.push(comentario.rating)
        })

        this.setState({
            valoraciones: ratings
        })
    }

    renderInputComentarios = (formProps : FormInputProps) : React.ReactNode => {

        if (formProps.input.value === "") {
            formProps.input.value = formProps.comment;
        }

        const fallo = formProps.meta.error && formProps.meta.touched ? true : false;

        return(
            <TextField
                error={fallo}
                helperText={fallo ? formProps.meta.error : ''}
                label={formProps.label}
                type={formProps.type}
                inputProps={{...formProps.input}}
                //placeholder={formProps.comment}
                multiline
                rows={4}
                variant="filled"
                className="comentario"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    }

    setValue = (comentario: Valoracion, rating: number) => {
        this.props.comentarios[this.props.comentarios.indexOf(comentario)].rating = rating;
        let ratings = this.state.valoraciones;
        ratings[this.props.comentarios.indexOf(comentario)] = rating;

        this.setState({
            valoraciones: ratings
        })
    }

    renderComentarios = () => {
        return this.props.comentarios.map((comentario: Valoracion) => {
            return (
                <Grid item xs={12}>
                    <p>Comentario del juego: {comentario.slug}</p>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                            precision={0.5}
                            value={this.state.valoraciones[this.props.comentarios.indexOf(comentario)]}
                            onChange={(event, newValue) => {
                                if (newValue != null) {
                                    this.setValue(comentario, newValue);
                                }
                            }}
                        />
                    </Box>
                    <Field name={comentario.slug} component={this.renderInputComentarios} label="Comentario" type="text" comment={comentario.comment} />
                </Grid>
            )
        })
    }

    handleCommentsSubmit = async (formValues: any) : Promise<void> => {

        let formValuesLista: any[] = [];

        for (const nombre in formValues) {
            formValuesLista.push({nombre: nombre, valor: formValues[nombre]});
        }

        let comments: Valoracion[] = this.props.comentarios;

        comments.forEach((comment: Valoracion) => {
            formValuesLista.forEach((comModificado: any) => {
                if (comment.slug === comModificado.nombre) {
                    comment.comment = comModificado.valor;
                }
            })
        });

        this.props.onCommentsSubmit(comments);

        new Noty({text: "Cambios en los comentarios realizados con éxito.", type: 'success', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();

        //Comprueba que todos los valores sean correctos, si no son correctos no envía en formulario
        //await handleButtonValidate(formValues);
    }

    render(): React.ReactNode {
        if (this.props.comentarios !== undefined) {
            return (
                <form onSubmit={this.props.handleSubmit(this.handleCommentsSubmit)}>
                    {this.renderComentarios()}
                    <Button type="submit" color="primary" variant="contained" startIcon={<SendIcon/>}>Modificar Comentarios</Button>
                </form>
            )
        }
        return <div>No has realizado ningún comentario</div>
    }
}

export default reduxForm<Valoracion, ModifyCommentsFormProps>({
    form: 'commentsForm',
    enableReinitialize: true,
    // @ts-ignore
})(Comentarios);
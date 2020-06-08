import React from 'react';
import Chip from '@material-ui/core/Chip';

interface State {
    datos: ChipData[]
}

export interface ChipData {
    nombre: string,
    seleccionado: boolean,
    color: string
}

interface ChipsProps {
    datos: string[]
    seleccionado: string,
    onFilterSubmit: (pestanaActual: number | undefined, seleccionado: string | undefined) => void,
    pestana: number
}

export default class Chips extends React.Component<ChipsProps,State> {

    constructor(props: any) {
        super(props);

        let lista : ChipData[] = [];

        this.props.datos.map((cadena: string) => {

            if (cadena === this.props.seleccionado) {
                lista.push({
                    nombre: cadena,
                    seleccionado: true,
                    color: 'rgba(30,114,198, 0.8)'
                })
            }

            else {
                lista.push({
                    nombre: cadena,
                    seleccionado: false,
                    color: ''
                })
            }
        })

        this.state = {
            datos: lista
        }
    }

    handleDelete = (chip: ChipData) => () => {

        const array = this.state.datos;

        const indice = array.indexOf(chip);

        //Eliminar el elemento de la lista
        array.splice(indice, 1);

        //Modificar el elemento
        let elem: ChipData = {
            nombre: chip.nombre,
            seleccionado: false,
            color: ''
        };

        //Volver a insertar el elemento en la mismo posición
        array.splice(indice, 0, elem);

        this.setState({
            datos: array
        });

        this.props.onFilterSubmit(this.props.pestana, undefined)
    }

    handleClick = (chip: ChipData) => () => {

        const array = this.state.datos;

        array.map((objeto: ChipData) => {

            //El objeto que estaba clicado lo desclicas
            if (objeto.seleccionado && objeto.nombre !== chip.nombre) {

                const indice = array.indexOf(objeto);

                //Eliminar el elemento de la lista
                array.splice(indice, 1);

                //Modificar el elemento
                let elem: ChipData = {
                    nombre: objeto.nombre,
                    seleccionado: false,
                    color: ''
                };

                //Volver a insertar el elemento en la mismo posición
                array.splice(indice, 0, elem);
            }
        })

        const indice = array.indexOf(chip);

        //Eliminar el elemento de la lista
        array.splice(indice, 1);

        //Modificar el elemento
        let elem: ChipData = {
            nombre: chip.nombre,
            seleccionado: true,
            color: 'rgba(30,114,198, 0.8)'
        };

        //Volver a insertar el elemento en la mismo posición
        array.splice(indice, 0, elem);

        this.setState({
            datos: array
        });

        this.props.onFilterSubmit(this.props.pestana, chip.nombre)
    }

    render(): React.ReactNode {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>

            {this.state.datos.map((object: any): any => {

                return(
                    <Chip
                        label={object.nombre}
                        onClick={this.handleClick(object)}
                        onDelete={!object.seleccionado ? undefined : this.handleDelete(object)}
                        style={{background: object.color, margin: '2px'}}
                    />
                );
            })}

        </div>
    );
    }
}
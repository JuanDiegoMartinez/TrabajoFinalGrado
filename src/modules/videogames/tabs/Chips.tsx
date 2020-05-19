import React from 'react';
import Chip from '@material-ui/core/Chip';

interface State {
    todos: ChipData[],
    seleccionados: string[]
}

interface ChipData {
    key: number,
    nombre: string,
    add: boolean,
    color: string
}

export default class Chips extends React.Component<{},State> {

    constructor(props: any) {
        super(props);

        this.state = {
            todos: [
                {
                    key: 1,
                    nombre: "Reactaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    add: false,
                    color: ''
                },
                {
                    key: 2,
                    nombre: "Jolinaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    add: false,
                    color: ''
                },
                {
                    key: 3,
                    nombre: "Jolinaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdfsdfsdfsdfsdfsdfsd",
                    add: false,
                    color: ''
                },
            ],
            seleccionados: []
        }
    }

    handleDelete = (chip: ChipData) => () => {

        const array = this.state.todos;

        let indice = array.indexOf(chip);

        //Eliminar el elemento de la lista
        array.splice(indice, 1);

        //Modificar el elemento
        let elem: ChipData = {
            key: chip.key,
            nombre: chip.nombre,
            add: false,
            color: ''
        };

        //Volver a insertar el elemento en la mismo posición
        array.splice(indice, 0, elem);

        //Eliminar de la array de seleccionados
        const seleccionadosArray = this.state.seleccionados;

        seleccionadosArray.splice(indice, 1);

        this.setState({
            todos: array,
            seleccionados: seleccionadosArray
        });
    };

    handleClick = (chip: ChipData) => () => {

        const array = this.state.todos;

        const indice = array.indexOf(chip);

        //Eliminar el elemento de la lista
        array.splice(indice, 1);

        //Modificar el elemento
        let elem: ChipData = {
            key: chip.key,
            nombre: chip.nombre,
            add: true,
            color: 'green'
        };

        //Volver a insertar el elemento en la mismo posición
        array.splice(indice, 0, elem);

        if (this.state.seleccionados.indexOf(chip.nombre) === -1) {

            this.setState({
                seleccionados: [...this.state.seleccionados, chip.nombre]
            });
        }

        this.setState({
            todos: array
        });
    };

    render(): React.ReactNode {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>

            {this.state.todos.map((object: ChipData): any => {

                return(
                    <Chip
                        label={object.nombre}
                        onClick={this.handleClick(object)}
                        onDelete={!object.add ? undefined : this.handleDelete(object)}
                        style={{background: object.color, margin: '2px'}}
                    />
                );
            })}

        </div>
    );
    }
}
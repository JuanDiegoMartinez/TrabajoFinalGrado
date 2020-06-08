import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface GroupedProps {
    datos: string[]
    seleccionado: string,
    onFilterSubmit: (pestanaActual: number | undefined, seleccionado: string | undefined) => void,
    pestana: number
}

interface State {
    prueba: string
}

export default class Grouped extends React.Component<GroupedProps, State>{

    options = this.props.datos.map((option) => {
        const firstLetter = option[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            option,
        };
    });

    handleChange = (event: any, value: any) => {

        if (value === null) {
            this.props.onFilterSubmit(2, undefined);
        }
        else {
            this.props.onFilterSubmit(2, value.option);
        }

    }

    render() : React.ReactNode {

        return (
            <Autocomplete
                id="grouped-demo"
                options={this.options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option: any) => option.firstLetter}
                getOptionLabel={(option: any) => option.option}
                style={{ width: '100%' }}
                renderInput={(params: any) => <TextField {...params} label="Selecciona una compañia" variant="outlined"/>}
                onChange={this.handleChange}
                defaultValue={{firstLetter: 'a', option: this.props.seleccionado}}
            />
        );
    }

}

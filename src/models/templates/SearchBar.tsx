import React from "react";
import {InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {grid, inputB, searchI} from "../../res/otrosCss/SearchBar";
import Grid from "@material-ui/core/Grid";
import {InjectedFormProps, reduxForm, WrappedFieldProps, Field} from "redux-form";

interface SearchFormProps {
    onFormSubmit: (palabra: string) => void
}

interface FormInputProps extends WrappedFieldProps {
    name: string
}

type Props = InjectedFormProps<{}, SearchFormProps> & SearchFormProps;

class SearchBar extends React.Component<Props> {

    handleFormSubmit = (formValues: any) : void => {
        this.props.onFormSubmit(formValues.busqueda);
    }

    //formProps contiene las funciones y datos
    renderInput = (formProps : FormInputProps) : React.ReactNode => {

        return(
            <InputBase
                placeholder="Search..."
                style={inputB}
                inputProps={{...formProps.input}}
            />
        );
    }

    render() : React.ReactNode {

        return (
            <Grid container style={grid}>
                <Grid item xs={1} sm={1}>
                    <SearchIcon style={searchI}/>
                </Grid>
                <Grid item xs={12} sm={11}>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Field component={this.renderInput} name="busqueda"/>
                    </form>
                </Grid>
            </Grid>
        );
    }
}

export default reduxForm<{}, SearchFormProps>({
    form: 'searchForm',
    enableReinitialize: true
})(SearchBar);
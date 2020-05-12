import React from "react";
import {InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {grid, inputB, searchI} from "../../res/otrosCss/SearchBar";
import Grid from "@material-ui/core/Grid";

export default class SearchBar extends React.Component<{}, {}> {

    formSubmit = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault();
        console.log("formulario enviado");
    }

    render() : React.ReactNode {

        return (
            <Grid container style={grid}>
                <Grid item xs={1} sm={1}>
                    <SearchIcon style={searchI}/>
                </Grid>
                <Grid item xs={12} sm={11}>
                    <form onSubmit={this.formSubmit}>
                    <InputBase
                        placeholder="Search..."
                        style={inputB}
                    />
                    </form>
                </Grid>
            </Grid>
        );
    }
}
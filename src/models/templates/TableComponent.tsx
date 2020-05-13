import React from "react";
import {Grid, Table, TableContainer} from "@material-ui/core";

export default abstract class TableComponent<T, S> extends React.Component<T, any> {

    abstract renderContent() : React.ReactNode;

    render() : React.ReactNode {

        return(
            <Grid container>
                <Grid item sm={12}>
                    <TableContainer className="tableContainer">
                        <Table className="tabla">
                            {this.renderContent()}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }
}
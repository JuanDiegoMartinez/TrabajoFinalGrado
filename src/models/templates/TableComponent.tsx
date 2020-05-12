import React from "react";
import {Grid, TableBody, TableCell, TableRow, Table, TableContainer} from "@material-ui/core";


export default abstract class TableComponent<T> extends React.Component<T> {

    abstract renderContent() : React.ReactNodeArray;

    render() : React.ReactNode {

        return(
            <Grid container>
                <Grid item sm={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow onClick={() => console.log("hehehe")}>
                                    <TableCell>
                                        {this.renderContent()}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }
}
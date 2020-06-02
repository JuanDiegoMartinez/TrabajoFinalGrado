import React from "react";
import TableComponent from "../../../models/templates/TableComponent";
import {News} from "../../../models/data/News";
import {Backdrop, CircularProgress, Link, TableBody, TableCell, TableFooter, TableRow} from "@material-ui/core";
import TablePaginationComponent from "../../../models/templates/TablePaginationComponent";
import {Link as RouterLink} from "react-router-dom";

interface NewsViewTableProps {
    data: News[]
}

interface State {
    rowsPerPage: number,
    page: number
}

export default class NewsViewTable extends TableComponent<NewsViewTableProps, State> {

    componentWillMount(): void {
        this.setState({
            rowsPerPage: 5,
            page: 0
        })
    }

    renderContent(): React.ReactNode {

        if (this.props.data === undefined) {
            return(
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        }

        return (
            <div>
                <TableBody>
                    {this.renderBody()}
                </TableBody>
                <TableFooter>
                    {this.renderPagination()}
                </TableFooter>
            </div>
        );
    }

    renderBody = (): React.ReactNode => {

        let {rowsPerPage, page} = this.state;

        let newsSlice = this.props.data.slice(rowsPerPage * page, (rowsPerPage * page) + rowsPerPage);

        return newsSlice.map((object: News) => {

            let id = newsSlice.indexOf(object).toString();

            return (
                <Link component={RouterLink} to={{pathname: `/noticia/${object.title}`, state: object}}>
                    <TableRow className="fila">
                        <TableCell className="col1">
                            <img src={object.urlImage} alt="no hay imagen" className="image"/>
                        </TableCell>
                        <TableCell className="col2">
                            <div className="titulo">{object.title}</div>
                            <div className="descripcion">{object.description}</div>
                        </TableCell>
                    </TableRow>
                </Link>
            );
        })
    }

    renderPagination = (): React.ReactNode => {
        return (
            <TablePaginationComponent numberOfRows={this.props.data.length} changeRowsPerPage={this.onChangeRowsPerPage} changePage={this.onChangePage}/>
        );
    };

    onChangeRowsPerPage = (rowsPerPage: number): void => {
        this.volverArriba();

        this.setState({
            rowsPerPage,
            page: 0
        });
    };

    onChangePage = (page: number): void => {
        this.volverArriba();

        this.setState({
            page
        })
    };

    //Volver arriba cuando se cambia de página
    volverArriba = (): void => {
        // @ts-ignore
        document.getElementById("top").scrollIntoView();
    }
}
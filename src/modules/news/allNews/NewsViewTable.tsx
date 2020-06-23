import React from "react";
import TableComponent from "../../../models/templates/TableComponent";
import {News, PartialNews} from "../../../models/data/News";
import {Backdrop, CircularProgress, Link, TableBody, TableCell, TableFooter, TableRow} from "@material-ui/core";
import TablePaginationComponent from "../../../models/templates/TablePaginationComponent";
import {Link as RouterLink} from "react-router-dom";

interface NewsViewTableProps {
    data: PartialNews[],
    page: number | undefined,
    rowsPerPage: number | undefined
}

interface NewsViewTableState {
    rowsPerPage: number,
    page: number
}

export default class NewsViewTable extends TableComponent<NewsViewTableProps, NewsViewTableState> {

    componentWillMount(): void {

        const {page, rowsPerPage} = this.props;

        let filaPorPagina = rowsPerPage === undefined ? 10 : rowsPerPage;
        let pagina = page === undefined ? 0 : page;

        this.setState({
            rowsPerPage: filaPorPagina,
            page: pagina
        })
    }

    //Se ejecuta cuando se reciben props
    componentWillReceiveProps(props: Readonly<NewsViewTableProps>): void {

        const {page, rowsPerPage} = props;

        let filaPorPagina = rowsPerPage === undefined ? 10 : rowsPerPage;
        let pagina = page === undefined ? 0 : page;

        this.setState({
            rowsPerPage: filaPorPagina,
            page: pagina
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

        return newsSlice.map((object: PartialNews) => {

            return (
                <Link component={RouterLink} to={`/noticia/${object.slug}`}>
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
            <TablePaginationComponent
                numberOfRows={this.props.data.length}
                changeRowsPerPage={this.onChangeRowsPerPage}
                changePage={this.onChangePage}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
            />
        );
    };

    onChangeRowsPerPage = (rowsPerPage: number): void => {

        fetch('/cookieRowsPerPage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({rowsPerPage, page: 0}),
        }).then(r => {});

        this.volverArriba();

        this.setState({
            rowsPerPage,
            page: 0
        });
    };

    onChangePage = (page: number): void => {

        fetch('/cookiePage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({page}),
        }).then(r => {});

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
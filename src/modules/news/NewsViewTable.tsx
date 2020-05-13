import React from "react";
import TableComponent from "../../models/templates/TableComponent";
import {News} from "../../models/data/News";
import {TableBody, TableCell, TableFooter, TableRow} from "@material-ui/core";
import TablePaginationComponent from "../../models/templates/TablePaginationComponent";

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
            rowsPerPage: 10,
            page: 0
        })
    }

    renderContent(): React.ReactNode {
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
            return (
                <TableRow onClick={() => console.log("he pulsado")} className="fila">
                    <TableCell className="col1">
                        <img src="https://i11b.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5153833.jpg" alt="no hay imagen" className="image"/>
                    </TableCell>
                    <TableCell className="col2">
                        <div className="titulo">{object.title}</div>
                        <div className="descripcion">{object.description}</div>
                    </TableCell>
                </TableRow>
            );
        })
    }

    renderPagination = (): React.ReactNode => {
        return (
            <TablePaginationComponent numberOfRows={this.props.data.length} changeRowsPerPage={this.onChangeRowsPerPage} changePage={this.onChangePage}/>
        );
    };

    onChangeRowsPerPage = (rowsPerPage: number): void => {
        this.setState({
            rowsPerPage,
            page: 0
        });
    };

    onChangePage = (page: number): void => {
        this.setState({
            page
        })
    };
}
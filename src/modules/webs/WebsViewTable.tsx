import React from "react";
import TableComponent from "../../models/templates/TableComponent";
import {
    Backdrop,
    CircularProgress,
    IconButton,
    SvgIcon,
    TableBody,
    TableCell,
    TableFooter,
    TableRow
} from "@material-ui/core";
import TablePaginationComponent from "../../models/templates/TablePaginationComponent";
import {Web} from "../../models/data/Web";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import BookIcon from '@material-ui/icons/Book';
import Noty from "noty";

interface WebsViewTableProps {
    data: Web[],
    page: number | undefined,
    rowsPerPage: number | undefined,
    user: string,
    websEstaFavoritas: any[],
    anadirFavorito: (juego: any) => void,
}

interface WebsViewTableState {
    rowsPerPage: number,
    page: number
}

export default class WebsViewTable extends TableComponent<WebsViewTableProps, WebsViewTableState> {

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
    componentWillReceiveProps(props: Readonly<WebsViewTableProps>): void {

        const {page, rowsPerPage} = props;

        let filaPorPagina = rowsPerPage === undefined ? 10 : rowsPerPage;
        let pagina = page === undefined ? 0 : page;

        this.setState({
            rowsPerPage: filaPorPagina,
            page: pagina
        })
    }

    handleFavoritos = (e: any) => {

        console.log(e.target)

        let indice = e.target.id;

        if (this.props.user === "") {
            new Noty({text: 'Debes iniciar sesión para añadir el juego a favoritos.', type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
        }

        else if (this.props.websEstaFavoritas[indice]) {
            new Noty({text: 'El juego ya se encuentra en tus favoritos. Para gestionar tus favoritos ve a Juegos Favoritos.', type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
        }
        else {
            const favorito = {
                id: this.props.data[indice].urlWeb,
                name: this.props.data[indice].name,
                isDir: false,
                thumbnailUrl: this.props.data[indice].urlImage,
                childrenIds: [],
                parentId: "Webs Favoritas"
            };

            new Noty({text: 'Webs añadida a favoritos.', type: 'success', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();

            this.props.anadirFavorito(favorito);
        }
    }

    tipoBotonFavoritos = (tipo: boolean, id: number) => {

        if (!tipo) {
            return (
                <IconButton color="primary" className="botonFavoritosWebs" onClick={this.handleFavoritos} id={id.toString()}>
                    <SvgIcon className="iconoFavoritos" id={id.toString()}>
                        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" id={id.toString()}> </path>
                    </SvgIcon>
                </IconButton>
            )
        }
        return (
            <IconButton color="primary" className="botonFavoritosWebs" onClick={this.handleFavoritos} id={id.toString()}>
                <SvgIcon className="iconoFavoritos" id={id.toString()}>
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" id={id.toString()}> </path>
                </SvgIcon>
            </IconButton>
        )
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

        let websSlice = this.props.data.slice(rowsPerPage * page, (rowsPerPage * page) + rowsPerPage);

        return websSlice.map((object: Web) => {

            return (
                <TableRow className="filaWebs">
                    <TableCell className="col1Webs">
                        <img src={object.urlImage} alt="no hay imagen" className="imageWebs"/>
                    </TableCell>
                    <TableCell className="col2Webs">
                        <a href={object.urlWeb} className="tituloWebs" target="_blank">{object.name}</a>
                        <div className="descripcionWebs">{object.description}</div>
                    </TableCell>
                    <TableCell className="col3Webs">
                        {this.tipoBotonFavoritos(this.props.websEstaFavoritas[this.props.data.indexOf(object)], this.props.data.indexOf(object))}
                    </TableCell>
                </TableRow>
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
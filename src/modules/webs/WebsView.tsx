import React from "react";
import Container from "@material-ui/core/Container";
import {Web} from "../../models/data/Web";
import WebsViewTable from "./WebsViewTable";
import Pestanas from "./Pestanas";

interface WebsViewProps {
    webs: Web[],
    seleccionado: string,
    page: number | undefined,
    rowsPerPage: number | undefined,
    onFilterSubmit: (pestanaActual: number | undefined, seleccionado: string | undefined) => void,
    user: string,
    websFavoritas: any[],
    anadirFavorito: (juego: any) => void,
}

export default class WebsView extends React.Component<WebsViewProps, {}> {

    render(): React.ReactNode {

        let arrayEstaWebsFavoritas: any[] = [];

        if (this.props.webs !== undefined) {

            this.props.webs.forEach((web: Web) => {
                arrayEstaWebsFavoritas.push(false);
            })

            this.props.webs.forEach((web: Web) => {

                this.props.websFavoritas.forEach((file: any) => {

                    if (web.urlWeb === file.id) {
                        arrayEstaWebsFavoritas[this.props.webs.indexOf(web)] = true;
                    }
                })
            })
        }

        return (
            <Container maxWidth="md" id="top">
                <Pestanas pestanaActual={0} seleccionado={this.props.seleccionado} onFilterSubmit={this.props.onFilterSubmit}/>
                {this.props.webs !== undefined && this.props.webs.length === 0 ?
                    <h1 style={{textAlign: 'center', margin: '20px'}}> No se han encontrado webs</h1>
                    : <WebsViewTable data={this.props.webs} page={this.props.page} rowsPerPage={this.props.rowsPerPage} user={this.props.user} websEstaFavoritas={arrayEstaWebsFavoritas}
                    anadirFavorito={this.props.anadirFavorito}/> }
            </Container>
        );
    }
}
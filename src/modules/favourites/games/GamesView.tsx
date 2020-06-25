import React from "react";
import 'chonky/style/main.css';
import Container from "@material-ui/core/Container";
import Carpetas from "./Carpetas";

interface GamesViewProps {
    modificarFavoritos: (listajuegos: any[]) => void,
    datos: any[],
    tipo: string
}

export default class GamesView extends React.Component<GamesViewProps, {}> {

    render(): React.ReactNode {

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Carpetas modificarFavoritos={this.props.modificarFavoritos} datos={this.props.datos} tipo={"videojuegos"}/>
                </div>
            </Container>
        )
    }
}
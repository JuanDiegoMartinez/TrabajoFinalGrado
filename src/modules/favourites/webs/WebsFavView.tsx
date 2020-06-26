import React from "react";
import 'chonky/style/main.css';
import Container from "@material-ui/core/Container";
import Carpetas from "../games/Carpetas";

interface WebsViewProps {
    modificarFavoritos: (listawebs: any[]) => void,
    datos: any[],
    tipo: string
}

export default class WebsFavView extends React.Component<WebsViewProps, {}> {

    render(): React.ReactNode {

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Carpetas modificarFavoritos={this.props.modificarFavoritos} datos={this.props.datos} tipo={"webs"}/>
                </div>
            </Container>
        )
    }
}
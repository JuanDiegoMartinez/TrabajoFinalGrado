import React from "react";
import 'chonky/style/main.css';
import Container from "@material-ui/core/Container";
import Carpetas from "./Carpetas";

export default class GamesView extends React.Component<{}, {}> {

    render(): React.ReactNode {

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <Carpetas/>
                </div>
            </Container>
        )
    }
}
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import GameBoard from "./GameBoard";

class Main extends Component {

    render() {
        return (
            <Container>
                <GameBoard />
            </Container>
        )
    }
}

export default Main;
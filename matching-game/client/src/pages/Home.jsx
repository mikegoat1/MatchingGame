import React from "react";
import "./Home.css";
import data from "../seed/seed.json"

import Card from "../components/Card/index"


import { Container, Row, Col } from "react-bootstrap";

function Home() {

    data.sort(function() {
        //randomize the grid. 
        return 0.5 - Math.random(); 
    })



    return (
        <Container id="game-board">
            <Row>
                <Col clasName="flexer" >
                    <section className="grid change">
                        {data.map(card => {
                            return (
                                <Card name={card.name} backgroundImage={card.img} />
                            )
                        })}

                    </section>
                </Col>
            </Row>
          
        </Container>

    );
}

export default Home;
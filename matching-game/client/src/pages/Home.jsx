import React, { useEffect, useState } from "react";
import "./Home.css";
import data from "../seed/seed.json"

import Card from "../components/Card/index"


import { Container, Row, Col } from "react-bootstrap";

function Home() {

    data.sort(function () {
        //randomize the grid
        return 0.5 - Math.random();
    })

    const [selected, setSelected] = useState(false); 

    // You want to make a container add a class when selected

    const toggleClass = () => {
        setSelected(!selected)
    }; 



    return (
        <Container id="game-board">
            <Row>
                <Col clasName="flexer" >
                    <section className="grid change">
                        {data.map(card => {
                            return (
                                <Card 
                                key={}
                                selected={selected} 
                                toggleClass={toggleClass} 
                                name={card.name} 
                                backgroundImage={card.img} />
                            )
                        })}

                    </section>
                </Col>
            </Row>

        </Container>

    );
}

export default Home;
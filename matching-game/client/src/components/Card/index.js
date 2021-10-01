import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";

function Cards({ name, backgroundImage }) {


    return (
    

            <div className="card" data={name} style={{ backgroundImage: `url(${backgroundImage})` }} >
                    
            </div>

       
    );
}

export default Cards;

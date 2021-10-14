import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";

function Cards({ name, backgroundImage, selected, toggleClass }) {


    return (
    

            <div 
            onClick={toggleClass} 
            className={`card ${selected ? "selected" : null }`} 
            data={name} 
            style={{ backgroundImage: `url(${backgroundImage})` }} >
                    
            </div>

       
    );
}

export default Cards;

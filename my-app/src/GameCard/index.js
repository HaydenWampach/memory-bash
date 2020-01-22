import React from "react";
import "./gamecardstyle.css";

function GameCard(props) {
    return (
        <div className="card">
            <img className="cardImage" alt={props.name} src={props.image} value={props.id} value={props.id} onClick={props.onClick}/>
        </div>
    );
}

export default GameCard;
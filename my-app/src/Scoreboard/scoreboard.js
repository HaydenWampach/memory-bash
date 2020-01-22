import React from 'react';
import "./scoreboard.css";

function Scoreboard(props) {
    return (
        <div className="nav-item scoreboard">
            Score: {props.score} |
            Highest Score: {props.topScore}
            <h2 id='winLoss'>{props.winLossMessage}</h2>
        </div>
    )
}

export default Scoreboard;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    console.log(props)
    const {name, image, salary} = props.player;
    return (
        <div className="single-player">
            <div className="card">
                <div>
                    <img src={image} alt="" className="card__image"/>
                </div>
                <div className="card__name">
                    <h4>{name}</h4>
                    <h5>Salary: ${salary}</h5>
                </div>
                <button onClick={()=>props.handleAddPlayer(props.player)} class="btn draw-border"><FontAwesomeIcon icon={faCheck} /> Select</button>
            </div>
        </div>
    );
};

export default Player;
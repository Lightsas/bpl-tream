import React from 'react';
import './SelectPlayer.css';
import '../../css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup'

const SelectPlayer = (props) => {
    const select = props.select;
    const totalSelari = select.reduce( (sum, player)=> sum + player.salary, 0)
    return (
        <div className="select-part">
            <h2 className="selected-player">SELECTED PLAYERS</h2>
            <p className="total-select">Total Select Players: {select.length}</p>
            <h5 className="Player-name">Selected Player Name and Salary</h5>
            {
              select.map(player =>
                <ListGroup className="list-group" variant="flush">
                    <ListGroup.Item variant="warning">{player.name + " $" +player.salary}</ListGroup.Item>
                </ListGroup>)
            }<br></br>
            <p className="total-selary">Total Salary: ${totalSelari}</p>
        </div>
    );
};


export default SelectPlayer;
import React from 'react';
import { useState, useEffect } from 'react';
import plyersData from '../../data/data.json';
import Player from './playerComponets/Player';
import './Players.css';
import SelectPlayer from './selectComponent/SelectPlayer';

const Players = () => {
    const [plyers, setPlyers] = useState([])
    const [select, setSelect] = useState([])

    const handleAddPlayer = (player) =>{
        const newSelect = [...select, player]
        setSelect(newSelect);
    }
    useEffect(()=>{
        setPlyers(plyersData);
      }, [])
    return (
        <div className="players-container">
            <div className="player-container">
                {
                    plyersData.map(player =><Player handleAddPlayer ={handleAddPlayer} player={player}></Player>)
                }
            </div>
            <div className="player-selection-container">
                <SelectPlayer select={select}></SelectPlayer>
            </div>
        </div>
    );
};

export default Players;
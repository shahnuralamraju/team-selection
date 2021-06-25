import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../fcran.png';
import './ShowPlayer.css';
import PlayerData from '../../Componants/PlayerData/PlayerData.json';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import ShowPlayerAdd from '../ShowPlayerAdd/ShowPlayerAdd';
const ShowPlayer = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(PlayerData)
    }, []);

    const [addPlayers, setAddPlayer] = useState([]);
    const handlePlayerAdding = (player) => {
        const newAddPlayer = [...addPlayers, player];
        setAddPlayer(newAddPlayer);

    }

    const totalSalary = addPlayers.reduce((sum, salary) => sum + Number(salary.salary) * 12, 0);

    const removePlayer = (playerId) => {
        const remainingPlayer = addPlayers.filter((arrElm, index) => index !== playerId);
        setAddPlayer(remainingPlayer);
    }

    return (
        <div className='row'>
            <div className="player-detail col-md-7 p-4">
                {
                    players.map(player => <PlayerDetail detail={player} handlePlayerAdding={handlePlayerAdding} key={player.id} ></PlayerDetail>)
                }
            </div>
            <div className="addPlayer-detail col-md-5">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <h2 className='same-text'>Added Player {addPlayers.length}</h2>
                {
                    addPlayers.map((addPlayer, index) => <ShowPlayerAdd addPlayer={addPlayer} removePlayer={removePlayer} key={index} id={index}></ShowPlayerAdd>)
                }
                <br />
                <h3 className='same-text'>Total Salary $ {totalSalary}</h3>
            </div>

        </div>
    );
};

export default ShowPlayer;
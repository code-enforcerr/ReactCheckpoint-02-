import React from 'react';
import Player from '../Player/Player';
import players from '../Players/players';

const PlayersList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;

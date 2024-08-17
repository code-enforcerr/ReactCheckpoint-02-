import React from 'react';
import PlayersList from './Components/PlayersList/PlayersList';
import './App.css'
import './index.css'

function App() {
    return (
        <div style={{ padding: '2rem', backgroundColor: 'black' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>FIFA Player Cards</h1>
            <PlayersList />
        </div>
    );
}

export default App;

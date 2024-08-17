import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem', textAlign: 'center', border:'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/150"
};

export default Player;

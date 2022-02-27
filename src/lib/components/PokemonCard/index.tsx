import { Card, Button } from 'react-bootstrap';
import React from 'react';

const PokemonCard = ({ avatar, name }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={avatar} />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;

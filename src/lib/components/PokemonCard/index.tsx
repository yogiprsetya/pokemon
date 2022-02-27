import { Card, Button } from 'react-bootstrap';
import React from 'react';

interface IPokemonCard {
  avatar: string;
  name: string;
  cta?: string;
  onClick(): any;
}

const PokemonCard = (props: IPokemonCard) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.avatar} />

      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Button variant='primary' onClick={props.onClick}>
          {props.cta || 'Catch'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;

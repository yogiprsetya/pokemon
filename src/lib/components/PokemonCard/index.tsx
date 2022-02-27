import { Card, Button } from 'react-bootstrap';
import React from 'react';

interface IPokemonCard {
  avatar: string;
  name: string;
  disabled?: boolean;
  cta?: string;
  onClick(): any;
}

const PokemonCard = (props: IPokemonCard) => {
  return (
    <Card>
      <Card.Img variant='top' src={props.avatar} />

      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Button
          variant='primary'
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.cta || 'Catch'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;

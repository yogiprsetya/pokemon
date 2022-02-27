import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PokemonCard from 'lib/components/PokemonCard';
import { getLocalStorage, setLocalStorage } from 'service/localStorage';

interface IPokemons {
  id: string;
  nickname: string;
  originName: string;
}

const PokemonList = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  const release = (id) => {
    pokemons.splice(
      pokemons.findIndex((i) => {
        return i.id === id;
      }),
      1
    );

    console.log(pokemons);
  };

  useEffect(() => {
    (async () => {
      const res = getLocalStorage('mypokemon');
      console.log(res);

      setPokemons(res);
    })();
  }, []);

  return (
    <Container className='mt-5'>
      <Row>
        {pokemons?.map((v, i) => (
          <Col key={i} sm={12} md={3} className='mb-3'>
            <PokemonCard
              avatar={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${v.id}.png`}
              name={`${v.nickname} (${v.originName})`}
              cta='View'
              onClick={() => history.push(`pokemon/${v.id}`)}
            />

            <Button variant='danger' onClick={() => release(v.id)}>
              Remove
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonList;

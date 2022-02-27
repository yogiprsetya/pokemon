import { useState, useEffect } from 'react';
import { httpGet } from 'service/api';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PokemonCard from 'lib/components/PokemonCard';

interface IPokemons {
  name: string;
  url: string;
}

const PokemonList = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  const idParser = (url) => url.split('/')[url.split('/').length - 2];

  useEffect(() => {
    (async () => {
      const res = await httpGet('pokemon');
      setPokemons(res.data.results);
    })();
  }, []);

  return (
    <Container className='mt-5'>
      <Row>
        {pokemons?.map((v, i) => (
          <Col key={i} sm={12} md={3} className='mb-3'>
            <PokemonCard
              avatar={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idParser(
                v.url
              )}.png`}
              name={v.name}
              cta='View'
              onClick={() => history.push(`pokemon/${idParser(v.url)}`)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonList;

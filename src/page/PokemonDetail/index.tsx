import { useState, useEffect } from 'react';
import { httpGet } from 'service/api';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IPokemons {
  name: string;
}

const PokemonDetail = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

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
          <Col key={i}>
            <Link to={`/`}>
              <h2>
                <Badge>{v.name}</Badge>
              </h2>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonDetail;

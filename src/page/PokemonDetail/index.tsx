import { useState, useEffect } from 'react';
import { httpGet } from 'service/api';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PokemonCard from 'lib/components/PokemonCard';
import SavePokemon from './SavePokemon';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState<any>();
  const [selectedId, setSelectedId] = useState<number>(0);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await httpGet(`pokemon/${id}`);
      setPokemon(res.data);
    })();
  }, [id]);

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={12} md={3}>
          <PokemonCard
            avatar={pokemon?.sprites.front_default}
            name={pokemon?.name}
            onClick={() => setSelectedId(id)}
          />
        </Col>

        <Col sm={12} md={9}>
          <h2>Abilities</h2>

          <ul>
            {pokemon?.abilities.map((v, i) => (
              <li key={i}>{v.ability.name}</li>
            ))}
          </ul>
        </Col>
      </Row>

      <SavePokemon
        show={!!selectedId}
        id={selectedId}
        name={pokemon?.name}
        onClose={() => setSelectedId(0)}
      />
    </Container>
  );
};

export default PokemonDetail;

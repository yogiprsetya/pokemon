import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PokemonCard from 'lib/components/PokemonCard';
import { setMyPokemon } from 'store/myPokemon.action';
import { setLocalStorage } from 'service/localStorage';

interface IPokemonList {
  id: string;
  nickname: string;
  originName: string;
}

const PokemonList = ({ pokemons, dispatch }) => {
  const history = useHistory();
  const [pokemonList, setPokemonList] = useState<IPokemonList[]>([]);

  const release = (id) => {
    pokemons.splice(
      pokemons.findIndex((i) => {
        return i.id === id;
      }),
      1
    );

    dispatch(setMyPokemon(pokemons));
    setLocalStorage('mypokemon', pokemons);
    setPokemonList(pokemons);
  };

  useEffect(() => {}, [pokemons]);

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

            <div className='d-flex justify-content-center mt-1'>
              <Button variant='danger' onClick={() => release(v.id)}>
                Remove
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state.myPokemon.pokemons,
});

export default connect(mapStateToProps)(PokemonList);

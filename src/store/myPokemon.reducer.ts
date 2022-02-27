import { getLocalStorage } from 'service/localStorage';

const localPokemons = getLocalStorage('mypokemon');

const initialState = {
  pokemons: localPokemons || [],
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case 'MY_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}

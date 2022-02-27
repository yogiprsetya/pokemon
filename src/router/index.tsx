import { lazy } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const RouteManager = () => {
  const importer = (pages: string) => lazy(() => import(`page/${pages}`));

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={importer('PokemonList')} />
        <Route path='/pokemon/:id' element={importer('PokemonDetail')} />
        <Route path='/my-pokemon' element={importer('MyPokemons')} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouteManager;

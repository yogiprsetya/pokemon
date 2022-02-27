import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteManager from 'router';
import Header from 'lib/layouts/Header';

function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Header />
      <RouteManager />
    </Suspense>
  );
}

export default App;

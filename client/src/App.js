import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'
import Detail from './components/Detail';
import PokemonsCreated from './components/PokemonsCreated';
// import SearchBar from './components/SearchBar';
// import CardPoke from './components/CardPoke';
// import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">  <LandingPage /> </Route>
      <Route exact path="/home" ><Home />  </Route>
      {/* <Route path="/home" component={SearchBar} /> */}
      <Route path="/home/:id" component={Detail} />
      <Route path="/pokemonscreated" component={PokemonsCreated} />
      </Switch>
    </div>
  );
}

export default App;

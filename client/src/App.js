import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'
import Detail from './components/Detail';
import PokemonsCreated from './components/PokemonsCreated';
import {useEffect}from 'react';
import {useDispatch} from 'react-redux';
import { getPokemons } from './actions';
// import SearchBar from './components/SearchBar';
// import CardPoke from './components/CardPoke';
// import Nav from './components/Nav/Nav.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons())
}, [])
  return (

    <div className={styles.app}>
      <div className={styles.container}>
      <Switch>
      <Route exact path="/">  <LandingPage /> </Route>
      <Route exact path="/home" ><Home />  </Route>
      {/* <Route path="/home" component={SearchBar} /> */}
      <Route path="/home/:id" component={Detail} />
      <Route path="/pokemonscreated" component={PokemonsCreated} />
      </Switch>
      </div>
    </div>
  );
}

export default App;

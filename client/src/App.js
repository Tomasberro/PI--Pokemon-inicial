import styles from './App.module.css';
import React from 'react';
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
 import Favorites from './components/Favorites';
import NavBar from './components/NavBar';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons())
}, [dispatch])
  return (

    <div className={styles.app}>
      {/* <div className={styles.container}> */}
      <Switch>
      <Route exact path="/" component={LandingPage} /> 
      {/* <Route exact path="/" component={NavBar} />  */}
      <Route exact path="/home" component={Home} />
      {/* <Route path="/home" component={SearchBar} /> */}
      <Route path="/home/:id" component={Detail} />
      <Route path="/pokemonscreated" component={PokemonsCreated} />
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      </Switch>
      {/* </div> */}
    </div>
  );
}

// export default App;

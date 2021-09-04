import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'
// import CardPoke from './components/CardPoke';
// import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/" ><Home />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'
import Detail from './components/Detail';
// import CardPoke from './components/CardPoke';
// import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">  <LandingPage /> </Route>
      <Route exact path="/home" ><Home />  </Route>
      <Route path="/home/:id" component={Detail} />

      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import BasketBall from './Components/BasketBall/BasketBall'
import { FootBall } from './Components/FootBall/FootBall';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <div>homepage</div>
        </Route>
        <Route path="/football">
          <FootBall/>
        </Route>
        <Route path="/basketball">
          <BasketBall />

        </Route>
        <Route>
          page not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;

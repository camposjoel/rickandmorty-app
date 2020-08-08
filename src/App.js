import React from 'react';
import NavBar from './components/NavBar';
import 'bulma/css/bulma.css'
import CardList from './components/CardList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Switch>
            <Route exact path='/' component={CardList} />
          </Switch>
        </NavBar>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HelloWorld} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

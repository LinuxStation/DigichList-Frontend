import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './styles/app/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Auth from './pages/auth/Auth'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path="/auth" component={Auth}/>
      </Switch>
    </Router>
  );
}

export default App;

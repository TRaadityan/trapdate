import React from 'react';
import Profile from './Profile';
import login from './login';
// import './App.css';
import{Route,BrowserRouter as Router,Switch}from "react-router-dom";

function App() {
 
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/trapdate/" component={login}/>
            <Route  exact path="/profile" component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

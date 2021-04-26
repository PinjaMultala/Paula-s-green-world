import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/Pages/FrontPage';
import Products from './Components/Pages/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/products" component={Products} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

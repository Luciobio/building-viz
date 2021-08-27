import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home'
import Building from './components/Building/Building'
import Amenities from './components/Amenities/Amenities'
import Plants from './components/Plants/Plants'

import './App.css'

function App() {
  return (
    <Router className='main'>
      <div className='App'>
      <div className='menu'>
        <Link to='/' className='btn'>
          Home
        </Link>
        <Link to='/building' className='btn'>
          Building
        </Link>
        <Link to='/amenities' className='btn'>
          Amenities
        </Link>
        <Link to='/plants' className='btn'>
          Plants
        </Link>
        <Link to='/slideshow' className='btn'>
          Slideshow
        </Link>
      </div>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/building'>
          <Building/>
        </Route>
        <Route path='/amenities'>
          <Amenities/>
        </Route>
        <Route path='/plants'>
          <Plants/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

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
import Floorplans from './components/Floorplans/Floorplans'
import Video from './components/Video/Video'
import {ReactComponent as MenuIcon} from './icons/menu.svg'
import {ReactComponent as Xmark} from './icons/x-mark.svg'
import blackLogo from './icons/3DUS_logo_black.png'
import {ReactComponent as FbIcon} from './icons/facebook.svg'
import {ReactComponent as IgIcon} from './icons/instagram.svg'
import {ReactComponent as WaIcon} from './icons/whatsapp.svg'

import './App.css'


function App() {

  const date = new Date("01/20/2021");
  const year = date.getFullYear();

  const changeClassName = () => {
    let cMenu = document.getElementById('menu');
    let cShadow = document.getElementById('shadow');
    cMenu.className = (cMenu.className === 'menu-in') ? 'menu-out' : 'menu-in';
    cShadow.className = (cShadow.className === 'shadowOn') ? 'shadowOff' : 'shadowOn';
  }

  return (
    <Router className='main'>
      <div className='App'>
      <div className='menu-cont'>
        <button className='menu-btn' onClick= {changeClassName}>
          <MenuIcon className='menuIcon'/>
        </button>
        <div id='menu' className='menu'>
          <div className='menu-head'>
            <button className='btn' onClick= {changeClassName}>
              <Xmark className='xmark' />
            </button>
          </div>
          <div className='menu-links'>
            <Link to='/' className='menu-link' onClick= {changeClassName}>
              Home
            </Link>
            <Link to='/building' className='menu-link' onClick= {changeClassName}>
              Building
            </Link>
            <Link to='/amenities' className='menu-link' onClick= {changeClassName}>
              Amenities
            </Link>
            <Link to='/floorplans' className='menu-link' onClick= {changeClassName}>
              Floorplans
            </Link>
            <Link to='/video' className='menu-link' onClick= {changeClassName}>
              Video
            </Link>
          </div>
          <div className='menu-bot'>
            <img src={blackLogo} className='menu-logo' alt=' '/>
            <h2>3DUS</h2>
            <div className='mediaIcons'>
              <a className='web-link'href='https://www.facebook.com/3dfactoryUS/'>
                <FbIcon className='media-icon'/>
              </a>
              <a className='web-link'href='https://www.instagram.com/3dfactoryus/'>
                <IgIcon className='media-icon'/>
              </a>
              <a className='web-link'href='https://wa.me/18139658628'>
                <WaIcon className='media-icon'/>
              </a>
            </div>  
            <div className='copywrite'>
              <p className='web-link'>{year} © <a className='web-link'href='https://3dus.us'>3DUS.us</a></p>
            </div>
          </div>
        </div>
      </div>
      <div id='shadow' className='shadowOff' onClick= {changeClassName}></div>

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
        <Route path='/floorplans'>
          <Floorplans/>
        </Route>
        <Route path='/video'>
          <Video/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

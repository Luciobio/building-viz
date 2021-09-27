import React, {useState, useEffect} from "react";
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
import { Spinner } from "reactstrap";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  const cacheMedia = async (srcArray) => {
    const promises = await srcArray.map((src) =>{
      return new Promise (function (resolve, reject) {
        if(src.slice(-3) === 'jpg') {
          const img = new Image();

          img.src= src;
          img.onload = resolve();
          img.onerror = reject();
        }
        else {
          const vid = document.createElement('video');

          vid.src= src;
          document.body.appendChild(vid);
          vid.onload = resolve();
          vid.onerror = reject();
        }
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  };

  useEffect( ()=>{
    const imgs = [
      './images/cams/bathroom-cam.jpg',
      './images/cams/bedroom-cam.jpg',
      './images/cams/kitchen-cam.jpg',
      './images/cams/rooftop-cam.jpg',
      './images/floorplans/01-terrace.jpg',
      './images/floorplans/02-3rd_floor.jpg',
      './images/floorplans/03-2nd_floor.jpg',
      './images/floorplans/04-1st_floor.jpg',
      './images/posters/WV_img-01_shade.jpg',
      './images/posters/WV_img-01.jpg',
      './images/posters/WV_img-02.jpg',
      './images/posters/WV_img-03.jpg',
      './images/posters/WV_img-04.jpg',
      './images/posters/WV_img-05.jpg',
      './videos/WV_animation/WV_Animation_01.mp4',
      './videos/WV_animation/WV_Animation_02.mp4',
      './videos/WV_animation/WV_Animation_03.mp4',
      './videos/WV_animation/WV_Animation_04.mp4',
      './videos/WV_animation/WV_Reverse_01.mp4',
      './videos/WV_animation/WV_Reverse_02.mp4',
      './videos/WV_animation/WV_Reverse_03.mp4',
      './videos/WV_animation/WV_Reverse_04.mp4',
    ];

    cacheMedia(imgs);
  },[]);

  const date = new Date("01/20/2021");
  const year = date.getFullYear();

  const changeClassName = (id,name1,name2) =>{
    let cName = document.getElementById(id);
    cName.className = (cName.className === name2) ? name1 : name2;
  };

  const menuClick = () => {
    changeClassName('menu','menu-out','menu-in');
    changeClassName('shadow','shadowOff','shadowOn')
  }

  return (
    <Router className='main'>
      {isLoading
        ?
        <div>
          <Spinner />
        </div>
        :
      <div className='App'>
        <div className='menu-cont'>
          <button className='menu-btn' onClick= {menuClick}>
            <MenuIcon className='menuIcon'/>
          </button>
          <div id='menu' className='menu'>
            <div className='menu-head'>
              <button className='btn' onClick= {menuClick}>
                <Xmark className='xmark' />
              </button>
            </div>
            <div className='menu-links'>
              <Link to='/' className='menu-link' onClick= {menuClick}>
                Home
              </Link>
              <Link to='/building' className='menu-link' onClick= {menuClick}>
                Building
              </Link>
              <Link to='/amenities' className='menu-link' onClick= {menuClick}>
                Amenities
              </Link>
              <Link to='/floorplans' className='menu-link' onClick= {menuClick}>
                Floorplans
              </Link>
              <Link to='/video' className='menu-link' onClick= {menuClick}>
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
        <div id='shadow' className='shadowOff' onClick= {menuClick}></div>

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
    }
    </Router>
  );
}

export default App;

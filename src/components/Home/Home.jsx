import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../icons/3DUS_icon.png'
import homebkg from '../../images/posters/WV_img-01_shade.jpg'
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <img 
                className='home-bkg'
                src={homebkg}
                alt=''
            />
            <div className='intro-poster'>
                <img src={logo} className='logo' alt="Logo"/>
                <h1 className='intro-title'>Building Visualizer</h1>
                <div className='start-btn btn'>
                <Link to='/building' className='btn'>
                    Start
                </Link>
                </div>
            </div>
        </div>
    )

}

export default Home
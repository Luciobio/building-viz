import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../icons/3DUS_icon.png'


const Home = () => {
    return (
        <div className='home'>
            <img 
                className='home-bkg'
                src='https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Aerial-view-scaled.jpg'
                alt='home-bkg'
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
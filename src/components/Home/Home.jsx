import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../icons/3DUS_icon.png'


const Home = () => {
    return (
        <div className='home'>
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
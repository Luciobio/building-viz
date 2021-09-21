import React from 'react';
import '../../Floorplans.css'

import {ReactComponent as Circle} from '../../../../icons/circle.svg'
import {ReactComponent as SurfIcon} from '../../../../icons/surface.svg'
import {ReactComponent as BedIcon} from '../../../../icons/bed.svg'
import {ReactComponent as BathIcon} from '../../../../icons/bath.svg'

const Forth = () => {
    
    const showDiv = () =>{
        let e = document.getElementById('box1a');
        e.className = (e.className === 'infoBox box1a boxOn') ? 'infoBox box1a boxOff' : 'infoBox box1a boxOn';
      }

    return (
        <div className=''>
            <svg className='svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080' preserveAspectRatio='xMidYMid slice' width='100vw' height='100vh'>
                <rect className='frame' width='100vw' height='100vh' fill='rgba(0, 0, 0, 0)'></rect>
                <polygon 
                    className='hoverImg poly1a' 
                    points='190,185 1050,185 1050,865 190,865' 
                    fill='rgba(0, 0, 0, 0.5)' 
                    onMouseEnter= {showDiv}
                    onMouseLeave= {showDiv}
                />
                <polygon className='hoverImg poly1b' points='1055,185 1700,185 1700,860 1055,860' fill='rgba(0, 0, 0, 0.5)'/>
                </svg>
                <div className='tag tag1a'>
                    <Circle className='circle'/>
                    <p className='tagName'>Terrace</p>
                </div>
                <div id='box1a' className='infoBox box1 boxOff'>
                    <div className='boxInfo'>
                    <div className='bI-head'>
                        <h4>Name</h4>
                        <Circle className='circle'/>
                    </div>
                    <div className='bI-cont'>
                        <div>
                        <p>Info info info</p>
                        </div>
                        <div className='infoBtns'>
                        <button className='infoBtn'>360?</button>
                        <button className='infoBtn'>Details</button>
                        </div>
                    </div>
                    </div>
                    <div className='boxIcons'>
                    <div className='IBIcont'>
                        <SurfIcon className='IB-Icon'/>
                        <p className='liltxt'>surf</p>
                    </div>
                    <div className='IBIcont'>
                        <BedIcon className='IB-Icon'/>
                        <p className='liltxt'>num</p>
                    </div>
                    <div className='IBIcont'>
                        <BathIcon className='IB-Icon'/>
                        <p className='liltxt'>num</p>
                    </div>
                    </div>
                </div>
                </div>
    );
};

export default Forth;
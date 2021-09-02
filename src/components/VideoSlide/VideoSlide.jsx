import React, {useState, useEffect} from 'react';
import './VideoSlide.css'
import {ReactComponent as PrevArrow} from './../../icons/arrow-prev.svg'
import {ReactComponent as NextArrow} from './../../icons/arrow-next.svg'



const VideoSlide = ({items}) => {
    
    const [item, setItem] = useState(0);

    useEffect( () => {})

    const next = () => {
        const nextItem = item === items.length - 1 ? 0 : item + 1;
        setItem(nextItem);
    }
    
    const prev = () => {
        const nextItem = item === 0 ? items.length - 1 : item - 1;
        setItem(nextItem);
    }

    return (
        <div className='slider-cont'>
            <div className='slide'>
                {items[item].vid}
                <div className='slide-title'>{items[item].name}</div>
            </div>
            <div className='slider-btns-cont'>
                <button className='slider-btns prevBtn' onClick={prev}>
                    <div className='btn-bkg'>
                        <PrevArrow className='arrow'/>
                    </div>
                </button>
                <button className='slider-btns nextBtn' onClick={next}>
                    <div className='btn-bkg'>
                        <NextArrow className='arrow'/>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default VideoSlide
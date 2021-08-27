import React, {useState} from 'react';
import './Slideshow.css'
import {ReactComponent as PrevArrow} from './icons/arrow-prev.svg'
import {ReactComponent as NextArrow} from './icons/arrow-next.svg'

const items = [
    {
        id: 0,
        name: 'Kitchen',
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Weshore-Townhomes-Kitchen-Living-view-1.jpg'
    },
    {
        id: 1,
        name: 'Bedroom',
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Master-Bedroom-1.jpg'
    },
    {
        id: 2,
        name: 'Bathroom',
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Master-Bathroom-View-1.jpg'
    }

]

const Slideshow = () => {
    
    const [item, setItem] = useState(0);

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
                <img
                    className='slide-img'
                    src={items[item].src} 
                    alt=''
                />
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

export default Slideshow

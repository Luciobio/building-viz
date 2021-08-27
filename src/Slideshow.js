import React from 'react'
import './Slideshow.css'
import {ReactComponent as PrevArrow} from './icons/arrow-prev.svg'
import {ReactComponent as NextArrow} from './icons/arrow-next.svg'

const items = [
    {
        name: 'Kitchen',
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Weshore-Townhomes-Kitchen-Living-view-1.jpg'
    },
    {
        name: 'Bedroom',
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Master-Bedroom-1.jpg'
    },
    {
        name: 'Bathroom',
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Master-Bedroom-1.jpg'
    }

]

const next = () => {

}

const prev = () => {

}


const Slideshow = () => {
    return (
        <div className='slider-cont'>
            <div className='slide'>
                <img
                    className='slide-item'
                    src={items[0].src} 
                    alt=''
                />
                <div className='slide-title'>{items[0].name}</div>
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

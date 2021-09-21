/* import React, {useState} from 'react';
import './FloorSlide.css'
import {ReactComponent as PrevArrow} from './../../icons/arrow-prev.svg'
import {ReactComponent as NextArrow} from './../../icons/arrow-next.svg'

const FloorSlide = ({items}) => {
    
    const [item, setItem] = useState(0);

    const changeClassName = () =>{
        let cName = document.getElementById('slide-image');
        cName.className = (cName.className === 'slide-img2') ? 'slide-img' : 'slide-img2';
    }

    const next = () => {
        const nextItem = item === items.length - 1 ? 0 : item + 1;
        setItem(nextItem)
        changeClassName();
    }
    
    const prev = () => {
        const nextItem = item === 0 ? items.length - 1 : item - 1;
        setItem(nextItem)
        changeClassName();
    }

    return (
        <div className='slider-cont'>
            <div className='slide'>
                {items[item].src}
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

export default FloorSlide */

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './Amenities.css'

const items = [
    {
      src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Weshore-Townhomes-Kitchen-Living-view-1.jpg',
      altText: 'Kitchen',
      caption: 'Kitchen'
    },
    {
      src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Master-Bedroom-1.jpg',
      altText: 'Bedroom',
      caption: 'Bedroom'
    },
    {
      src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Master-Bathroom-View-1.jpg',
      altText: 'Bathroom',
      caption: 'Bathroom'
    },
    {
        src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Rooftop-view-1.jpg',
        altText: 'Terrace',
        caption: 'Terrace'
      }
  ];

const Amenities = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width='100%'/>
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel 
        className='Amenities'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
    );
  }

export default Amenities
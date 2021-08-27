import React from 'react'
import Slideshow from '../Slideshow/Slideshow'
import './Amenities.css'

const amenities = [
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

const Amenities = () => {
    
    return (
        <div>
            <Slideshow items = {amenities}/>
        </div>
    );
}

export default Amenities
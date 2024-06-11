// import React from 'react'
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Insightslider1 from '@/images/insightslider.png';
// import Insightslider2 from '@/images/insightslider.png';
// import "./Insightslider.scss";

// const Insightslider = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Insightslider
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Insightslider1 from '@/images/insightslider.png';

import './Insightslider.scss'

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 340; // Width of the card (including margin)
    const cardsPerView = 2.5; // Number of cards per view

    const updateImageNumber = (event) => {
        event.preventDefault();
        const scrollDelta = Math.sign(event.deltaY);
        const totalCards = 8; // Total number of cards
        const maxIndex = totalCards - cardsPerView;
        if (currentIndex + scrollDelta >= 0 && currentIndex + scrollDelta <= maxIndex) {
            setCurrentIndex(currentIndex + scrollDelta);
        }
    };

    const updateNumbers = () => {
        // You can update numbers here if needed
    };

    return (
        <div className='wrapper'>
            <div className="number-display">
                <div>{String(currentIndex + 1).padStart(2, '0')}</div>
                <div>08</div>
            </div>
            <div className='container' onWheel={updateImageNumber}>
                <div className="scroll-container" style={{ transform: `translateX(${-currentIndex * cardWidth}px)` }}>
                    <div><Image className='card' src={Insightslider1} alt="Image1" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image2" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image3" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image4" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image5" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image6" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image7" /></div>
                    <div><Image className='card' src={Insightslider1} alt="Image8" /></div>
                    
                </div>
            </div>
        </div>
    );
}




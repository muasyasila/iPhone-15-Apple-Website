import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from '../constants/index.js';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import './CardCarousel.css';


const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container mx-auto p-4 bg-zinc">
       <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4" style={{ width: 'calc(100% / 4)' }}>
            <div className="relative bg-cover bg-center h-96 rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url(${card.image})` }}>
              <div className="absolute top-0 left-0 bg-gradient-to-b from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg">{card.title}</h2>
                <p className="text-white text-xl font-bold mt-2">{card.description}</p>
                <p className="text-white text-lg mt-2">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default CardCarousel;

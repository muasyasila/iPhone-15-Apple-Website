import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from '../constants/index.js';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import './CardCarousel.css';

const CardCarousel = () => {
  const cardRefs = useRef([]);

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
      <h1 id="title" className="section-heading mb-8 mt-8 ml-4">
        The latest. Take a look at what else is new.
      </h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={card.id} className="p-4" style={{ width: 'calc(100% / 4)' }}>
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="mt-8 relative bg-cover bg-center h-[500px] rounded-2xl shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${card.image})` }}
            >
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

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from '../constants/index.js';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import './CardCarousel.css';
import gsap from 'gsap';

const CardCarousel = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const hoverIn = () => gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power1.inOut' });
        const hoverOut = () => gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.inOut' });
        
        card.addEventListener('mouseenter', hoverIn);
        card.addEventListener('mouseleave', hoverOut);

        // Cleanup function to remove event listeners
        return () => {
          card.removeEventListener('mouseenter', hoverIn);
          card.removeEventListener('mouseleave', hoverOut);
        };
      }
    });
  }, []);

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
      <h1 id="carousel-title" className="section-heading mb-8 mt-8 ml-4">
        The latest. Take a look at what else is new.
      </h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={card.id} className="p-4" style={{ width: 'calc(100% / 4)' }}>
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="mt-8 relative bg-cover bg-center h-[500px] rounded-2xl shadow-lg overflow-hidden card"
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

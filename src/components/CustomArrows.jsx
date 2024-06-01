import React from 'react';

const arrowStyle = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // White with transparency
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Blur effect
  cursor: 'pointer',
  zIndex: 2,
};

export const CustomPrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev-arrow"
    style={{ ...arrowStyle, left: '10px' }} // Adjusted the left position
    onClick={onClick}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 19L8 12L15 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const CustomNextArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-next-arrow"
    style={{ ...arrowStyle, right: '10px' }} // Adjusted the right position
    onClick={onClick}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5L16 12L9 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

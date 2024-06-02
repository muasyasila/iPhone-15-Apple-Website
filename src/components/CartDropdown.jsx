// src/components/CartDropdown.jsx
import React from 'react';

const CartDropdown = ({ isLoggedIn, cartItems }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="py-2 px-4">
        {isLoggedIn ? (
          cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="py-2 border-b border-gray-200">
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-800">Your cart is empty.</p>
          )
        ) : (
          <p className="text-gray-800">Sign in to view your cart.</p>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;

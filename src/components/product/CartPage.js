// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
// import "./CartPage.css";

// function CartPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const cart = location.state?.cart || []; // Get the cart data from state

//   const handleContinueBooking = () => {
//     // Navigate to BookingPage with cart data
//     navigate("/booking", { state: { cart } });
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item, index) => (
//             <div className="cart-item" key={index}>
//               <img src={item.image} alt={item.name} className="cart-image" />
//               <div className="cart-details">
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//                 <p className="cart-price">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         className="continue-booking-btn"
//         onClick={handleContinueBooking} // Trigger navigation on click
//       >
//         Continue Booking
//       </button>
//     </div>
//   );
// }

// export default CartPage;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "./CartPage.css";

function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || []; // Get the cart data from state

  const handleContinueBooking = () => {
    // Navigate to Login page with cart data
    navigate("/login", { state: { cart } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="cart-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        className="continue-booking-btn"
        onClick={handleContinueBooking} // Trigger navigation on click
      >
        Continue Booking
      </button>
    </div>
  );
}

export default CartPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./photo.css"; // Integrated CSS file
import phoone from "../../../images/photography/ph1.jpeg";
import photwo from "../../../images/photography/ph2.jpeg";
import phothree from "../../../images/photography/ph3.jpeg";
import phofour from "../../../images/photography/ph4.jpeg";
import phofive from "../../../images/photography/ph5.jpeg";
import phosix from "../../../images/photography/ph6.jpeg";
import phoseven from "../../../images/photography/ph7.jpeg";
import phoeight from "../../../images/photography/ph8.jpeg";
import phonine from "../../../images/photography/ph9.jpeg";
import photen from "../../../images/photography/ph10.jpeg";

function Photo() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (photo) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, photo];
      navigate("/CartPage", { state: { cart: newCart } });
      return newCart;
    });
  };

  const photos = [
    {
      id: "1",
      image: phoone,
      name: "Wedding Photography Package",
      price: "$500",
      description: "Capture beautiful moments of your wedding day.",
    },
    {
      id: "2",
      image: photwo,
      name: "Outdoor Photoshoot",
      price: "$300",
      description: "Perfect for pre-wedding and casual outdoor shoots.",
    },
    {
      id: "3",
      image: phothree,
      name: "Studio Portrait Photography",
      price: "$200",
      description: "Professional studio portraits with high-quality lighting.",
    },
    {
      id: "4",
      image: phofour,
      name: "Event Photography",
      price: "$400",
      description: "Ideal for capturing corporate events and celebrations.",
    },
    {
      id: "5",
      image: phofive,
      name: "Newborn Photography",
      price: "$250",
      description: "Adorable and creative photoshoots for newborns.",
    },
    {
      id: "6",
      image: phosix,
      name: "Travel Photography",
      price: "$350",
      description: "Capture the essence of your travel adventures.",
    },
    {
      id: "7",
      image: phoseven,
      name: "Fashion Photography",
      price: "$450",
      description: "Professional shoots for fashion and modeling portfolios.",
    },
    {
      id: "8",
      image: phoeight,
      name: "Family Photography",
      price: "$300",
      description: "Cherish beautiful moments with your family.",
    },
    {
      id: "9",
      image: phonine,
      name: "Product Photography",
      price: "$150",
      description: "High-quality product shots for your business.",
    },
    {
      id: "10",
      image: photen,
      name: "Candid Photography",
      price: "$400",
      description: "Capture natural and spontaneous moments.",
    },
  ];

  return (
    <div className="photo-container">
      <h4>Photography</h4>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div className="card" key={index}>
            <img src={photo.image} alt={`Photo ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(photo)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{photo.name}</h3>
              <p>{photo.description}</p>
              <p className="photo-price">{photo.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mehandi.css"; // Integrated CSS file
import mehone from "../../../images/mehandi/meh2.jpeg";
import mehtwo from "../../../images/mehandi/meh3.jpeg";
import mehthree from "../../../images/mehandi/meh4.jpeg";
import mehfour from "../../../images/mehandi/meh5.jpeg";
import mehfive from "../../../images/mehandi/meh6.jpeg";
import mehsix from "../../../images/mehandi/meh7.jpeg";
import mehseven from "../../../images/mehandi/meh8.jpeg";
import meheight from "../../../images/mehandi/meh9.jpeg";
import mehnine from "../../../images/mehandi/meh10.jpeg";
import mehten from "../../../images/mehandi/meh11.jpeg";

function Mehandi() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (stage) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, stage];
      navigate("/CartPage", { state: { cart: newCart } });
      return newCart;
    });
  };

  const mehandis = [
    {
      id: "1",
      image: mehone,
      name: "Traditional Mehandi Design",
      price: "$50",
      description: "A classic and intricate traditional mehandi design.",
    },
    {
      id: "2",
      image: mehtwo,
      name: "Arabic Mehandi Design",
      price: "$60",
      description: "A beautiful Arabic pattern for weddings and events.",
    },
    {
      id: "3",
      image: mehthree,
      name: "Modern Bridal Mehandi",
      price: "$70",
      description: "An elegant and modern design for brides.",
    },
    {
      id: "4",
      image: mehfour,
      name: "Simple Floral Mehandi",
      price: "$40",
      description: "A minimalistic floral mehandi design for casual events.",
    },
    {
      id: "5",
      image: mehfive,
      name: "Full Hand Bridal Mehandi",
      price: "$100",
      description: "A detailed full-hand design for bridal occasions.",
    },
    {
      id: "6",
      image: mehsix,
      name: "Royal Rajasthani Design",
      price: "$80",
      description: "A grand Rajasthani-inspired mehandi design.",
    },
    {
      id: "7",
      image: mehseven,
      name: "Mandala Art Mehandi",
      price: "$55",
      description: "A symmetrical mandala pattern for a unique look.",
    },
    {
      id: "8",
      image: meheight,
      name: "Peacock Inspired Mehandi",
      price: "$75",
      description: "A peacock-themed design with intricate details.",
    },
    {
      id: "9",
      image: mehnine,
      name: "Geometric Mehandi Patterns",
      price: "$65",
      description: "A modern geometric mehandi design.",
    },
    {
      id: "10",
      image: mehten,
      name: "Festive Mehandi Design",
      price: "$50",
      description: "Perfect for festivals and celebrations.",
    },
  ];

  return (
    <div className="mehandi-container">
      <h4>Mehandi</h4>
      <div className="mehandi-gallery">
        {mehandis.map((mehandi, index) => (
          <div className="card" key={index}>
            <img src={mehandi.image} alt={`Mehandi ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(mehandi)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{mehandi.name}</h3>
              <p>{mehandi.description}</p>
              <p className="mehandi-price">{mehandi.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mehandi;

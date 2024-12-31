import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bridaldress.css";

// Import images
import bridalone from "../../../images/bridal dress/dress1.jpeg";
import bridaltwo from "../../../images/bridal dress/dress2.jpeg";
import bridalthree from "../../../images/bridal dress/dress3.jpeg";
import bridalfour from "../../../images/bridal dress/dress4.jpeg";
import bridalfive from "../../../images/bridal dress/dress5.jpeg";
import bridalsix from "../../../images/bridal dress/dress6.jpeg";
import bridalseven from "../../../images/bridal dress/dress7.jpeg";
import bridaleight from "../../../images/bridal dress/dress8.jpeg";
import bridalnine from "../../../images/bridal dress/dress9.jpeg";
import bridalten from "../../../images/bridal dress/dree10.jpeg";

function Bridaldress() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (dress) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, dress];
      navigate('/CartPage', { state: { cart: newCart } });
      return newCart;
    });
  };

  const dresses = [
    {
      id: "1",
      image: bridalone,
      name: "Elegant Lace Gown",
      price: "$799.99",
      description: "A beautiful lace gown for the classic bride.",
    },
    {
      id: "2",
      image: bridaltwo,
      name: "Modern Satin Dress",
      price: "$899.99",
      description: "A sleek satin dress with a modern design.",
    },
    {
      id: "3",
      image: bridalthree,
      name: "Floral A-Line Dress",
      price: "$699.99",
      description: "A charming floral A-line dress with a gentle flow.",
    },
    {
      id: "4",
      image: bridalfour,
      name: "Vintage Silk Dress",
      price: "$999.99",
      description: "An elegant vintage silk dress with intricate detailing.",
    },
    {
      id: "5",
      image: bridalfive,
      name: "Bohemian Lace Dress",
      price: "$749.99",
      description: "A boho-inspired lace dress with a relaxed fit.",
    },
    {
      id: "6",
      image: bridalsix,
      name: "Romantic Off-Shoulder Dress",
      price: "$849.99",
      description: "A romantic off-shoulder dress with delicate ruffles.",
    },
    {
      id: "7",
      image: bridalseven,
      name: "Luxury Satin Mermaid Gown",
      price: "$1299.99",
      description: "A luxury satin mermaid gown for a stunning look.",
    },
    {
      id: "8",
      image: bridaleight,
      name: "Princess Ball Gown",
      price: "$1199.99",
      description: "A majestic ball gown with a voluminous skirt.",
    },
    {
      id: "9",
      image: bridalnine,
      name: "Minimalist Ivory Dress",
      price: "$899.99",
      description: "A simple and elegant ivory dress for a minimalist bride.",
    },
    {
      id: "10",
      image: bridalten,
      name: "Tulle Wedding Dress",
      price: "$749.99",
      description: "A dreamy tulle wedding dress with layers of soft fabric.",
    },
  
    // Add other dresses here...
  ];

  return (
    <div className="dress-container">
      <h1>Bridal dress</h1>
      <div className="dress-gallery">
        {dresses.map((dress, index) => (
          <div className="card" key={index}>
            <img src={dress.image} alt={`Dress ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(dress)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{dress.name}</h3>
              <p>{dress.description}</p>
              <p className="dress-price">{dress.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bridaldress;

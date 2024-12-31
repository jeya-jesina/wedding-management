import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./catering.css"; // Integrated CSS file
import cateringone from "../../../images/catering/cat1.jpeg";
import cateringtwo from "../../../images/catering/cat2.jpeg";
import cateringthree from "../../../images/catering/cat3.jpeg";
import cateringfour from "../../../images/catering/cat4.jpeg";
import cateringfive from "../../../images/catering/cat5.jpeg";
import cateringsix from "../../../images/catering/cat6.jpeg";
import cateringseven from "../../../images/catering/cat7.jpeg";
import cateringeight from "../../../images/catering/cat8.jpeg";
import cateringnine from "../../../images/catering/cat9.jpeg";
import cateringten from "../../../images/catering/cat10.jpeg";

function Catering() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (catering) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, catering];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };

  // Array of bridal dresses with details (image, name, price, description)
  const caterings = [
    {
      id: 1,
      name: "Appetizer Platter",
      price: "$150",
      description: "A delicious assortment of appetizers for your event.",
      image: cateringone,
    },
    {
      id: 2,
      name: "Buffet Setup",
      price: "$500",
      description: "A complete buffet setup with a variety of dishes.",
      image: cateringtwo,
    },
    {
      id: 3,
      name: "BBQ Grill Station",
      price: "$400",
      description: "Grill station for BBQ lovers with meats and veggies.",
      image: cateringthree,
    },
    {
      id: 4,
      name: "Sushi Bar",
      price: "$600",
      description: "A sushi bar with a variety of fresh sushi options.",
      image: cateringfour,
    },
    {
      id: 5,
      name: "Vegetarian Feast",
      price: "$350",
      description: "A delightful vegetarian meal with fresh ingredients.",
      image: cateringfive,
    },
    {
      id: 6,
      name: "Dessert Table",
      price: "$250",
      description: "A selection of delectable desserts to end your meal.",
      image: cateringsix,
    },
    {
      id: 7,
      name: "Pizza Party",
      price: "$200",
      description: "A fun and casual pizza party with various toppings.",
      image: cateringseven,
    },
    {
      id: 8,
      name: "Seafood Extravaganza",
      price: "$700",
      description: "A premium seafood selection for seafood enthusiasts.",
      image: cateringeight,
    },
    {
      id: 9,
      name: "Pasta Station",
      price: "$450",
      description: "A pasta station with custom-made pasta and sauces.",
      image: cateringnine,
    },
    {
      id: 10,
      name: "International Cuisine",
      price: "$800",
      description: "A diverse selection of international dishes for every palate.",
      image: cateringten,
    },
  ];

  return (
    <div className="catering-container">
      <h4>Catering</h4>
      <div className="catering-gallery">
        {caterings.map((catering, index) => (
          <div className="card" key={index}>
            <img src={catering.image} alt={`Catering ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(catering)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{catering.name}</h3>
              <p>{catering.description}</p>
              <p className="catering-price">{catering.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catering;

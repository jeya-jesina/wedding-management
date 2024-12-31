import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cakes.css"; // Integrated CSS file
import cateringone from "../../../images/cakes/cake1.jpeg";
import cateringtwo from "../../../images/cakes/cake2.jpeg";
import cateringthree from "../../../images/cakes/cake3.jpeg";
import cateringfour from "../../../images/cakes/cake4.jpeg";
import cateringfive from "../../../images/cakes/cake5.jpeg";
import cateringsix from "../../../images/cakes/cake6.jpeg";
import cateringseven from "../../../images/cakes/cake7.jpeg";
import cateringeight from "../../../images/cakes/cake8.jpeg";
import cateringnine from "../../../images/cakes/cake9.jpeg";
import cateringten from "../../../images/cakes/cake10.jpeg";

function Catering() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (cake) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, cake];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };

  // Array of bridal dresses with details (image, name, price, description)
  const cakes = [
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
    <div className="cake-container">
      <h4>Cakes</h4>
      <div className="cake-gallery">
        {cakes.map((cake, index) => (
          <div className="card" key={index}>
            <img src={cake.image} alt={`Cakes ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(cake)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{cake.name}</h3>
              <p>{cake.description}</p>
              <p className="cake-price">{cake.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catering;

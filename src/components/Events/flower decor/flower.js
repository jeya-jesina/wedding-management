import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./flower.css"; // Integrated CSS file
import floone from "../../../images/flower decor/flo1.jpeg";
import flotwo from "../../../images/flower decor/flo2.jpeg";
import flothree from "../../../images/flower decor/flo3.jpeg";
import flofour from "../../../images/flower decor/flo4.jpeg";
import flofive from "../../../images/flower decor/flo5.jpeg";
import flosix from "../../../images/flower decor/flo6.jpeg";
import floseven from "../../../images/flower decor/flo7.jpeg";
import floeight from "../../../images/flower decor/flo8.jpeg";
import flonine from "../../../images/flower decor/flo9.jpeg";
import floten from "../../../images/flower decor/flo10.jpeg";

function Flower() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (image) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, image];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };

  // Array of bridal dresses with details (image, name, price, description)
  const flowers = [
    {
      id: 1,
      name: "Rose Decoration",
      price: "$50",
      description: "Beautiful rose arrangement for all occasions.",
      image: floone,
    },
    {
      id: 2,
      name: "Tulip Design",
      price: "$60",
      description: "Elegant tulip decoration for a touch of class.",
      image: flotwo,
    },
    {
      id: 3,
      name: "Lily Bouquet",
      price: "$45",
      description: "Soft lily flowers perfect for weddings.",
      image: flothree,
    },
    {
      id: 4,
      name: "Sunflower Setup",
      price: "$70",
      description: "Bright sunflower decor to lighten up your day.",
      image: flofour,
    },
    {
      id: 5,
      name: "Orchid Bliss",
      price: "$80",
      description: "Exotic orchids for luxurious events.",
      image: flofive,
    },
    {
      id: 6,
      name: "Daisy Delight",
      price: "$30",
      description: "Charming daisy arrangements for simple beauty.",
      image: flosix,
    },
    {
      id: 7,
      name: "Carnation Combo",
      price: "$40",
      description: "A mix of carnations for vibrant settings.",
      image: floseven,
    },
    {
      id: 8,
      name: "Peony Elegance",
      price: "$55",
      description: "Graceful peony designs for special moments.",
      image: floeight,
    },
    {
      id: 9,
      name: "Marigold Magic",
      price: "$35",
      description: "Festive marigold decorations for cultural events.",
      image: flonine,
    },
    {
      id: 10,
      name: "Lavender Charm",
      price: "$50",
      description: "Calming lavender flowers to create a serene ambiance.",
      image: floten,
    },
  ];

  return (
    <div className="flower-container">
      <h4>Flower Decoration</h4>
      <div className="flower-gallery">
        {flowers.map((flower, index) => (
          <div className="card" key={index}>
            <img src={flower.image} alt={`Flower ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(flower)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{flower.name}</h3>
              <p>{flower.description}</p>
              <p className="flower-price">{flower.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flower;

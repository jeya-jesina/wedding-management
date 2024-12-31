import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stage.css";

// Import images
import Stageone from "../../../images/stage decor/sta1.jpeg";
import Stagetwo from "../../../images/stage decor/sta2.jpeg";
import Stagethree from "../../../images/stage decor/sta3.jpeg";
import Stagefour from "../../../images/stage decor/sta4.jpeg";
import Stagefive from "../../../images/stage decor/sta5.jpeg";
import Stagesix from "../../../images/stage decor/sta6.jpeg";
import Stageseven from "../../../images/stage decor/sta7.jpeg";
import Stageeight from "../../../images/stage decor/sta8.jpeg";
import Stagenine from "../../../images/stage decor/sta9.jpeg";
import Stageten from "../../../images/stage decor/sta10.jpeg";

function Stage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (stage) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, stage];
      navigate("/CartPage", { state: { cart: newCart } });
      return newCart;
    });
  };

  const stages = [
    {
      id: "1",
      image: Stageone,
      name: "Royal Theme Stage",
      price: "$1500",
      description: "A luxurious stage with golden accents for a royal vibe.",
    },
    {
      id: "2",
      image: Stagetwo,
      name: "Rustic Outdoor Stage",
      price: "$1200",
      description: "A beautiful rustic theme perfect for outdoor weddings.",
    },
    {
      id: "3",
      image: Stagethree,
      name: "Elegant Floral Stage",
      price: "$1300",
      description: "An elegant stage adorned with fresh floral arrangements.",
    },
    {
      id: "4",
      image: Stagefour,
      name: "Modern Minimalist Stage",
      price: "$1100",
      description: "A clean, modern design with sleek aesthetics.",
    },
    {
      id: "5",
      image: Stagefive,
      name: "Traditional Stage Decor",
      price: "$1000",
      description: "A traditional setup with rich cultural elements.",
    },
    {
      id: "6",
      image: Stagesix,
      name: "Vintage Stage Design",
      price: "$1400",
      description: "A vintage-inspired stage with a classic touch.",
    },
    {
      id: "7",
      image: Stageseven,
      name: "Fairy Tale Stage",
      price: "$1600",
      description: "A magical fairy tale stage for a dream wedding.",
    },
    {
      id: "8",
      image: Stageeight,
      name: "Bohemian Chic Stage",
      price: "$1250",
      description: "A chic bohemian design with earthy tones and textures.",
    },
    {
      id: "9",
      image: Stagenine,
      name: "Tropical Paradise Stage",
      price: "$1350",
      description: "A tropical-themed stage with vibrant colors and greenery.",
    },
    {
      id: "10",
      image: Stageten,
      name: "Romantic Candlelit Stage",
      price: "$1450",
      description: "A romantic stage with candles and soft lighting.",
    },
    // Add the remaining stages...
  ];

  return (
    <div className="stage-container">
      <h4>Stage Decorations</h4>
      <div className="stage-gallery">
        {stages.map((stage, index) => (
          <div className="card" key={index}>
            <img src={stage.image} alt={`Stage ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(stage)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{stage.name}</h3>
              <p>{stage.description}</p>
              <p className="stage-price">{stage.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stage;

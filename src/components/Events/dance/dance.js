import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dance.css"; // Assuming your CSS file is named "dance.css"

// Corrected image imports (use the correct paths for your images)
import danceone from "../../../images/dance/dance1.jpeg";
import dancetwo from "../../../images/dance/dance2.jpeg";
import dancethree from "../../../images/dance/dance3.jpeg";
import dancefour from "../../../images/dance/dance4.jpeg";
import dancefive from "../../../images/dance/dance5.jpeg";
import dancesix from "../../../images/dance/dance6.jpeg";
import danceseven from "../../../images/dance/dance7.jpeg";
import danceeight from "../../../images/dance/dance8.jpeg";
import dancenine from "../../../images/dance/dance9.jpeg";
import danceten from "../../../images/dance/dance10.jpeg";

function Dance() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Add the selected dance item to the cart
  const addToCart = (dance) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, dance];
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } });
      return newCart;
    });
  };

  // Array of dance packages with details (image, name, price, description)
  const dances = [
    {
      id: 1,
      name: "Salsa Dance Performance",
      price: "$200",
      description: "A high-energy salsa dance performance for your event.",
      image: danceone,
    },
    {
      id: 2,
      name: "Ballroom Dance Lessons",
      price: "$300",
      description: "Learn classic ballroom dance moves with professional instructors.",
      image: dancetwo,
    },
    {
      id: 3,
      name: "Hip-Hop Dance Party",
      price: "$250",
      description: "A fun and interactive hip-hop dance session for all ages.",
      image: dancethree,
    },
    {
      id: 4,
      name: "Ballet Showcase",
      price: "$350",
      description: "A beautiful ballet performance to add elegance to your event.",
      image: dancefour,
    },
    {
      id: 5,
      name: "Jazz Dance Performance",
      price: "$275",
      description: "A lively jazz dance performance for an energetic atmosphere.",
      image: dancefive,
    },
    {
      id: 6,
      name: "Contemporary Dance Workshop",
      price: "$225",
      description: "An expressive contemporary dance session for your guests.",
      image: dancesix,
    },
    {
      id: 7,
      name: "Wedding Dance Choreography",
      price: "$400",
      description: "Customized wedding dance choreography for the bride and groom.",
      image: danceseven,
    },
    {
      id: 8,
      name: "Latin Dance Party",
      price: "$300",
      description: "A lively Latin dance party with a mix of salsa, bachata, and merengue.",
      image: danceeight,
    },
    {
      id: 9,
      name: "Traditional Dance Performance",
      price: "$500",
      description: "A traditional dance performance that adds cultural flair to your event.",
      image: dancenine,
    },
    {
      id: 10,
      name: "Dance Flash Mob",
      price: "$600",
      description: "A surprise dance flash mob performance to energize your guests.",
      image: danceten,
    },
  ];

  return (
    <div className="dance-container">
      <h4>Dance </h4>
      <div className="dance-gallery">
        {dances.map((dance, index) => (
          <div className="card" key={index}>
            <img src={dance.image} alt={`Dance ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(dance)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{dance.name}</h3>
              <p>{dance.description}</p>
              <p className="dance-price">{dance.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dance;

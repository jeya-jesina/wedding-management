import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./drums.css"; // Integrated CSS file
import drone from "../../../images/drums/drum1.jpeg";
import drtwo from "../../../images/drums/drum2.jpeg";
import drthree from "../../../images/drums/drum3.jpeg";
import drfour from "../../../images/drums/drum4.jpeg";
import drfive from "../../../images/drums/drum5.jpeg";
import drsix from "../../../images/drums/drum6.jpeg";
import drseven from "../../../images/drums/drum7.jpeg";
import dreight from "../../../images/drums/drum8.jpeg";
import drnine from "../../../images/drums/drum9.jpeg";
import drten from "../../../images/drums/drum10.jpeg";

function Drums() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (drum) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, drum];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };

  // Array of bridal dresses with details (image, name, price, description)
  const drums = [
    {
      id: 1,
      name: "Electric Drum Kit",
      price: "$500",
      description: "High-quality electronic drum kit for all levels.",
      image: drone,
    },
    {
      id: 2,
      name: "Acoustic Drum Set",
      price: "$600",
      description: "Premium acoustic drum set for live performances.",
      image: drtwo,
    },
    {
      id: 3,
      name: "Snare Drum",
      price: "$150",
      description: "Versatile snare drum for rock and jazz music.",
      image: drthree,
    },
    {
      id: 4,
      name: "Bass Drum",
      price: "$200",
      description: "Deep, resonant bass drum perfect for any ensemble.",
      image: drfour,
    },
    {
      id: 5,
      name: "Cajón Drum",
      price: "$120",
      description: "A portable percussion instrument with a unique sound.",
      image: drfive,
    },
    {
      id: 6,
      name: "Floor Tom Drum",
      price: "$180",
      description: "Low pitched tom drum for a solid rhythm section.",
      image: drsix,
    },
    {
      id: 7,
      name: "Tom Drum Kit",
      price: "$350",
      description: "Complete tom drum kit for advanced drummers.",
      image: drseven,
    },
    {
      id: 8,
      name: "Marching Snare Drum",
      price: "$250",
      description: "Durable snare drum for marching bands.",
      image: dreight,
    },
    {
      id: 9,
      name: "Percussion Drum Set",
      price: "$450",
      description: "Compact drum set for percussionists.",
      image: drnine,
    },
    {
      id: 10,
      name: "Bongo Drums",
      price: "$90",
      description: "Traditional hand drums used in Latin American music.",
      image:drten,
    },
  ];

  return (
    <div className="drum-container">
      <h4>Drums</h4>
      <div className="drum-gallery">
        {drums.map((drum, index) => (
          <div className="card" key={index}>
            <img src={drum.image} alt={`Drums ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(drum)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{drum.name}</h3>
              <p>{drum.description}</p>
              <p className="drum-price">{drum.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drums;

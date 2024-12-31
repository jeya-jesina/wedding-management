import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./haldi.css"; // Integrated CSS file
import haldione from "../../../images/haldi/hal1.jpeg";
import halditwo from "../../../images/haldi/hal2.jpeg";
import haldithree from "../../../images/haldi/hal3.jpeg";
import haldifour from "../../../images/haldi/hal4.jpeg";
import haldifive from "../../../images/haldi/hal5.jpeg";
import haldisix from "../../../images/haldi/hal6.jpeg";
import haldiseven from "../../../images/haldi/hal7.jpeg";
import haldieight from "../../../images/haldi/hal8.jpeg";
import haldinine from "../../../images/haldi/hal9.jpeg";
import halditen from "../../../images/haldi/hal10.jpeg";
function Haldi() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (haldi) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, haldi];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };

  // Array of bridal dresses with details (image, name, price, description)
  const haldis = [
    {
      id: 1,
      name: "Rose Decoration",
      price: "$50",
      description: "Beautiful rose arrangement for all occasions.",
      image: haldione,
    },
    {
      id: 2,
      name: "Tulip Design",
      price: "$60",
      description: "Elegant tulip decoration for a touch of class.",
      image: halditwo,
    },
    {
      id: 3,
      name: "Lily Bouquet",
      price: "$45",
      description: "Soft lily flowers perfect for weddings.",
      image: haldithree,
    },
    {
      id: 4,
      name: "Sunflower Setup",
      price: "$70",
      description: "Bright sunflower decor to lighten up your day.",
      image: haldifour,
    },
    {
      id: 5,
      name: "Orchid Bliss",
      price: "$80",
      description: "Exotic orchids for luxurious events.",
      image: haldifive,
    },
    {
      id: 6,
      name: "Daisy Delight",
      price: "$30",
      description: "Charming daisy arrangements for simple beauty.",
      image: haldisix,
    },
    {
      id: 7,
      name: "Carnation Combo",
      price: "$40",
      description: "A mix of carnations for vibrant settings.",
      image: haldiseven,
    },
    {
      id: 8,
      name: "Peony Elegance",
      price: "$55",
      description: "Graceful peony designs for special moments.",
      image: haldieight,
    },
    {
      id: 9,
      name: "Marigold Magic",
      price: "$35",
      description: "Festive marigold decorations for cultural events.",
      image: haldinine,
    },
    {
      id: 10,
      name: "Lavender Charm",
      price: "$50",
      description: "Calming lavender flowers to create a serene ambiance.",
      image: halditen,
    },
  ];

  return (
    <div className="haldi-container">
      <h4>Haldi</h4>
      <div className="haldi-gallery">
        {haldis.map((haldi, index) => (
          <div className="card" key={index}>
            <img src={haldi.image} alt={`Haldi ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(haldi)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{haldi.name}</h3>
              <p>{haldi.description}</p>
              <p className="haldi-price">{haldi.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
        
        export default Haldi;
        
        
   


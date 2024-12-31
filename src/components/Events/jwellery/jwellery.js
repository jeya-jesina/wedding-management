import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./jwellery.css"; // Integrated CSS file
import jwelleryone from "../../../images/jwellery/jwe1.jpeg";
import jwellerytwo from "../../../images/jwellery/jwe2.jpeg";
import jwellerythree from "../../../images/jwellery/jwe3.jpeg";
import jwelleryfour from "../../../images/jwellery/jew4.jpeg";
import jwelleryfive from "../../../images/jwellery/jwe5.jpeg";
import jwellerysix from "../../../images/jwellery/jwe6.jpeg";
import jwelleryseven from "../../../images/jwellery/jwe7.jpeg";
import jwelleryeight from "../../../images/jwellery/jwe8.jpeg";
import jwellerynine from "../../../images/jwellery/jwe9.jpeg";
import jwelleryten from "../../../images/jwellery/jwe10.jpeg";

function Jwellery() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (jwellery) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, jwellery];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };

  // Array of bridal dresses with details (image, name, price, description)
  const jwellerys = [
    {
      id: 1,
      name: "Gold Necklace",
      price: "$500",
      description: "A beautiful gold necklace, perfect for special occasions.",
      image: jwelleryone,
    },
    {
      id: 2,
      name: "Diamond Earrings",
      price: "$800",
      description: "Elegant diamond earrings for a touch of luxury.",
      image: jwellerytwo,
    },
    {
      id: 3,
      name: "Silver Ring",
      price: "$150",
      description: "A timeless silver ring with a classic design.",
      image: jwellerythree,
    },
    {
      id: 4,
      name: "Platinum Bracelet",
      price: "$300",
      description: "Sleek and modern platinum bracelet for daily wear.",
      image: jwelleryfour,
    },
    {
      id: 5,
      name: "Emerald Pendant",
      price: "$400",
      description: "A beautiful emerald pendant that adds elegance to any outfit.",
      image: jwelleryfive,
    },
    {
      id: 6,
      name: "Pearl Necklace",
      price: "$250",
      description: "A delicate pearl necklace, ideal for formal events.",
      image: jwellerysix,
    },
    {
      id: 7,
      name: "Ruby Ring",
      price: "$350",
      description: "A luxurious ruby ring with intricate detailing.",
      image: jwelleryseven,
    },
    {
      id: 8,
      name: "Sapphire Bracelet",
      price: "$450",
      description: "A stunning sapphire bracelet that makes a bold statement.",
      image: jwelleryeight,
    },
    {
      id: 9,
      name: "Gold Earrings",
      price: "$250",
      description: "Sophisticated gold earrings, perfect for any occasion.",
      image: jwellerynine,
    },
    {
      id: 10,
      name: "Diamond Necklace",
      price: "$1200",
      description: "An exquisite diamond necklace for a truly luxurious look.",
      image: jwelleryten,
    },
  ];

  return (
    <div className="jwellery-container">
      <h4>Jwellery</h4>
      <div className="jwellery-gallery">
        {jwellerys.map((jwellery, index) => (
          <div className="card" key={index}>
            <img src={jwellery.image} alt={`Jwellery ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(jwellery)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{jwellery.name}</h3>
              <p>{jwellery.description}</p>
              <p className="jwellery-price">{jwellery.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jwellery;

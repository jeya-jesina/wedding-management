
    
    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
import "./Reception.css"; // Integrated CSS file
import recepone from "../../../images/reception/re1.jpeg";
import receptwo from "../../../images/reception/re2.jpeg";
import recepthree from "../../../images/reception/re3.jpeg";
import recepfour from "../../../images/reception/re4.jpeg";
import recepfive from "../../../images/reception/re5.jpeg";
import recepsix from "../../../images/reception/re6.jpeg";
import recepseven from "../../../images/reception/re7.jpeg";
import recepeight from "../../../images/reception/re8.jpeg";
import recepnine from "../../../images/reception/re9.jpeg";
import recepten from "../../../images/reception/re10.jpeg";

function Reception() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (recep) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, recep];  // Defining `newCart` here
      // Navigate to the cart page after adding the item
      navigate('/CartPage', { state: { cart: newCart } }); // Use `navigate` for redirection
      return newCart;
    });
  };
  

  // Array of bridal dresses with details (image, name, price, description)
  const receps = [
    {
      id: 1,
      name: "Chocolate Cake",
      price: "$25",
      description: "Delicious and creamy chocolate cake.",
      image: recepone,
    },
    {
      id: 2,
      name: "Strawberry Cake",
      price: "$30",
      description: "A refreshing strawberry cake topped with fresh strawberries.",
      image: receptwo,
    },
    {
      id: 3,
      name: "Vanilla Cake",
      price: "$20",
      description: "Classic vanilla cake with a smooth cream filling.",
      image: recepthree,
    },
    {
      id: 4,
      name: "Red Velvet Cake",
      price: "$40",
      description: "Rich and moist red velvet cake with cream cheese frosting.",
      image: recepfour,
    },
    {
      id: 5,
      name: "Lemon Cake",
      price: "$35",
      description: "Tangy and sweet lemon cake, perfect for all occasions.",
      image: recepfive,
    },
    {
      id: 6,
      name: "Carrot Cake",
      price: "$30",
      description: "Moist carrot cake with a cream cheese glaze.",
      image: recepsix,
    },
    {
      id: 7,
      name: "Coffee Cake",
      price: "$28",
      description: "Perfect for coffee lovers, a rich and flavorful cake.",
      image: recepseven,
    },
    {
      id: 8,
      name: "Mango Cake",
      price: "$32",
      description: "Fresh and fruity mango cake with a smooth cream topping.",
      image: recepeight,
    },
    {
      id: 9,
      name: "Banana Cake",
      price: "$27",
      description: "A soft and moist banana cake with a caramel glaze.",
      image: recepnine,
    },
    {
      id: 10,
      name: "Black Forest Cake",
      price: "$45",
      description: "A rich and creamy black forest cake with cherries and whipped cream.",
      image: recepten,
    },
  ];

  return (
    <div className="recep-container">
      <h4>Reception</h4>
      <div className="recep-gallery">
        {receps.map((recep, index) => (
          <div className="card" key={index}>
            <img src={recep.image} alt={`Reception ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(recep)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{recep.name}</h3>
              <p>{recep.description}</p>
              <p className="recep-price">{recep.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reception;


     


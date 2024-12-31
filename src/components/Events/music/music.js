import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./music.css"; // Integrated CSS file
import muone from "../../../images/Entertainment music/musicone.jpeg";
import mutwo from "../../../images/Entertainment music/musictwo.jpeg";
import muthree from "../../../images/Entertainment music/music3.jpeg";
import mufour from "../../../images/Entertainment music/music4.jpeg";
import mufive from "../../../images/Entertainment music/music5.jpeg";
import musix from "../../../images/Entertainment music/music6.jpeg";
import museven from "../../../images/Entertainment music/music7.jpeg";
import mueight from "../../../images/Entertainment music/music8.jpeg";
import munine from "../../../images/Entertainment music/music8.jpeg";
import muten from "../../../images/Entertainment music/music10.jpeg";

function Music() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (music) => {
    setCart((prevCart) => {
      const newCart = [...prevCart,music];
      navigate("/CartPage", { state: { cart: newCart } });
      return newCart;
    });
  };

  const musics = [
    {
      id: "1",
      image: muone,
      name: "Pop Music Collection",
      price: "$500",
      description: "A collection of the latest hit pop songs.",
    },
    {
      id: "2",
      image: mutwo,
      name: "Rock Music Collection",
      price: "$400",
      description: "A classic collection of rock anthems.",
    },
    {
      id: "3",
      image: muthree,
      name: "Jazz Essentials",
      price: "$300",
      description: "Essential jazz music for any occasion.",
    },
    {
      id: "4",
      image: mufour,
      name: "Classical Music",
      price: "$350",
      description: "Timeless classical pieces for relaxation.",
    },
    {
      id: "5",
      image: mufive,
      name: "Indie Music Collection",
      price: "$250",
      description: "Discover the best indie music from new artists.",
    },
    {
      id: "6",
      image: musix,
      name: "Dance Hits",
      price: "$300",
      description: "The ultimate collection of upbeat dance music.",
    },
    {
      id: "7",
      image: museven,
      name: "R&B Soul Vibes",
      price: "$350",
      description: "Smooth and soulful R&B tracks for any mood.",
    },
    {
      id: "8",
      image: mueight,
      name: "Electronic Beats",
      price: "$400",
      description: "A collection of powerful electronic beats.",
    },
    {
      id: "9",
      image: munine,
      name: "Hip Hop Classics",
      price: "$450",
      description: "Classic hip-hop tracks from the golden era.",
    },
    {
      id: "10",
      image: muten,
      name: "Reggae Rhythm",
      price: "$350",
      description: "Feel-good reggae tunes for your soul.",
    },
  ];

  return (
    <div className="music-container">
      <h4>Entertainment Music</h4>
      <div className="music-gallery">
        {musics.map((music, index) => (
          <div className="card" key={index}>
            <img src={music.image} alt={`Music ${index + 1}`} className="card-image" />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(music)}
            >
              Add to Cart
            </button>
            <div className="card-content">
              <h3>{music.name}</h3>
              <p>{music.description}</p>
              <p className="music-price">{music.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;

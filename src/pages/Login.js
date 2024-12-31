import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Define the styles
const imageStyle = {
  backgroundImage: "linear-gradient(to right, #ff7e5f, #feb47b)", // Gradient background
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart || []; // Get the cart data passed from CartPage

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // After login, navigate to the booking page and pass the cart data
    navigate("/booking", { state: { cart } });
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: imageStyle.backgroundImage, // Using gradient background here
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff7e5f", // Color to match the gradient
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxSizing: "border-box",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff7e5f", // Gradient matching color
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#feb47b", // Lighter shade for hover effect
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h4 style={headerStyle}>𝓛𝓸𝓰𝓲𝓷 𝓽𝓸 𝓨𝓸𝓾𝓻 𝓐𝓬𝓬𝓸𝓾𝓷𝓽</h4>
        <label>𝒰𝓈𝑒𝓇 𝒩𝒶𝓂𝑒: </label>
        <input
          type="text"
          placeholder="Enter User Name"
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>𝐸𝓂𝒶𝒾𝓁: </label>
        <input
          type="email"
          placeholder="Enter Email Id"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>𝒫𝒶𝓈𝓈𝓌𝑜𝓇𝒹: </label>
        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          onClick={handleSignIn} // Continue booking after sign-in
        >
      𝒮𝒾𝑔𝓃 𝐼𝓃
        </button>
      </div>
    </div>
  );
};

export default Login;


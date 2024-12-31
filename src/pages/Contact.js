import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import one from "../images/bannerimg/newcan2.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted: ", formData);
        setIsSubmitted(true);
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            eventDate: "",
            message: "",
        });
        navigate("/"); // Navigate to the homepage
    };

    return (
        <div style={outerContainerStyle}>
            <div style={imageContainerStyle}>
                <img
                    src={one}
                    alt="Wedding Event"
                    style={imageStyle}
                />
            </div>
            <div style={formContainerStyle}>
                <h2 style={headerStyle}>
                    Wedding Event Management Contact Form
                </h2>
                {isSubmitted && (
                    <p style={successMessageStyle}>
                        Thank you for reaching out! We will get back to you soon.
                    </p>
                )}
                <form onSubmit={handleSubmit} style={formStyle}>
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />

                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />

                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />

                    <label htmlFor="eventDate">Event Date:</label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />

                    <label htmlFor="message">Message or Requests:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={textareaStyle}
                        required
                    ></textarea>

                    <button type="submit" style={buttonStyle}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

// Styles
const outerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
};

const imageContainerStyle = {
    flex: "1",
    minWidth: "300px",
    maxWidth: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
};

const formContainerStyle = {
    flex: "1",
    minWidth: "300px",
    maxWidth: "600px",
    padding: "40px",
    borderRadius: "12px",
    backgroundImage: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Lora', serif",
    color: "#fff",
};

const headerStyle = {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "32px",
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: "1px",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
};

const inputStyle = {
    padding: "15px",
    fontSize: "15px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "8px",
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s, box-shadow 0.2s",
};

const textareaStyle = {
    ...inputStyle,
    minHeight: "150px",
};

const buttonStyle = {
    backgroundColor: "#ff758c",
    color: "#fff",
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Lora', serif",
    textTransform: "uppercase",
    transition: "transform 0.2s, box-shadow 0.2s",
};

const successMessageStyle = {
    textAlign: "center",
    color: "#fff",
    marginBottom: "20px",
    fontSize: "18px",
    fontStyle: "italic",
};

export default Contact;

import React from "react";

// Footer Component
const Footer = () => {
    return (
        <footer style={footerContainerStyle}>
            <div style={footerContentStyle}>
                <div style={footerSectionStyle}>
                    <h3 style={footerHeadingStyle}>Wedding Bliss</h3>
                    <p style={footerTextStyle}>
                        Your dream wedding is just a call away! We provide customized services to make your special day unforgettable.
                    </p>
                </div>

                <div style={footerSectionStyle}>
                    <h4 style={footerSubHeadingStyle}>Quick Links</h4>
                    <ul style={footerLinksStyle}>
                        <li><a href="#home" style={footerLinkStyle}>Home</a></li>
                        <li><a href="#services" style={footerLinkStyle}>Services</a></li>
                        <li><a href="#portfolio" style={footerLinkStyle}>Portfolio</a></li>
                        <li><a href="#contact" style={footerLinkStyle}>Contact</a></li>
                    </ul>
                </div>

                <div style={footerSectionStyle}>
                    <h4 style={footerSubHeadingStyle}>Contact Us</h4>
                    <ul style={footerContactStyle}>
                        <li>📍 123 Wedding Avenue, Love City</li>
                        <li>📞 (123) 456-7890</li>
                        <li>📧 contact@weddingbliss.com</li>
                    </ul>
                </div>

                <div style={footerSectionStyle}>
                    <h4 style={footerSubHeadingStyle}>Follow Us</h4>
                    <div style={footerSocialLinksStyle}>
                        <a href="https://facebook.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">📘</a>
                        <a href="https://instagram.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">📸</a>
                        <a href="https://twitter.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">🐦</a>
                        <a href="https://pinterest.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">📌</a>
                    </div>
                </div>
            </div>

            <div style={footerBottomStyle}>
                <p style={footerBottomTextStyle}>
                    &copy; {new Date().getFullYear()} Wedding Bliss. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

// Styles for the footer components
const footerContainerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "40px 0",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
};

const footerContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "20px",
    padding: "0 20px",
};

const footerSectionStyle = {
    flex: "1",
    minWidth: "250px",
    margin: "10px",
};

const footerHeadingStyle = {
    fontSize: "28px",
    color: "#f5b041", // Gold-like color
    marginBottom: "15px",
};

const footerSubHeadingStyle = {
    fontSize: "20px",
    color: "#f5b041",
    marginBottom: "10px",
};

const footerTextStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#dcdcdc",
};

const footerLinksStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
};

const footerLinkStyle = {
    color: "#dcdcdc",
    textDecoration: "none",
    fontSize: "16px",
    display: "block",
    marginBottom: "8px",
    transition: "color 0.3s",
};

const footerLinkHoverStyle = {
    color: "#f5b041",
};

const footerContactStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    color: "#dcdcdc",
    fontSize: "16px",
};

const footerSocialLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    fontSize: "24px",
};

const socialIconStyle = {
    color: "#dcdcdc",
    textDecoration: "none",
    transition: "color 0.3s",
};

const socialIconHoverStyle = {
    color: "#f5b041", // Change to gold color on hover
};

const footerBottomStyle = {
    backgroundColor: "#222",
    padding: "10px 0",
};

const footerBottomTextStyle = {
    color: "#888",
    fontSize: "14px",
    margin: "0",
};

// Apply hover effects dynamically
// const applyHoverEffects = () => {
//     const footerLinks = document.querySelectorAll("a");
//     const socialIcons = document.querySelectorAll(".footer-social a");

//     footerLinks.forEach(link => {
//         link.addEventListener("mouseover", () => {
//             link.style.color = "#f5b041"; // Gold color for hover
//         });
//         link.addEventListener("mouseout", () => {
//             link.style.color = "#dcdcdc"; // Back to grey on mouse out
//         });
//     });

//     socialIcons.forEach(icon => {
//         icon.addEventListener("mouseover", () => {
//             icon.style.color = "#f5b041"; // Gold color for hover
//         });
//         icon.addEventListener("mouseout", () => {
//             icon.style.color = "#dcdcdc"; // Back to grey on mouse out
//         });
//     });
// };

// // Ensure hover effects are added
// if (typeof window !== "undefined") {
//     window.onload = applyHoverEffects;
// }

export default Footer;

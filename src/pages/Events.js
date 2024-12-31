import React from "react";
import "../pages/Events.css";
import { useNavigate } from "react-router-dom";
// Import images for each event
import one from "../images/bridal dress/dress1.jpeg";
import two from "../images/stage decor/sta2.jpeg";
import three from "../images//bannerimg/Eventsimg/flowers2.jpg";
import four from "../images//bannerimg/Eventsimg/mehandi.jpeg";
import five from "../images//bannerimg/Eventsimg/photography.jpg";
import six from "../images//bannerimg/Eventsimg/110-wedding-entertainment-ideas.png";
import seven from "../images//bannerimg/Eventsimg/cake.jpeg";
import eight from "../images//bannerimg/Eventsimg/drums.jpeg";
import nine from "../images//bannerimg/Eventsimg/jwellery.jpeg";
import ten from "../images//bannerimg/Eventsimg/catering.jpeg";
import tenone from "../images//bannerimg/Eventsimg/Haldi.jpeg";
import tentwo from "../images//bannerimg/Eventsimg/reception.jpeg";
// import Stage from "../components/Events/stage decor/stage";
// import Flower from "../components/Events/flower decor/flower";
// import Mehandi from "../components/Events/mehandi/mehandi";
// import Photo from "../components/Events/photograph/photo";
// import Music from "../components/Events/music/music";
// import Cakes from "../components/Events/cakes/cakes";
// import Drums from "../components/Events/drums/drums";
// import Jwellery from "../components/Events/jwellery/jwellery";
// import Catering from "../components/Events/catering/catering";
// import Haldi from "../components/Events/haldi/haldi";
// import Reception from "../components/Events/reception/recep";
function Events() {
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Navigation handlers for each event
  const handleBridalDress = () => navigate("/bridaldress");
  const handleStage = () => navigate("/stage");
  const handleFlower = () => navigate("/flower");
  const handleMehandi = () => navigate("/mehandi");
  const handlePhoto = () => navigate("/photo");
  const handleMusic = () => navigate("/music");
  const handleCakes = () => navigate("/cakes");
  const handleDrums = () => navigate("/drums");
  const handleJwellery = () => navigate("/jwellery");
  const handleCatering = () => navigate("/catering");
  const handleHaldi = () => navigate("/haldi");
  const handleReception = () => navigate("/reception");
   return (
    <div className="events-container">
      {/* Events Header */}
      <div className="events-header">
        <h1>Our Wedding Events</h1>
        <p>Explore the special events that will make your wedding day unforgettable.</p>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {/* Photography Event */}
       
        <div className="event-card">
          <img src={one} className="event-image" />
          <div className="event-details">
            <h2>bridal costume </h2>
            <p>
      Discover exquisite bridal costumes designed to make your special day unforgettable. Our collection blends traditional elegance with modern styles, offering a wide range of options tailored to suit your unique taste. Each piece is crafted with intricate details, ensuring you shine with unmatched grace on your wedding day.
    </p>
    <button className="event-button" onClick={ handleBridalDress}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={two} alt="Stage Decoration" className="event-image" />
          <div className="event-details">
            <h2>Stage Decoration</h2>
            <p>
              Our stage decorations add a touch of elegance to your wedding. Whether traditional or modern, we customize the stage setup to suit your theme.
            </p>
            <button className="event-button" onClick={handleStage}>More</button> 
          </div>
        </div>
    {/* Mehndi Event */}
        <div className="event-card">
          <img src={three}  className="event-image" />
          <div className="event-details">
            <h2>Flower Decoration</h2>
            <p>
            Transform your wedding venue with stunning floral arrangements. We create elegant and romantic settings that will leave a lasting impression.
            </p>
            <button className="event-button" onClick={handleFlower}>More</button>
          </div>
        </div>
        <div className="event-card">
          <img src={four} alt="Mehndi" className="event-image" />
          <div className="event-details">
            <h2>Mehndi</h2>
            <p>
              The Mehndi ceremony is a vibrant and fun-filled event. Our professional artists will create intricate henna designs that reflect your personal style.
            </p>
            <button className="event-button" onClick={handleMehandi}>More</button> 
          </div>
        </div>

        {/* Flower Decoration Event */}
        <div className="event-card">
          <img src={five} className="event-image" />
          <div className="event-details">
            <h2>Photography</h2>
            <p>
            Capture the beautiful moments of your wedding with our expert photographers. From candid shots to posed portraits, we ensure every detail is preserved.
            </p>
            <button className="event-button" onClick={handlePhoto}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={six} className="event-image" />
          <div className="event-details">
            <h2>Entertainment party</h2>
            <p>
            Keep your guests entertained with music, dance, and live performances. Our entertainment packages are tailored to your preferences for an unforgettable party.
            </p>
            <button className="event-button" onClick={handleMusic}>More</button> 
            </div>
        </div>
      <div className="event-card">
          <img src={seven} className="event-image" />
          <div className="event-details">
            <h2>cakes </h2>
            <p>
      Celebrate your wedding with our delectable and artistically designed cakes. From classic tiered cakes to personalized designs, we ensure every bite is as memorable as your special day. Our cakes are crafted with premium ingredients and tailored to match your wedding theme perfectly.
    </p>
    <button className="event-button" onClick={handleCakes}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={eight} className="event-image" />
          <div className="event-details">
            <h2>wedding drums</h2>
            <p>
      Add rhythm and energy to your wedding celebrations with our traditional and modern drum performances. Whether it's the dynamic beats of Dhol or the enchanting rhythms of traditional drums, our skilled drummers will create an electrifying atmosphere, making your special day truly unforgettable.
    </p>
    <button className="event-button" onClick={handleDrums}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={nine} className="event-image" />
          <div className="event-details">
            <h2>Bridal Jwellery</h2>
            <p>
      Adorn yourself with exquisite bridal jewellery that complements your wedding attire and enhances your radiant beauty. Our collection features timeless designs crafted with precision, ranging from elegant necklaces to dazzling earrings and intricate bangles. Make your special day sparkle with jewellery that tells your unique story.
    </p>
    <button className="event-button" onClick={handleJwellery}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={ten} className="event-image" />
          <div className="event-details">
            <h2>food catering </h2>
            <p>
      Delight your guests with our exceptional food catering services, offering a wide array of mouthwatering dishes tailored to your preferences. From traditional cuisines to modern culinary delights, we ensure every bite is a masterpiece. Our expert chefs and impeccable service make your wedding feast unforgettable.
    </p>
    <button className="event-button" onClick={handleCatering}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={tenone} className="event-image" />
          <div className="event-details">
            <h2>Haldi</h2>
            <p>
      The Haldi ceremony is an essential pre-wedding tradition filled with vibrant colors and joyful moments. Our services ensure that your Haldi ceremony is decorated with bright marigold flowers, and the atmosphere is full of energy with traditional music and dance. Let us bring the warmth and excitement of this beautiful ritual to life!
    </p>
    <button className="event-button" onClick={handleHaldi}>More</button> 
          </div>
        </div>
        <div className="event-card">
          <img src={tentwo} className="event-image" />
          <div className="event-details">
            <h2>Reception Decoration </h2>
            <p>
      Create an unforgettable first impression with our stunning reception decorations. From elegant floral arrangements to sophisticated lighting, we design a reception space that reflects your unique style. Whether you're looking for modern chic or classic elegance, our decorations set the perfect tone for your celebration.
    </p>
    <button className="event-button" onClick={handleReception}>More</button> 
          </div>
        </div>

      </div>
    </div>
  );
}
export default Events;

import React from 'react';
import './Services.css';
import ban from "../images/bannerimg/service banner.jpg";
import one from "../images/bannerimg/seviceone.jpg";
import two from "../images/bannerimg/sevicetwo.jpg";
import three from "../images/bannerimg/service 3.jpg";
import four from "../images/bannerimg/service four.jpg";
import five from "../images/bannerimg/servive five.jpg";
import six from "../images/bannerimg/ser sixxx.jpg";
import seven from "../images/bannerimg/ser seven.jpg";
import eight from "../images/bannerimg/ser 8.jpg";

function Services() {
  return (
    <div className="services-page">
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section">
        <h1>Services</h1>
        <p>
          <a href="/">Back To Home</a> &nbsp; &gt; &nbsp; <span>Services</span>
        </p>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={ban}
          alt="Wedding Services"
          className="hero-image"
          
        />
      </div>

      {/* Main Content */}
      <div className="services-content">
      
        <h2>𝓞𝓾𝓻 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h2>
        {/* <h3>The Best Wedding Services In Town</h3> */}
        <p>
        𝔚𝔢 𝔭𝔯𝔬𝔳𝔦𝔡𝔢 𝔢𝔵𝔠𝔢𝔭𝔱𝔦𝔬𝔫𝔞𝔩 𝔰𝔢𝔯𝔳𝔦𝔠𝔢𝔰 𝔱𝔬 𝔪𝔞𝔨𝔢 𝔶𝔬𝔲𝔯 𝔰𝔭𝔢𝔠𝔦𝔞𝔩 𝔡𝔞𝔶 𝔲𝔫𝔣𝔬𝔯𝔤𝔢𝔱𝔱𝔞𝔟𝔩𝔢
        </p>

        {/* Service Cards */}
        <div className="service-cards">
          <div className="card">
            <img src={one} alt="Venue Decoration" className="card-image" />
            <h4>𝓥𝓮𝓷𝓾𝓮 𝓓𝓮𝓬𝓸𝓻𝓪𝓽𝓲𝓸𝓷</h4>
            <p>Beautiful and elegant decor for your dream wedding.</p>
          </div>

          <div className="card">
            <img src={two} alt="Catering Services" className="card-image" />
            <h4>𝓒𝓪𝓽𝓮𝓻𝓲𝓷𝓰 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h4>
            <p>Delicious cuisine tailored to your preferences.</p>
          </div>

          <div className="card">
            <img src={three} alt="Photography" className="card-image" />
            <h4>𝓟𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱𝔂
            </h4>
            <p>Capture your memories with professional photography.</p>
          </div>

          <div className="card">
            <img src={four} alt="Entertainment" className="card-image" />
            <h4>𝓔𝓷𝓽𝓮𝓻𝓽𝓪𝓲𝓷𝓶𝓮𝓷𝓽</h4>
            <p>Live music, DJs, and performers to entertain your guests.</p>
          </div>

          <div className="card">
            <img src={five} alt="Bridal Styling" className="card-image" />
            <h4>𝓑𝓻𝓲𝓭𝓪𝓵 𝓢𝓽𝔂𝓵𝓲𝓷𝓰</h4>
            <p>Exclusive bridal makeup and styling for your big day.</p>
          </div>

          <div className="card">
            <img src={six} alt="Mehndi Services" className="card-image" />
            <h4>𝓜𝓮𝓱𝓪𝓷𝓭𝓲 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h4>
            <p>Intricate and beautiful mehndi designs for your special day.</p>
          </div>

          <div className="card">
            <img src={seven} alt="Wedding Haldi Services" className="card-image" />
            <h4> 𝓗𝓪𝓵𝓭𝓲 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h4>
            <p>Celebrate with vibrant and joyous Haldi ceremonies.</p>
          </div>

          <div className="card">
            <img src={eight} alt="Wedding Cakes" className="card-image" />
            <h4>𝓦𝓮𝓭𝓭𝓲𝓷𝓰 𝓒𝓪𝓴𝓮𝓼</h4>
            <p>Delicious and beautifully crafted wedding cakes for your celebration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

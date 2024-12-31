import React from 'react';
import './About.css'; // Create a separate CSS file for styling
// import one from '../images/bannerimg/Aboutimg/Abtimg.jpg';
import one from '../images/bannerimg/Aboutimg/about2.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>"𝖂𝖊 𝖘𝖙𝖗𝖎𝖛𝖊 𝖋𝖔𝖗 𝖊𝖝𝖈𝖊𝖑𝖑𝖊𝖓𝖈𝖊 𝖎𝖓 𝖕𝖗𝖔𝖛𝖎𝖉𝖎𝖓𝖌 𝖖𝖚𝖆𝖑𝖎𝖙𝖞 𝖘𝖊𝖗𝖛𝖎𝖈𝖊𝖘, 𝖊𝖓𝖘𝖚𝖗𝖎𝖓𝖌 𝖆𝖙𝖙𝖊𝖓𝖙𝖎𝖔𝖓 𝖙𝖔 𝖉𝖊𝖙𝖆𝖎𝖑, 𝖆𝖓𝖉 𝖉𝖊𝖑𝖎𝖛𝖊𝖗𝖎𝖓𝖌 𝖗𝖊𝖘𝖚𝖑𝖙𝖘 𝖔𝖓 𝖙𝖎𝖒𝖊."</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>𝓟𝓵𝓪𝓷𝓷𝓮𝓻 𝓯𝓸𝓻 𝓨𝓸𝓾𝓻 𝓟𝓮𝓻𝓯𝓮𝓬𝓽 𝓦𝓮𝓭𝓭𝓲𝓷𝓰</h2>
          <p>
          𝖂𝖊 𝖘𝖙𝖗𝖎𝖛𝖊 𝖋𝖔𝖗 𝖊𝖝𝖈𝖊𝖑𝖑𝖊𝖓𝖈𝖊 𝖎𝖓 𝖕𝖗𝖔𝖛𝖎𝖉𝖎𝖓𝖌 𝖖𝖚𝖆𝖑𝖎𝖙𝖞 𝖘𝖊𝖗𝖛𝖎𝖈𝖊𝖘, 𝖊𝖓𝖘𝖚𝖗𝖎𝖓𝖌 𝖆𝖙𝖙𝖊𝖓𝖙𝖎𝖔𝖓 𝖙𝖔 𝖉𝖊𝖙𝖆𝖎𝖑, 𝖆𝖓𝖉 𝖉𝖊𝖑𝖎𝖛𝖊𝖗𝖎𝖓𝖌 𝖗𝖊𝖘𝖚𝖑𝖙𝖘 𝖔𝖓 𝖙𝖎𝖒𝖊."
          </p>
          <ul>
            <li>"𝓗𝓸𝔀 𝓰𝓻𝓪𝓬𝓮𝓯𝓾𝓵 𝓶𝓸𝓿𝓮𝓶𝓮𝓷𝓽𝓼 𝓶𝓮𝓮𝓽 𝓼𝓽𝓻𝓾𝓬𝓽𝓾𝓻𝓮𝓭 𝓮𝓵𝓮𝓰𝓪𝓷𝓬𝓮."</li>
            <li>"𝓐 𝓽𝓸𝓾𝓬𝓱 𝓸𝓯 𝓻𝓮𝓯𝓲𝓷𝓮𝓶𝓮𝓷𝓽 𝓲𝓷 𝓮𝓿𝓮𝓻𝔂 𝓭𝓮𝓽𝓪𝓲𝓵."</li>
            <li>"𝓣𝓱𝓮 𝓹𝓮𝓻𝓯𝓮𝓬𝓽 𝓱𝓪𝓻𝓶𝓸𝓷𝔂 𝓸𝓯 𝓭𝓮𝓼𝓲𝓰𝓷 𝓪𝓷𝓭 𝓹𝓾𝓻𝓹𝓸𝓼𝓮."</li>
          </ul>
        </div>
        <div className="about-image">
          <img
            src={one}
            alt="Wedding Couple"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

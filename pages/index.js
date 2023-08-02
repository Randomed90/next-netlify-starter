import React, { useState } from 'react';
import Head from 'next/head';
import Profile from 'pages/Profile'; // Import the Profile component
import Header from '@components/Header';

export default function Home() {
  const [isCool, setIsCool] = useState(false);

  // Function to be executed when the button is clicked
  function handleButtonClick() {
    setIsCool((prevState) => !prevState);
  }

  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        <title>Portfolio</title>
      </Head>

      <main>
        <nav className="navbar">
          <a className="navbar-item active" href="#">
            <i className="fas fa-home"></i> Home
          </a>
          <a className="navbar-item" href="/Profile">
            <i className="fa-solid fa-user"></i> Profile
          </a>
          <a className="navbar-item" href="/Skills">
            <i className="fa-solid fa-gear"></i> Skills
          </a>
          <a className="navbar-item" href="/Achievements">
            <i className="fa-solid fa-trophy"></i> Achievements
          </a>
        </nav>
        <h1 className={`header ${isCool ? 'cool' : ''}`} style={isCool ? { color: 'white' } : {}}>
          I'm Muhammad Al Fatih, a 16yr old self-taught web developer from Malaysia, passionate about low-level programming
        </h1>
        {/* Add the event handler to the button */}
        <button className="do-btn" id="myButton" type="button" onClick={handleButtonClick}>
          Do something cool
        </button>
      </main>
    </div>
  );
}

import React from 'react';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const handleEnter = () => {
    history.push('/home');
  };

  const handleLeave = () => {
    const randomLinks = [
      'https://example.com',
      'https://www.google.com',
      'https://github.com',
      'https://www.wikipedia.org',
    ];
    const randomIndex = Math.floor(Math.random() * randomLinks.length);
    window.location.href = randomLinks[randomIndex];
  };

  return (
    <div className="landing-container">
      {/* Title */}
      <h1 className="landing-title">Welcome to Berki's Sanctuary</h1>

      {/* Subtext Box */}
      <div className="landing-subtext-box">
        <p>
          I am pleased and honored that you have, in your own way, stumbled upon this place of mine. I hope you find what you are looking for.
        </p>
        <p>
          Before we continue, you need to understand that you are to be subjected to my mind, my thoughts, and my projects. Everything you see here is and will be a reflection of me directly.
        </p>
      </div>

      {/* Buttons */}
      <div className="landing-buttons">
        <button className="enter-button" onClick={handleEnter}>
          Enter
        </button>
        <button className="leave-button" onClick={handleLeave}>
          Leave
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

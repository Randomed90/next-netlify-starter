import React from 'react';

const Skills = () => {
  return (
    <div className="container">
      <main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

        <nav class="navbar">
          <a class="navbar-item" href="/">
            <i class="fas fa-home"></i> Home
          </a>
          <a class="navbar-item" href="/Profile">
            <i class="fa-solid fa-user"></i> Profile
          </a>
          <a class="navbar-item active" href="#">
            <i class="fa-solid fa-gear"></i> Skills
          </a>
          <a class="navbar-item" href="#">
            <i class="fa-solid fa-trophy"></i> Achievements
          </a>
        </nav>
        <ul class="info-box">
            <li class="info-box-item"> 
                <i class="fa-solid fa-code"></i> C </li>
            <li class="info-box-item">
                <i class="fa-brands fa-python"></i> Python</li>
            <li class="info-box-item">
                <i class="fa-brands fa-js"></i> Javascript</li>
            <li class="info-box-item">
                <i class="fa-brands fa-html5"></i> HTML & <i class="fa-brands fa-css3-alt"></i> CSS</li>
        </ul>
      </main>
    </div>
  );
};

export default Skills;

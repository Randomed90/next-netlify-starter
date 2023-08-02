import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <main>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      
        <nav class="navbar">
          <a class="navbar-item" href="/">
            <i class="fas fa-home"></i> Home
          </a>
          <a class="navbar-item active" href="#">
            <i class="fa-solid fa-user"></i> Profile
          </a>
          <a class="navbar-item" href="/Skills">
            <i class="fa-solid fa-gear"></i> Skills
          </a>
          <a class="navbar-item" href="/Achiements">
            <i class="fa-solid fa-trophy"></i> Achievements
          </a>
        </nav>
        <ul class="info-box">
          <li class="info-box-item">Country: Malaysia</li>
          <li class="info-box-item">Age: 16</li>
          <li class="info-box-item">Hobbies: Weightlifting, Calisthenics, Japan (Language, Culture, Anime)</li>
          <li class="info-box-item">Socials: 
            <br></br><i class="fa-brands fa-github"></i> <a target="_blank" class="info-link" href="https://github.com/Randomed90"> @randomed90</a> 
            <br></br>
            <i class="fa-brands fa-twitter"></i> <a target="_blank" class="info-link" href="https://twitter.com/Randomed90_"> @Randomed90_</a> 
            <br></br>
            <i class="fa-brands fa-instagram"></i> <a target="_blank" class="info-link" href="https://www.instagram.com/_randomed/">_randomed</a>
            <br></br>
            <i class="fa-brands fa-linkedin"></i> <a target="_blank" class="info-link" href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAETQyJ4BScqTW4tCuDU7uCW4wydZqTddMJA&keywords=randomed%20undefined&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d375e4f9-ce81-41c9-97fb-ce41280adcdd&sid=IB0">@randomed undefined</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Profile;
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="team-container">
      <div className="member">
        <img src="./images/leidy.jpeg" alt="Leidy Parrado" />
        <h3>Leidy Daniela Parrado</h3>
        <p><a href="https://github.com/LeidyDanielaParrado">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/daniela-parrado-451a6a1a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a></p>
      </div>
      <div className="member">
        <img src="path/to/image2.jpg" alt="Miembro 2" />
        <h3>Nombre 2</h3>
        <p><a href="https://github.com/miembro2">miembro2</a></p>
        <p><a href="https://linkedin.com/in/miembro2">miembro2</a></p>
      </div>
    </div>
  );
};

export default Home;


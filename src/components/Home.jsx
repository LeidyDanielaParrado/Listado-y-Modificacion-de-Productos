import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="team-container">
      <div className="member">
        <img src="path/to/image1.jpg" alt="Miembro 1" />
        <h3>Nombre 1</h3>
        <p>GitHub: <a href="https://github.com/miembro1">miembro1</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/miembro1">miembro1</a></p>
      </div>
      <div className="member">
        <img src="path/to/image2.jpg" alt="Miembro 2" />
        <h3>Nombre 2</h3>
        <p>GitHub: <a href="https://github.com/miembro2">miembro2</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/miembro2">miembro2</a></p>
      </div>
      <div className="member">
        <img src="path/to/image2.jpg" alt="Miembro 2" />
        <h3>Nombre 3</h3>
        <p>GitHub: <a href="https://github.com/miembro2">miembro2</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/miembro2">miembro2</a></p>
      </div>
    </div>
  );
};

export default Home;


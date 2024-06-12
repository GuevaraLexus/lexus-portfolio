import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import computerImage from '../img/computer.jpg'; // Import the computer image
import Typewriter from '../effects/Typewriter'; // Import the custom hook

function Main({ scrollToCarousel }) {
  return (
    <div className="position-relative">
      <img src={computerImage} alt="Computer" className="w-100" style={{ height: 'auto', opacity: '0.95'}} />
      <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
        <h1 className="text-white roboto-mono-unique-class">
          <Typewriter text="COFFEE | CODE | EAT | SLEEP | REPEAT" delay={200} infinite />
        </h1>
        <button
          onClick={scrollToCarousel}
          className="btn btn-outline-dark position-absolute top-50 start-50 translate-middle text-center rounded-pill"
          style={{ width: '10rem', height: '2.5rem', marginTop: '100px'}}
        >
          Explore
        </button>
      </div>
    </div>
    
  );
}

export default Main;

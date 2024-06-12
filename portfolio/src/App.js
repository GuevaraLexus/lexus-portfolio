import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CardCarousel from './components/CardCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const carouselRef = useRef(null);

  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div style={{ paddingTop: '56px', flex: '1' }}> {/* Adjust padding to the height of your fixed header */}
        <Main scrollToCarousel={scrollToCarousel} />
        <div ref={carouselRef}>
          <CardCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

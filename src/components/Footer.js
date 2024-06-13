import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start text-white" style={{ width: '100%' }}>
      <div className="text-center p-3">
        © {new Date().getFullYear()} | Hit me up @
        <a className="text-white" href="https://www.facebook.com/lexus.guevara"> Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;

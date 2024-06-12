// src/components/CardCarousel.js
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import clanguageImage from '../img/c-language.png'; // Import another image
import jlanguageImage from '../img/j-language.png'; // Import another image
import cslanguageImage from '../img/cs-language.png'; // Import another image
import jsanguageImage from '../img/js-language.png'; // Import another image
import arduinolanguageImage from '../img/arduino-language.png'; // Import another image
import officesuitesImage from '../img/officesuites.png'; // Import another image

const CardCarousel = () => {
  const cardData = [
    { title: 'C Language', text: 'Starting from First year, I already learned C as it is one of the fundamental language to learn programming.', imgSrc: clanguageImage },
    { title: 'Java Language', text: 'I learned it during the second semester until the second year of College. I already made a game about this language.', imgSrc: jlanguageImage },
    { title: 'C# Language', text: 'I learned about this language during second semester of my second year. Most of my projects here are software development applications.', imgSrc: cslanguageImage },
    { title: 'Javascript', text: 'I learned this during my 3rd year days. Most of the projects that I\'ve made are integrated with PHP and PHPmyAdmin as its database', imgSrc: jsanguageImage },
    { title: 'Arduino', text: 'During my 3rd year 2nd semester days, we tried this and made some activities like ultrasonic sensor / clap detector and etc.', imgSrc: arduinolanguageImage },
    { title: 'Office Suites', text: 'This is the fundamental aspects to learn to be able to do something on the computer.', imgSrc: officesuitesImage }
  ];

  return (
    <div className='m-5'>
    <div className='text-center m-5'>
      <h1>Knowledgable in: </h1>
    </div>
      <Carousel>
        {Array.from({ length: Math.ceil(cardData.length / 3) }).map((_, carouselIndex) => (
          <Carousel.Item key={carouselIndex}>
            <div className="row justify-content-center">
              {cardData.slice(carouselIndex * 3, (carouselIndex + 1) * 3).map((card, index) => (
                <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.imgSrc} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;

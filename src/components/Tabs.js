import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const CustomTabs = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand><b>PROJECTS:</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#bms">Barangay Management System</Nav.Link>
              <Nav.Link href="#ps">Pandemic Survivor</Nav.Link>
              <Nav.Link href="#atm">ATM Machine</Nav.Link>
              <Nav.Link href="#ars">Airline Reservation System</Nav.Link>
              <NavDropdown title="More Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#additional1">C Projects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#additional2">Java Projects</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example">
          <h4 id="bms">Barangay Management System</h4>
          <p className='m-5'>
          The <a href='https://barangay34.wuaze.com'><b>Barangay Management System</b></a> (BMS) 
            is a comprehensive, web-based application designed to streamline and enhance the administrative operations of a barangay, 
            the smallest administrative division in the Philippines. This system aims to digitize and automate various functions, 
            including resident management, incident reporting, request processing, and records management, to improve efficiency, 
            transparency, and service delivery.
          </p>

          <h4 id="ps">Pandemic Survivor</h4>
          <p className='m-5'>
            <a href='https://github.com/GuevaraLexus/Pandemic-Survivor---Java-Game'><b>Pandemic Survivor</b></a> is a 2d/Pixel Survival Game 
            inspired from the Pandemic happened in 2020. It is created just like how every other survival games. You are the main character 
            and there are NPC roaming around that are everywhere and attacks you. It can lessen your life and also end it. You need to collect 
            the syringe everywhere to help your loved one to survive the Covid.
          </p>

          <h4 id="atm">ATM Machine</h4>
          <p className='m-5'>
            The <a href='https://github.com/GuevaraLexus/ATM-Machine'><b>ATM Machine</b></a> is the project for our midterm examination 
            from 3rd year 1st sem. It emphasizes the use of the database, on how are we knowledgable to connect each class to the main database 
            so that we can retrieve the needed data.
          </p>

          <h4 id="ars">Airline Reservation System</h4>
          <p className='m-5'>
            The <a href='https://github.com/GuevaraLexus/Airline-Reservation-System'><b>Airline Management System</b></a> (AMS) 
            is a comprehensive software solution designed to streamline and automate various aspects of airline operations. It encompasses functionalities 
            tailored to meet the needs of airlines, ranging from passenger booking and ticketing to flight scheduling and fleet management. AMS aims to 
            enhance efficiency, improve customer satisfaction, and optimize resource utilization within the airline industry.
          </p>

          <h4 id="additional1">C Projects</h4>
          <p className='m-5'>
            <a href='https://github.com/GuevaraLexus/C-PROGRAMS'><b>C Projects</b></a> that I made during my first year College days. 
          </p>

          <h4 id="additional2">Java Projects</h4>
          <p className='m-5'>
            <a href='https://github.com/GuevaraLexus/JAVA-PROGRAMS'><b>Java Projects</b></a> that I made during my second year College days.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CustomTabs;

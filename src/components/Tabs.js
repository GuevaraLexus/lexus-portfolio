import React, { useState } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const CustomTabs = () => {
  const [activeKey, setActiveKey] = useState('home');

  return (
    <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      <div className='text-center my-5'>
        <h1>Projects :</h1>
      </div>
      <Row className="dark-tabs mx-4 my-3"> {/* Add margins to the Row */}
        <Col sm={4}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="bms">Barangay Management System</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ps">Pandemic Survivor | Java Game</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="atm">ATM-Machine</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ars">Airline Reservation System</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="bms">
              <a href='https://barangay34.wuaze.com'><b>Barangay Management System</b></a> The Barangay Management System (BMS) is a comprehensive, web-based application designed to streamline and enhance the administrative operations of a barangay, the smallest administrative division in the Philippines. This system aims to digitize and automate various functions, including resident management, incident reporting, request processing, and records management, to improve efficiency, transparency, and service delivery.
            </Tab.Pane>
            <Tab.Pane eventKey="ps">
            <a href='https://github.com/GuevaraLexus/Pandemic-Survivor---Java-Game'><b>Pandemic Survivor</b></a> is a 2d/Pixel Survival Game inspired from the Pandemic happened in 2020. It is created just like how every other survival games. You are the main character and there are NPC roaming around that are everywhere and attacks you. It can lessen your life and also end it. You need to collect the syringe everywhere to help your loved one to survive the Covid.
            </Tab.Pane>
            <Tab.Pane eventKey="atm">
            The <a href='https://github.com/GuevaraLexus/ATM-Machine'><b>ATM Machine</b></a> is the project for our midterm examination from 3rd year 1st sem. It emphasizes the use of the database, on how are we knowledgable to connect each class to the main database so that we can retreive the needed data.
            </Tab.Pane>
            <Tab.Pane eventKey="ars">
            The <a href='https://github.com/GuevaraLexus/Airline-Reservation-System'><b>Airline Management System</b></a> (AMS) is a comprehensive software solution designed to streamline and automate various aspects of airline operations. It encompasses functionalities tailored to meet the needs of airlines, ranging from passenger booking and ticketing to flight scheduling and fleet management. AMS aims to enhance efficiency, improve customer satisfaction, and optimize resource utilization within the airline industry.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default CustomTabs;

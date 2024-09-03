import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Testify1 from "../Assets/t1.jpeg";
import Testify2 from "../Assets/t2.jpeg";
import Testify3 from "../Assets/t3.jpeg";
import "./client.css";

const Client = () => {
  const cardData = [
    {
      title: "Mr John Doe",
      text: "I did a logistics service for my business and it was great doing business with FinkSupply.They were very professional and helpful and I would recommend them.",
      img: Testify1,
    },
    {
      title: "Mrs Jane Ade",
      text: "My daughter in the united states sends me a parcel monthly through FinkSupply and I am very happy with the services.",
      img: Testify2,
    },
    {
      title: "Mr Peter Amadi",
      text: "I deal on a weekly basis with FinkSupply, my containers of automotive parts are in good condition when I receive them and I would recommend them.",
      img: Testify3,
    },
    // Add more cards as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`mb-3 mt-5 text-center bg-white card-bodys ${
              index === activeIndex ? "d-block" : "d-none"
            }`}
          >
           <h1 className="fw-bold Big">Testimonials</h1>
            <Card.Body>
              <Card.Text className="text">{card.text}</Card.Text>
              <Card.Img alt="Card image" className="img " src={card.img} />
              <Card.Title className="title">{card.title}</Card.Title>
            </Card.Body>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Client;

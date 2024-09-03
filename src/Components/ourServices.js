import React from "react";
import "./ourser.css";
import RelocateImg from "../Assets/relocation.png";
import CourierImg from "../Assets/delivery-icon.png";
import TransportImg from "../Assets/transportation-icon.png";
import CarImg from "../Assets/car icon.png";

import { Container, Row, Col } from "react-bootstrap";

const ourServices = () => {
  return (
    <Container className="mt-5 ">
      <Row className=" cardHolder">
        <Col xs={12} md={6} lg={3}>
          <div className="card  align-items-center ">
            <img src={RelocateImg} className="card-img-top" alt="" />
            <div className="card-body">
              <h2 className="card-title">Relocation & Logistics</h2>
              <p className="card-text">
                We provide relocation and logistics services. We have a team of
                professionals who are experienced in this field and can help you
                with your relocation needs.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="card align-items-center ">
            <img src={CourierImg} className="card-img-top" alt="" />
            <div className="card-body">
              <h2 className="card-title ">Courier & Delivery</h2>
              <p className="card-text">
                We provide courier and delivery services. We have a
                team of professionals who are experienced in this field and can
                help you with your delivery needs.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="card align-items-center ">
            <img src={TransportImg} className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Transportation Services</h5>
              <p className="card-text">
                We provide transportation services. We have a team of
                professionals who are experienced in this field and can help you
                with your transportation needs.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="card align-items-center ">
            <img src={CarImg} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Car Rental,Sales & Pickup</h5>
              <p className="card-text">
                We provide car rental, sales and pickup services. We have a team
                of professionals who are experienced in this field and can help
                you with your car needs.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ourServices;

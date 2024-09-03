import React from "react";
import "./hero.css";
import { Button } from "react-bootstrap";
import HeroImage from "../Assets/hero-img.png";
const HeroContent = () => {
  return (
    <div className="overDiv  py-lg-5 mt-5">
      <div className="row py-5 adjuster d-flex ">
        <div className="col-lg-6 py-1 ps-4 heroTextHolder ps-lg-5 align-content-sm-start">
         <div>
         <h1>
            We make freight forwarding to your destination anywhere,anytime.
            <br />
            <span>Fast and Reliable</span>
          </h1>
          <p>
            Our services are designed to meet your needs, whether you are
            shipping a full container load or less than a container load. We
            offer competitive rates and reliable service to ensure your cargo
            arrives safely and on time.
          </p>
          <div className="d-flex justify-content-start">
            <Button className="btn   btnForBooking border-0 fw-bold " size="lg">
              Book Now
            </Button>
         </div>
          </div>
        
        </div>
        <div className="heroImageHolder col-lg-6 ">
            {/* <img src={HeroImage} alt="Hero" /> */}
          </div>
      </div>
      {/*  Tacking section form */}
      <section className="trackHolder">
      <h1>Track Your Shipment</h1>
      <p className="fs-6 fw-bold"> Enter your tracking number to track your shipment.</p>
        <div className="container trackingSection">
         
          <form action="" className="d-flex justify-content-center flex-wrap gap-2">
            <input type="text" placeholder="Enter tracking number" />
            <br/>
            <button>Track</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HeroContent;

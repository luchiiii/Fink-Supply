import React from "react";
import "./chooseus.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

import ChooseImg from "../Assets/chooseus.jpeg";
import ThunderImg from "../Assets/right-ontime-icon.png";
import Savings from "../Assets/cost-saving-icon.png";
import Secure from "../Assets/savensecure-icon.png";

const ChooseUs = () => {
  return (
    <div>
      <div className="row d-flex text-center mt-5 choseus-holder ">
        <h4>Why Choose Us</h4>
        <div className="col-md-6 ImageHolder mt-5">
          <img src={ChooseImg} alt="" />
        </div>
        <div className="col-md-6 mt-5">
          <div className="row flex-column">
            <div className="col-md-4">
              <div className="card-holder">
                <div className=" d-flex">
                  <div className="imgDiv mt-2 ">
                    <img src={ThunderImg} alt="" className="img-fluid ps-3" />
                  </div>
                  <div className="textDiv mt-2">
                    <h3 className="">Right On Time </h3>
                    <p>
                      We provide right on time services. We have a team of
                      professionals who are experienced in this field and can
                      help you with your right on time needs.
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-holder">
                <div className=" d-flex">
                  <div className="imgDiv mt-2 ">
                    <img src={Savings} alt="" className="img-fluid ps-3" />
                  </div>
                  <div className="textDiv mt-2">
                    <h3 className="">Cost Savings</h3>
                    <p>
                      We provide cost saving services. We have a team of
                      professionals who are experienced in this field and can
                      help you with your cost savings needs.
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-holder">
                <div className=" d-flex">
                  <div className="imgDiv mt-2 ">
                    <img src={Secure} alt="" className="img-fluid ps-3" />
                  </div>
                  <div className="textDiv mt-2">
                    <h3 className="">Safe and Secure </h3>
                    <p>
                      Our warehouse is safe and secure. We have 24/7 security
                      guard on duty and 24/7 online support for you to help you
                      with any problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="whatsapp-section d-flex justify-content-center my-5 pt-3 gap-5
      "
      >
        <div className="what">
          <a href="##" className="whatsapp-icon text-success ">
            <FaWhatsapp
              className="text-success mt-2"
              style={{ fontSize: "2rem" }}
            />
          </a>
          <a href="##" className="whatsapp-icon text-success ms-4">
            <FiPhoneCall
              className="text-success mt-2"
              style={{ fontSize: "2rem" }}
            />
          </a>
        </div>
        <div className="pt-2">
          <h3>+234-703-733-3809</h3>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;

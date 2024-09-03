import React from 'react'
import "./servicebanner.css"
import ServiceImg from "../Assets/victoria-kubiaki-t0Aio60jD4Q-unsplash 1.png"
import Apartment from "../Assets/apartment.png"
import House from "../Assets/homes-moved-icon.png"
import Shipping from "../Assets/transport-icon.png"
const ServiceBanner = () => {
  const services = [
    {
      imageSrc: Apartment,
      title: 'Office Relocation',
      text: 'We provide relocation and logistics services. We have a team of professionals who are experienced in this field and can help you with your relocation needs,. We are FinkSupply Solutions give us a booking  to help you with all your relocation needs  .',
    },
    {
      imageSrc: House,
      title: 'Household Moving',
      text: "Are you looking for a reliable and professional moving company? Look no further than FinkSupply. We're here to help you with all your moving needs. We are proud to deliver excellent services at anytime We take your belongings as fragile as possible and make sure they are transported safely.",
    },
    {
      imageSrc: Shipping,
      title: 'Transportation Services',
      text: 'We provide courier and delivery services. We have a team of professionals who are experienced in this field and can help you with your delivery needs . We are FinkSupply Solutions we rent cars transport them inbound and outbound around the country .',
    },
  ];

  return (
    <div>
      <section className="container-fluid services-section">
        <div className="text-center">
          <h3 className="service-text">Our Services</h3>
          <p className="service-intro fw-medium text-white fs-3">
            We provide a wide range of services to meet all your logistics needs.
          </p>
        </div>
      </section>

      <section className="container another-section">
        <div className="row another d-flex">
          <div className="col-lg-6">
            <h2 className="another-intro">
              Proud to deliver excellent services at anytime.
            </h2>
            <p className="another-text pe-5">
              We are here to help you with all your logistics needs,
              We are proud to deliver excellent services at anytime.
              Our services are top-notch and we are always available to help you
              with your logistics needs. Contact us today. Finksupply solutions to all.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={ServiceImg} alt="" className="another-img" />
          </div>
        </div>
      </section>

      <section className="container mainserv2-section mt-5 ">
        <h2 className="mainserv-text">We offer diverse services</h2>
        <div className="row mainserv-cont w-100 h-100">
          {services.map((service, index) => (
            <div key={index} className="col">
              <div className="card mainserv-card ">
                <div className="card-body">
                  <div className="text-center">
                    <img src={service.imageSrc} alt="" className="card-icon" />
                    <h3 className="card-title mainserv-card-title">{service.title}</h3>
                  </div>
                  <p className="card-text mainserv-card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-fluid moving-section">
        <div className="text-center">
          <h3 className="moving-intro">Moving & Hiring Services</h3>
          <p className="moving-text">
            We are here to help you with all your moving needs We are proud to deliver excellent services at anytime .
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceBanner
import React from 'react'
import './infoforcompany.css'	

const InfoForCompany = () => {
  return (
    <div  className=' mb-5'>
        <div className='contact_bg text-center'>
            <h1>Contact</h1>
            <h4>Get in touch with us today for more information and make your booking</h4>
        </div>
        <div className="row d-flex justify-content-center w-75 mx-auto mt-3">
          <div className="col-lg-3 first_box">
            <h5>Office</h5>
            <h6>FinkSupply Logistics</h6>
            <h6>P.O Box AW5784</h6>
            <h6>Lagos, Nigeria</h6>
          </div>

          <div className="col-lg-3 middle_box-1">
            <h5>Call us</h5>
            <h6 className="phone-number">+234 703 733 3809</h6>
          </div>

          <div className="col-lg-3 middle_box-2">
            <h5>Mail us</h5>
            <h6 className="email">info@finksupply.com</h6>
          </div>

          <div className="col-lg-3 last_box">
            <h5>Office hours</h5>
            <h6 className="office-hours">Mon-Fri:08:00-05:00</h6>
            <h6 className="office-hours">Sat:08:00-02:00</h6>
          </div>
        </div>
    </div>
  )
}

export default InfoForCompany
import React, { useEffect } from "react";
import img2 from "../assets/cover4.jpg";
import './css/about.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
function About() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="service_header" data-aos="zoom-in">
            <div className="common">
              <h1 heading>About Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the pricing and typesetting
                industry. Lorem Ipsum standard dummy text.
              </p>

              <div className="commonBorder"></div>
              <hr class="hr hr-blurry" />
            </div>
          </div>
          <div className="row1" data-aos="zoom-in">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img ">
                <img
                  className="d-block w-100 img"
                  src={img2}
                  alt="First slide"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 ">
              <div className="about-text">
                <h2>We provide best Quality Services Ever</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the pricing and
                  typesetting industry.Lorem Ipsum standard dummy text.
                  Lorem Ipsum is simply dummy text of the pricing and
                  typesetting industry.Lorem Ipsum standard dummy text.
                  Lorem Ipsum is simply dummy text of the pricing and
                  typesetting industry.Lorem Ipsum standard dummy text.
                  Lorem Ipsum is simply dummy text of the pricing and
                  typesetting industry.Lorem Ipsum standard dummy text.
                </p>
                <button className="btn btn-warning rounded-pill">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="divider div-transparent "></div>
      </div>
      
      
    </>
  );
}

export default About;

import React, { useEffect } from "react";
import "./css/contact.css";
import img1 from "../assets/message.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'
function Contact() {
    useEffect(()=>{
        AOS.init({duration: 1000});
      },[])
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="service_header" data-aos="zoom-in">
            <div className="common">
              <h1 heading>Contact Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the pricing and typesetting
                industry. Lorem Ipsum standard dummy text.
              </p>

              <div className="commonBorder"></div>
              <hr class="hr hr-blurry" />
            </div>
          </div>
          <div className="main" data-aos="zoom-in">
            <div className="row1">
              <div className="col-7" data-aos="zoom-in">
                <div>
                  <h3>send us message</h3>
                </div>
                <div className="form-parent">
                  <form>
                    <div class="input col-md-11 col-sm-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        aria-label="Firstname"
                      />
                    </div>
                    <div class="input col-md-11 col-sm-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Email"
                        aria-label="Firstname"
                      />
                    </div>
                    <div class="textarea col-md-11 col-sm-12">
                      <textarea
                       rows="4" cols="60"
                        type="text"
                        class="form-control"
                        placeholder="Message"
                        aria-label="Firstname"
                      />
                    </div>
                    <div class="co col-md-11 col-sm-12 pt-20 mt-20">
                      <button class="button-18 " role="button">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="contact-img-parent col-5">
                <div className="contact-img">
                    <img
                    src={img1}
                    alt="image"
                    />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider div-transparent "></div>
      </div>
    </>
  );
}

export default Contact;

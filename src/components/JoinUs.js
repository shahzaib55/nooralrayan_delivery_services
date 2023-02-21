import React, { useEffect } from "react";
import "./css/joinUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
function JoinUs() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  return (
    <>
      <div className="joinus">
        <div className="container">
          <div className="service_header" data-aos="zoom-in">
            <div className="common">
              <h1 heading>Join Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the pricing and typesetting
                industry. Lorem Ipsum standard dummy text.
              </p>

              <div className="commonBorder"></div>
              <hr class="hr hr-blurry" />
            </div>
          </div>
          <div className="container">
            <div className="form-parent">
              <form className="form" data-aos="zoom-in">
                <div class="row">
                  <div class="col-md-4 col-sm-12">
                    <label for="Firstname" class="form-label">
                      Ful Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="Firstname"
                    />
                  </div>
                  <div class="col-md-4 col-sm-12">
                    <label for="Middlename" class="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Middle name"
                      aria-label="Middlename"
                    />
                  </div>
                  <div class="col-md-4 col-sm-12">
                    <label for="Lastname" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Lastname"
                    />
                  </div>
                </div>
                <div class="row" >
                  <div class="col-4">
                    <label for="DateOfBirth" class="form-label">
                      Date Of Birth
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Date Of Birth"
                      aria-label="DateOfBirth"
                    />
                  </div>
                  <div class="col-4">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="day"
                      class="form-control"
                      placeholder="example@gmail.com"
                      aria-label="email"
                    />
                  </div>
                  <div class="col-4">
                    <label for="Mobile" class="form-label">
                      Mobile
                    </label>
                    <input
                      type="year"
                      class="form-control"
                      placeholder="Mobile Number"
                      aria-label="Mobile"
                    />
                  </div>
                </div>
                <div class="row" >
                  <div class="col-12">
                    <label for="basic-url" class="form-label">
                      Current Adress
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Street Adress"
                      aria-label="First name"
                    />
                    <div class="form-text text-white">Street Adress</div>
                  </div>
                </div>
                <div class="row" >
                  <div class="col-6">
                    <label for="City" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                      aria-label="City"
                    />
                  </div>
                  <div class="col-6">
                    <label for="basic-url" class="form-label">
                      State / Province
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State / Province"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="file-drop-area col-11">
                    <span class="choose-file-button">Choose files</span>
                    <span class="file-message">
                      or drag and drop files here
                    </span>
                    <input class="file-input" type="file" multiple />
                  </div>
                </div>
                <div className="row">
                    <div className="bt col-10">
                    <button class="button-18" role="button">Apply</button>
                    </div>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;

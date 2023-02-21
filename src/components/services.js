import React, { useEffect } from "react";
import "./css/services.css";
import { RiEBike2Fill } from "react-icons/ri";
import { GoBroadcast } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  const data = [
    {
      icon: <GoBroadcast />,
      title: "Last Mile Deliveries",
      description:
        "Lorem Ipsum is simply dummy text of the pricing and typesetting industry.Lorem Ipsum standard dummy text.",
    },
    {
      icon: <GoBroadcast />,
      title: "Leasing Solutions",
      description:
        "Lorem Ipsum is simply dummy text of the pricing and typesetting industry.Lorem Ipsum standard dummy text.",
    },
    {
      icon: <GoBroadcast />,
      title: "Storage Facilities",
      description:
        "Lorem Ipsum is simply dummy text of the pricing and typesetting industry.Lorem Ipsum standard dummy text.",
    },
  ];
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="service_header" data-aos="zoom-in">
            <div className="common">
              <h1 heading>Our Services</h1>
              <p className="mainContent">
                Lorem Ipsum is simply dummy text of the pricing and typesetting
                industry. Lorem Ipsum standard dummy text.
              </p>
              <div className="commonBorder"></div>
              <hr class="hr hr-blurry" />
            </div>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div className="col-md-4 col-sm-12 service_box_parent">
                <div className="service_box shadow-lg Shadow-danger" data-aos="zoom-in">
                  <div className="commonIcon">{item.icon}</div>
                  <div className="service_box_header">{item.title}</div>
                  <div className="service_box_p">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="divider div-transparent "></div>
      </div>
    </>
  );
}

export default Services;

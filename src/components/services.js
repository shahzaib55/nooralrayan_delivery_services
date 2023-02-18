import React from "react";
import "./services.css";
function Services() {
  const data = [
    {
      icon: "AB",
      title: "web development",
      description:
        "Lorem Ipsum is simply dummy text of the pricing and typesetting industry.Lorem Ipsum standard dummy text.",
    },
    {
      icon: "AB",
      title: "web development",
      description:
        "Lorem Ipsum is simply dummy text of the pricing and typesetting industry.Lorem Ipsum standard dummy text.",
    },
    {
      icon: "AB",
      title: "web development",
      description:
        "Lorem Ipsum is simply dummy text of the pricing and typesetting industry.Lorem Ipsum standard dummy text.",
    },
  ];
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="service_header">
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
              <div className="col-md-4 col-sm-12">
                <div className="service_box">
                  <div className="commonIcon">{item.icon}</div>
                  <div className="service_box_header">{item.title}</div>
                  <div className="service_box_p">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

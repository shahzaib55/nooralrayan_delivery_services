import React from "react";
import img from "../assets/cover1.jpg";
import img1 from "../assets/g1.jpg";
import './css/gallery.css'
const data = [
  {
    imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
  },
  {
    imgSrc: img1,
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
  },
  
  {
    imgSrc: img1,
  },
];
function Gallery() {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="service_header" data-aos="zoom-in">
            <div className="common">
              <h1 heading>Our Gallery</h1>
              <p className="mainContent">
                Lorem Ipsum is simply dummy text of the pricing and typesetting
                industry. Lorem Ipsum standard dummy text.
              </p>
              <div className="commonBorder"></div>
              <hr class="hr hr-blurry" />
            </div>
          </div>
          {/* <div className="gallery-img">
             {
                data.map((item,i)=>(
                    <div className="pics" key={{i}}>
                        <img src={item.imgSrc} alt="image"/>
                    </div>
                ))
             }
          </div> */}
          <div class="row mt-5">
            {data.map((item, i) => (
              <div class="col-lg-4" data-aos="zoom-in">
                <div class="masonry_block">
                  <div class="masonry-folio">
                    <div class="masonry_thum" >
                      <a
                        href= {item.imgSrc}
                        class="glightbox"
                        data-gallery="edu-gallery"
                      ></a>
                      <img
                        src={item.imgSrc}
                        class="img-fluid "
                        alt="image"
                      />

                      <a
                        href={item.imgSrc}
                        data-gallery="edu-gallery"
                      ></a>

                      <a
                        href="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
                        class="glightbox"
                        data-gallery="edu-gallery"
                      ></a>
                    </div>

                    <div class="masonry_text">
                      <h3 class="masonry_title">Example Title</h3>
                      <p class="masonry_cat">Example Categories</p>
                    </div>
                  </div>
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

export default Gallery;

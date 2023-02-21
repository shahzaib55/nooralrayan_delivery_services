import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "./carousel.js";
import About from './about.js'
import Services from './services.js'
import Footer from "./footer.js";
import JoinUs from './joinus.js'
import Gallery from "./gallery.js";
import Contact from "./contact.js";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../style.css';
import img from '../assets/cover.jpg'
import { useRef, useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
function Navbar1() {
  const [loading,setloading] = useState(false);
  useEffect(() => {
    
        setloading(true)
    setTimeout(()=>{
      setloading(false)

    }, 3000)

  }, []);
  return (
    
    <>
    {
      loading ?
      <div className="container1">
        <div className="loader">
        <BounceLoader
      color={'#d66198'}
      loading={loading}
      size={50}
    />
        </div>
      
    </div>
      :
    <div className="body">
    <Navbar variant="dark" expand="lg"  className="fixed-top bar">
       <div className="container-fluid">
        <Navbar.Brand href="#home">Noor <span className="text-warning brnd">Alrayan</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="#home">Home</Nav.Link>
            <Nav.Link className="navlink" href="#about">About Us</Nav.Link>
            <Nav.Link className="navlink" href="#services">Services</Nav.Link>
            <Nav.Link className="navlink" href="#gallery">Gallery</Nav.Link>
            <Nav.Link className="navlink" href="#contact">Contact Us</Nav.Link>
            <Nav.Link className="navlink" href="#joinus">Join Us</Nav.Link>
          </Nav>
          <button className="btn btn-warning rounded-pill float-right">569881123</button>
        </Navbar.Collapse>
        </div>
        </Navbar>
        <section id="home">
        <Carousel />
        </section>
        <section id="about">
        <About />
        </section>
        <section id="services">
        <Services />
        </section>
        <section id="gallery">
        <Gallery />
        </section>
        <section id="contact">
        <Contact />
        </section>
        <section id="joinus">
        <JoinUs />
        </section>
        
        <section>
        <Footer />
        </section>
    
        </div>
}
    </>
  );
}

export default Navbar1;

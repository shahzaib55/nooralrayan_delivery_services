import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "./carsoule";
import About from './about'
import Services from './services'
import NavDropdown from "react-bootstrap/NavDropdown";
import '../style.css';
import img from '../assets/cover.jpg'
function Navbar1() {
  return (
    <>
    <Navbar variant="dark" expand="lg"  className="fixed-top bar">
       <div className="container-fluid">
        <Navbar.Brand href="#home">Noor <span className="text-warning brnd">Alrayan</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="#home">Home</Nav.Link>
            <Nav.Link className="navlink" href="#about">About Us</Nav.Link>
            <Nav.Link className="navlink" href="#services">Services</Nav.Link>
            <Nav.Link className="navlink" href="#joinus">Join Us</Nav.Link>
            <Nav.Link className="navlink" href="#gallery">Gallery</Nav.Link>
            <Nav.Link className="navlink" href="#contact">Contact Us</Nav.Link>
            <Nav.Link className="navlink" href="#contact"></Nav.Link>
          </Nav>
          <button className="btn btn-warning rounded-pill float-right">Contact Us</button>
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
    
  
    </>
  );
}

export default Navbar1;

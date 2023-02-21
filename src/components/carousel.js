import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/cover1.jpg";
import img2 from "../assets/cover4.jpg";
import img3 from "../assets/cover3.jpg";
import "./css/carr.css";
function UncontrolledExample() {
  return (
    <Carousel className="cr">
      <Carousel.Item active>
        <img className="d-block w-100 imag" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-white">
            Welcome to Noor<span className="text-warning">Alrayan</span>
          </h3>
          <p>
            Noor Alrayan is a delivery service company.We hire top class riders
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imag" src={img2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-white">
            Welcome to Noor<span className="text-warning">Alrayan</span>
          </h3>
          <p>
            Noor Alrayan is a delivery service company.We hire top class riders
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imag" src={img3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-white">
            Welcome to Noor<span className="text-warning">Alrayan</span>
          </h3>
          <p>
            Noor Alrayan is a delivery service company.We hire top class riders
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

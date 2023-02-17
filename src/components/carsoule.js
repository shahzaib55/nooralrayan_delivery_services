import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/pexel.jpg'
import './carr.css';
function UncontrolledExample() {
  return (
    <Carousel className='cr'>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={img}
          alt="First slide"
          
        />
        <Carousel.Caption>
        
            {/* <div className='col-sm'>sad</div>
            <div className='col-sm'>sad</div> */}
          <h3 className='text-white'>Welcome to Noor<span className="text-warning">Alrayan</span></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={img}
          alt="First slide"
          
        />
        <Carousel.Caption>
        
            {/* <div className='col-sm'>sad</div>
            <div className='col-sm'>sad</div> */}
          <h3 className='text-white'>Welcome to Noor<span className="text-warning">Alrayan</span></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={img}
          alt="First slide"
          
        />
        <Carousel.Caption>
        
            {/* <div className='col-sm'>sad</div>
            <div className='col-sm'>sad</div> */}
          <h3 className='text-white'>Welcome to Noor<span className="text-warning">Alrayan</span></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
        </Carousel.Caption>
      </Carousel.Item>
     
     
    </Carousel>
  );
}

export default UncontrolledExample;
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import mater1 from '../assets/img/meter1.svg'
import mater2 from '../assets/img/meter2.svg'
import mater3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
 const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <section className='skills' id='skills'>
     <Container>
      <Row>
       <Col>
       <div className="skill-bx">
        <h2>My Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, obcaecati enim atque praesentium itaque delectus numquam! Voluptatum iure, alias, nisi est obcaecati deleniti nihil voluptates ea sapiente fugiat non officiis.</p>
        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
         <div className="item">
          <img src={mater1} alt="skill-image1" />
          <h5>Web Developer</h5>
         </div>
         <div className="item">
          <img src={mater3} alt="skill-image2" />
          <h5>Web Designer</h5>
         </div>
         <div className="item">
          <img src={mater2} alt="skill-image3" />
          <h5>UI/UX Designer</h5>
         </div>
        </Carousel>
       </div>
       </Col>
      </Row>
     </Container>
     <img src={colorSharp} className='background-image-left' alt="" />
    </section>
  )
}

export default Skills
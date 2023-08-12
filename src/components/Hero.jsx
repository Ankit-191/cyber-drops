import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../assets/image/webp/welcome.webp";
import Header from "./Header";
const Hero = () => {
  return (
    <>
      <section className="position-relative hero_shadow shadow z-1">
        <Container className="d-flex flex-column min_vh_100">
          <Header />
          <Row className="align-items-center flex-grow-1 py-md-5 py-4">
            <Col lg={6}>
              <h4 className="ff_lato fw-bolder fs_7xl clr_white mb-0">
                Welcome to
                <span className="clr_brown d-sm-block"> Cyber Drops</span>
              </h4>
              <p className="ff_lato fw-normal fs_sm clr_white mt-md-4 pt-lg-1 mt-2 mb-md-5 pb-lg-2">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <button className="ff_lato fs_xsm transition fw-normal clr_white bg_brown rounded-2 explore_btn btn_hover">
                Explore Now
              </button>
            </Col>
            <Col lg={6} className="text-center mt-lg-0 mt-sm-4 mt-3">
              <img
                src={heroimg}
                alt="heroimg"
                width={410}
                className="ms-lg-5 heroimg"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;

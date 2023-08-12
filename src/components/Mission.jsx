import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mission from "../assets/image/webp/mission.webp";
import missionbg from "../assets/image/webp/missioncolorimg.webp";
const Mission = () => {
  return (
    <div>
      <section className="py-4 py-md-5 pt-xl-0 pb-xl-5 position-relative mission_shadow shadow z-1">
        <Container className="pb-xl-5">
          <Row className="align-items-center position-relative flex-column-reverse flex-lg-row justify-content-between">
            <Col
              lg={6}
              className="text-center text-lg-start mt-lg-0 mt-sm-4 mt-3"
              data-aos="fade-down-right"
              data-aos-duration="1500"
            >
              <img
                src={mission}
                alt="mission"
                width={375}
                className="heroimg"
              />
            </Col>
            <Col lg={5} data-aos="fade-down-left" data-aos-duration="1500">
              <div className="ps-">
                <h4 className="ff_lato fw-bold fs_4xl clr_white mb-0">
                  Our
                  <span className="clr_brown"> Mission</span>
                </h4>
                <p className="ff_lato fw-normal fs_sm clr_white mt-md-3 pt-lg-1 mt-2 mb-md-5 pb-lg-2">
                  We understand that one of the biggest concerns for early-stage
                  investors is that it can quickly become stressful,
                  overwhelming, and especially extremely time consuming. It
                  isn’t easy to balance a full time job, family, and an active
                  investment portfolio, especially when just starting out.
                </p>
                <button className="ff_lato fs_xsm transition fw-normal clr_white bg_brown rounded-2 explore_btn btn_hover">
                  Explore Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Mission;

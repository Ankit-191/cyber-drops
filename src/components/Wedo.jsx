import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import wedoall from "../assets/image/webp/wedoall.webp";
import wedobrown from "../assets/image/webp/wedobrown.webp";
import wedoorange from "../assets/image/webp/wedoorange.webp";
const Wedo = () => {
  return (
    <>
      <section className="py-xl-5 py-md-5 py-4 position-relative z-1 shadow wedo_shadow">
        <Container className="py-xl-3">
          <Row className="align-items-center flex-column-reverse flex-lg-row justify-content-between">
            <Col lg={6} md={9} className="mt-4 mt-lg-0 m-auto">
              <div className="wedo_grid_container">
                <div className="wedo_grid_items wedo_grid_items1">
                  <img src={wedoall} alt="wedoall" className="w-100" />
                </div>
                <div className="wedo_grid_items wedo_grid_items2">
                  <img src={wedoorange} alt="wedoorange" className="w-100" />
                </div>
                <div className="wedo_grid_items wedo_grid_items3">
                  <img src={wedobrown} alt="wedobrown" className="w-100" />
                </div>
                <div className="wedo_grid_items wedo_grid_items4">
                  <img src={wedobrown} alt="wedobrown" className="w-100" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-xl-5">
                <h4 className="ff_lato fw-bold fs_4xl clr_white">
                  What
                  <span className="clr_brown"> we do</span>
                </h4>
                <p className="ff_lato fw-normal fs_sm clr_white mt-2 pe-xl-2 me-xl-1 mb-0">
                  1000 Cyber Drops will be dropping on Ethereum in March 2022.
                  Each and every Cyber Drop is uniquely hand crafted. This is
                  just the beginning of our journey. Owning a Cyber Drop will
                  unlock monthly airdrops and future governance rights in
                  addition to our revolutionary algorithm. We strive to always
                  bring innovation and keep BUILDing. Cyber Drops is a community
                  driven project and always will be that way. That’s our
                  promise.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wedo;

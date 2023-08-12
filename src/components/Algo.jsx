import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import yellow from "../assets/image/webp/algoyellow.webp";
import algored from "../assets/image/webp/algored.webp";
import algo from "../assets/image/webp/algo.webp";
const Algo = () => {
  return (
    <>
      <section className="py-xl-5 py-md-5 py-4 position-relative z-1 shadow algo_shadow">
        <Container className="py-xl-3">
          <Row className="align-items-center justify-content-between">
            <Col lg={6} data-aos="fade-down-right"  data-aos-duration="1500">
              <h4 className="ff_lato fw-bold fs_4xl clr_white">
                Our
                <span className="clr_brown"> Algo</span>
              </h4>
              <p className="ff_lato fw-normal fs_sm clr_white mt-2 pe-xl-2 me-xl-1 mb-0">
                We have perfected our algorithm, which prioritizes a low risk
                and consistent profit stream without the need for daily
                micromanagement. While most trading algorithms can’t stand up
                against a volatile or risky market, our algorithm thrives in
                those conditions. Early-stage testers have seen a consistent
                flow of income with minimal ups and downs. Our algorithm has
                been in the works for YEARS. This has given us the time to
                rigorously backtest and release any needed hotfixes. As of early
                March 2022, we have close to a quarter of a million under direct
                management!
              </p>
            </Col>
            <Col lg={5} md={9} className="m-auto mt-4 mt-lg-0" data-aos="fade-down-left"  data-aos-duration="1500">
              <div className="grid_container">
                <div className="grid_items grid_items1 liner_border transition">
                  <img src={yellow} alt="yellow" className="w-100 border_bg p-3"/>
                </div>
                <div className="grid_items grid_items2 liner_border transition">
                    <img src={algored} alt="algored" className="w-100 border_bg p-3"/>
                </div>
                <div className="grid_items grid_items3 liner_border transition">
                    <img src={algo} alt="algo" className="w-100 border_bg p-3"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Algo;

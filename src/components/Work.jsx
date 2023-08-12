import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Work = () => {
  const Works = [
    {
      id: 1,
      number: "01",
      hading: "Mint NFT",
      para: "You must own our NFT to connect to direct management or participate in governance",
    },
    {
      id: 2,
      number: "02",
      hading: "Verify NFT Ownership",
      para: "Only Cyber Drops that are have verified are eligible to be connected under direct management",
    },
    {
      id: 3,
      number: "03",
      hading: "Link API to your account",
      para: "Only HODLers that submit their API key and secret will be under direct management",
    },
    {
      id: 4,
      number: "04",
      hading: "Passive Income for life",
      para: "As long as your HODL your Cyber Drop, you will be connected under direct management",
    },
  ];
  return (
    <>
      <section className="py-xl-5 py-md-5 py-4 position-relative z-1 work_img">
        <Container className="py-xl-3">
          <h4 className="ff_lato fw-bold fs_4xl clr_white text-center mb-0 mb-xl-2">
            How it
            <span className="clr_brown"> works</span>
          </h4>
          <Row className="mt-xl-5 justify-content-center">
            {Works.map((card) => {
              return (
                <Col
                  xsm={9}
                  sm={6}
                  lg={4}
                  xl={3}
                  key={card.id}
                  className="mt-3 mt-xl-0 px-2"
                  data-aos="flip-right" 
                  data-aos-duration="3000"
                >
                  <div className="liner_border h-100 work_card transition">
                    <div className="h-100 text-center d-flex flex-column align-items-center border_bg px-3 pt-md-5 pt-4 pb-3 transition">
                      <div className="bg_brown work_card_circle rounded-pill d-flex justify-content-center align-items-center transition">
                        <h2 className="ff_lato fw-bold fs_xl clr_white mb-0 transition">
                          {card.number}
                        </h2>
                      </div>
                      <p className="ff_lato fw-bold fs_md clr_white mt-md-4 pt-lg-2 mt-3">
                        {card.hading}
                      </p>
                      <p className="ff_lato fw-normal fs_xsm clr_white">
                        {card.para}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Work;

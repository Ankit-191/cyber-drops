import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Faqs = () => {
  return (
    <>
      <section className="py-xl-5 py-md-5 py-4 position-relative z-2 faqs_shadow shadow" data-aos="zoom-out-left" data-aos-duration="1500">
        <Container className="py-xl-3">
          <h4 className="ff_lato fw-bold fs_4xl clr_brown text-center mb-lg-5 mb-3 pb-lg-2">
            FAQ
            <span className="clr_white">’s</span>
          </h4>
          <Accordion defaultActiveKey="0">
            <div className="accordion_border">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_lato fw-normal fs_xsm clr_white mb-0">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion_border">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Ac nec enim amet, leo lorem quis neque vitae aliquet?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_lato fw-normal fs_xsm clr_white mb-0">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion_border">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                  donec?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_lato fw-normal fs_xsm clr_white mb-0">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion_border">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Porta amet tortor nec pulvinar urna. Et blandit sit id?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_lato fw-normal fs_xsm clr_white mb-0">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion_border">
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Tellus hendrerit fermentum ut hendrerit ac vestibulum?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="ff_lato fw-normal fs_xsm clr_white mb-0">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Faqs;

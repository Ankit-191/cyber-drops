import React from "react";
import { Container } from "react-bootstrap";
import playbit from "../assets/image/webp/playbit.webp";
import capital from "../assets/image/webp/capital-24.webp";
import tradinghive from "../assets/image/webp/tradinghive.webp";
import focusgroup from "../assets/image/webp/focusgroup.webp";
import Slider from "react-slick";
const Partners = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-md-5 py-4 my-xl-5 position-relative z-1 shadow partners_shadow" id="partnerssection"  data-aos-duration="1500" data-aos="zoom-out">
        <h4 className="ff_lato fw-bold fs_4xl clr_white text-center mb-0">
          Part<span className="clr_brown">ners</span>
        </h4>
        <div className="bg_partners pt-5">
          <Container>
            <div
              className="d-flex gap-4 justify-content-between align-items-center pt-5 pb-2 pb-md-5 my-sm-5 position-relative z-3 overflow-x-auto"
            >
              <div>
                <div className="border_grarient py-4 px-4">
                  <img
                    src={playbit}
                    alt="playbit"
                    width={277}
                    className="py-2 my-1 px-3 mx-1 partner_width"
                  />
                </div>
                <p className="ff_lato fw-bold fs_sm clr_black mb-0 mt-3 mt-md-4 text-center">
                  Playbit
                </p>
              </div>
              <div>
                <div className="border_grarient px-4">
                  <img
                    src={capital}
                    alt="capital"
                    width={135}
                    className="partner_width mx-3"
                  />
                </div>
                <p className="ff_lato fw-bold fs_sm clr_black mb-0 mt-3 mt-md-4 text-center">
                  24 Capital
                </p>
              </div>
              <div>
                <div className="border_grarient px-4">
                  <img
                    src={tradinghive}
                    alt="tradinghive"
                    width={137}
                    className="partner_width mx-3"
                  />
                </div>
                <p className="ff_lato fw-bold fs_sm clr_black mb-0 mt-3 mt-md-4 text-center">
                  TradingHive
                </p>
              </div>
              <div>
                <div className="border_grarient px-4 py-1">
                  <img
                    src={focusgroup}
                    alt="focusgroup"
                    width={135}
                    className="partner_width mx-3"
                  />
                </div>
                <p className="ff_lato fw-bold fs_sm clr_black mb-0 mt-3 mt-md-4 text-center">
                  Focus Group Equities
                </p>
              </div> 
            </div>
            <p className="mb-0 ff_lato fw-bold fs_sm clr_brown text-center">For business and collaborations, contact us team@cyberdrops.finance</p>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Partners;

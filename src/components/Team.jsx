import React, { useRef } from "react";
import varun from "../assets/image/webp/varun.webp";
import shubh from "../assets/image/webp/shubh.webp";
import { Dicord, Micons, Nextbtn, Perbtn, Twitter } from "./common/icons/Icons";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const Team = () => {
  const Teammap = [
    {
      id: 1,
      img: varun,
      name: "Varun Muthu",
      position: "Marketing Director",
      likedin: "https://www.linkedin.com/ in/varunmuthu1",
    },
    {
      id: 2,
      img: shubh,
      position: "Shubh Sharma",
      name: "Operations Director",
      likedin: "https://www.linkedin.com/ in/shubhsharma01/",
    },
    {
      id: 3,
      img: varun,
      name: "Varun Muthu",
      position: "Marketing Director",
      likedin: "https://www.linkedin.com/ in/varunmuthu1",
    },
    {
      id: 4,
      img: shubh,
      position: "Shubh Sharma",
      name: "Operations Director",
      likedin: "https://www.linkedin.com/ in/shubhsharma01/",
    },
  ];
  var Meetslider = {
    infinite: true,
    speed: 500, 
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderarrow = useRef();
  return (
    <>
      <section className="py-xl-5 py-md-5 py-4 team_shadow position-relative z-1 shadow" id="teamsection">
        <Container className="position-relative py-xl-3">
          <h4 className="ff_lato fw-bold fs_4xl clr_white text-center mb-lg-5 mb-3 pb-lg-2">
            Meet the
            <span className="clr_brown"> Team</span>
          </h4>
          <div
            className="position-absolute arrows_positions_next top-50 d-none d-xxl-block"
            onClick={() => sliderarrow.current.slickNext()}
          >
            <Nextbtn />
          </div>
          <div
            className="position-absolute top-50 arrows_positions_pre d-none d-xxl-block"
            onClick={() => sliderarrow.current.slickPrev()}
          >
            <Perbtn />
          </div>
          <Slider {...Meetslider} className="mt-3 pt-1" ref={sliderarrow}>
            {Teammap.map((card) => {
              return (
                <div key={card.id} className="px-sm-2 px-lg-2 px-1">
                  <div className="bg_white h-100 d-flex team_card flex-column flex-xl-row align-items-center">
                    <div className="liner_border">
                      <img
                        src={card.img}
                        alt="varun"
                        width={274}
                        className="border_bg teamimg_width"
                      />
                    </div>
                    <div className="text-center d-flex flex-column align-items-center py-4">
                      <p className="ff_lato fw-bold fs_lg clr_black mb-md-2">
                        {card.name}
                      </p>
                      <p className="ff_lato fw-medium fs_sm clr_black mb-xl-4 mb-2 pb-xl-1">
                        {card.position}
                      </p>
                      <a
                        href="#"
                        className="ff_lato fw-medium fs_sm clr_black lh-1"
                      >
                        {card.likedin}
                      </a>
                      <div className="mt-xl-4 pt-3 d-flex gap-2">
                        <a href="https://discord.com/" target="blank">
                          <Dicord />
                        </a>
                        <a
                          href="https://twitter.com/login?lang=en"
                          target="blank"
                        >
                          <Twitter />
                        </a>
                        <a href="">
                          <Micons />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Team;

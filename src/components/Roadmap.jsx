import React from "react";
import redimg from "../assets/image/png/overflowimg3.png";
const Roadmap = () => {
  return (
    <>
      <section
        className="py-xl-5 py-md-5 py-4 my-xl-3 my-xl-5 roadmap_img position-relative z-1 overflow-hidden"
        id="roadmapsection"
      >
        <h4 className="ff_lato fw-bold fs_4xl clr_white text-center mt-5 mb-0 mb-xl-5 pt-xl-4">
          Road
          <span className="clr_brown">Map</span>
        </h4>
        <div className="d-none d-lg-block">
          <img src={redimg} alt="redimg" className="position-absolute top-50 z-1"/>
        </div>
        <div className="bg_img_roadmap position-relative py-5">
          <div class="timeline py -5">
            <div class="roadmap roadmap_1 roadmap_right right">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  March 2022
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_2 roadmap_left text-md-end left">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  March 2022
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_3 roadmap_right right">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  March 2022
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  Creation of Treasury
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_4 roadmap_left text-md-end left">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  April 2022
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  Our First Airdrop
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_5 roadmap_right right">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  June 2022
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  Major Collabs
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_6 roadmap_left text-md-end left">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  Sometime in Q3
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  Cyber Celebs come on Ethereum
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_7 roadmap_right right">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  Sometime in Q3
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  Streetwear + Merch
                </p>
              </div>
            </div>
            <div class="roadmap roadmap_8 roadmap_left text-md-end left">
              <div class="content">
                <h2 className="ff_lato fw-semibold fs_lg clr_white">
                  Sometime in Q4
                </h2>
                <p className="ff_lato fw-normal fs_xsm clr_white">
                  Enhanced Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;

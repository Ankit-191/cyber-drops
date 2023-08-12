import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/image/webp/cyber-drops.webp";
import simply from "../assets/image/webp/simpleicons.webp";
import discord from "../assets/image/webp/discord.webp";
import twitter from "../assets/image/webp/twitter.webp";
import micon from "../assets/image/webp/micon.webp";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="py-1">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <img
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="logo"
            />
            <div onClick={showUl} className="z_30">
              <h3 className="d-lg-none clr_white fs_3xl">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
            <div
              className={`d-flex flex-column flex-lg-row nav_gap_20 align-items-center justify-content-center phone ${
                head ? "" : "left_0 text-center clip_path"
              }`}
            >
              <ul className="p-2 mb-0 d-flex flex-column flex-lg-row align-items-center nav_gap_20">
                <li className="nav_hvoer">
                  <span className="ff_lato fs_xsm transition fw-normal clr_white">
                    Home
                  </span>
                </li>
                <li className="nav_hvoer">
                  <span className="ff_lato fs_xsm transition fw-normal clr_white">
                    About
                  </span>
                </li>
                <li className="nav_hvoer">
                  <a
                    href="#teamsection"
                    className="ff_lato fs_xsm transition fw-normal clr_white"
                  >
                    Team
                  </a>
                </li>
                <li className="nav_hvoer">
                  <a
                    href="#roadmapsection"
                    className="ff_lato fs_xsm transition fw-normal clr_white"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="nav_hvoer">
                  <a
                    href="#partnerssection"
                    className="ff_lato fs_xsm transition fw-normal clr_white"
                  >
                    Partners
                  </a>
                </li>
              </ul>
              <div className="d-flex gap-2">
                <div className="icons_hover position-relative z-1">
                  <img src={simply} alt="simply" width={30} height={30} />
                </div>

                <div className="icons_hover position-relative z-1">
                  <img src={discord} alt="discord" width={30} height={30} />
                </div>
                <div className="icons_hover position-relative z-1">
                  <img src={twitter} alt="twitter" width={30} height={30} />
                </div>
                <div className="icons_hover position-relative z-1">
                  <img src={micon} alt="micon" width={30} height={30} />
                </div>
              </div>
              <button className="ff_lato fs_xsm transition fw-normal clr_white bg_brown rounded-2 connect_wallet_btn mt-2 mt-lg-0 btn_hover">
                Connect Wallet
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;

import React from "react";
import simply from "../assets/image/webp/simpleicons.webp";
import discord from "../assets/image/webp/discord.webp";
import twitter from "../assets/image/webp/twitter.webp";
import micon from "../assets/image/webp/micon.webp";
import footerimg from "../assets/image/webp/welcome.webp";
const Footer = () => {
  return (
    <>
      <section className="pt-xl-5 pt-md-5 pt-4 mt-xl-5 position-relative z-1 footer_shadow shadow">
        <div className="d-flex flex-column align-items-center">
          <img src={footerimg} alt="footerimg" width={151} />
          <h5 className="ff_lato fw-semibold fs_3xl clr_brown my-2">
            Cyber Drops
          </h5>
          <p className="ff_lato fw-normal fs_xsm clr_white text-center">
            Viverra metus viverra rhoncus eget quam suspendisse diam
            <span className="d-sm-block">
              amet, nisl. Mattis maecenas libero lacinia accumsan amet.
            </span>
          </p>
          <div className="d-flex gap-2 icons_hover mt-2">
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
        </div>
        <hr className=" clr_white opacity-50 mb-0 mt-3 pt-1" />
        <p className="ff_lato fw-normal fs_xsm clr_white opacity-50 text-center mb-0 py-3">
          Copyright By 2022
        </p>
      </section>
    </>
  );
};

export default Footer;

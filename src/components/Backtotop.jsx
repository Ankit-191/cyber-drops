import React, { useState } from "react";
import { Next } from "react-bootstrap/esm/PageItem";
import { Nextbtn } from "./common/icons/Icons";

const Backtotop = () => {
  const [backTop, setBackTop] = useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <span
            onClick={moveToTop}
            className="top_animtion position-fixed z-3 bottom-0 end-0 me-4 mb-4 rounded-circle"
          >
            <svg
            className="transform_topbtn transition"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M30.0001 5.00009C16.2151 5.00009 5.00012 16.2151 5.00012 30.0001C5.00012 43.7851 16.2151 55.0001 30.0001 55.0001C43.7851 55.0001 55.0001 43.7851 55.0001 30.0001C55.0001 16.2151 43.7851 5.00009 30.0001 5.00009ZM30.0001 50.0001C18.9726 50.0001 10.0001 41.0276 10.0001 30.0001C10.0001 18.9726 18.9726 10.0001 30.0001 10.0001C41.0276 10.0001 50.0001 18.9726 50.0001 30.0001C50.0001 41.0276 41.0276 50.0001 30.0001 50.0001Z"
                fill="#F1AC73"
              />
              <path
                d="M23.2324 19.2674L33.9649 29.9999L23.2324 40.7324L26.7674 44.2674L41.0349 29.9999L26.7674 15.7324L23.2324 19.2674Z"
                fill="#F1AC73"
              />
            </svg>
          </span>
        ) : (
          ""
        )}
        <span></span>
      </div>
    </>
  );
};

export default Backtotop;

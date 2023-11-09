import React from "react";
import loaderImg from "../../assets/loader2.gif";
import ReactDOM from "react-dom";
import "./Loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
      <img src={loaderImg} alt="Loading..." style={{ width: '100px' }} />

      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="Loading..." style={{ width: '100px' }} />

    </div>
  );
};

export default Loader;

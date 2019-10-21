import React from "react";
import { Link } from "react-router-dom";
import leftarrow from "../../../assets/images/arrow-left.svg";

const BackButton = () => (
  <Link to="/" className="c-back__button">
    <img src={leftarrow} alt="back button" className="c-back-button__image" />
  </Link>
);

export default BackButton;

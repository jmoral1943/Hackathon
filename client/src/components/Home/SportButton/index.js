import React from "react";
import { Link } from "react-router-dom";
import * as actionTypes from "../../../store/reducer";

const SportButton = props => {
  return (
    <Link
      to="/teamorplayer"
      style={{ backgroundColor: props.color }}
      className="c-sportbutton__button"
    >
      {props.organization}
    </Link>
  );
};

export default SportButton;

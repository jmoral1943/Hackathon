import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionTypes from "../../../store/actions";

const SportButton = props => {
  return (
    <Link
      to="/teamorplayer"
      style={{ backgroundColor: props.color }}
      className="c-sportbutton__button"
      onClick={() => props.loadSport(props.sport)}
    >
      {props.organization}
    </Link>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadSport: data => dispatch({ type: actionTypes.LOADSPORT, data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SportButton);

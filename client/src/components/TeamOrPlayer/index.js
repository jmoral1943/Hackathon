import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import teamPicture from "../../assets/images/team.jpeg";
import playerPicture from "../../assets/images/player.jpeg";
import BackButton from "../Layout/Backbutton";
import * as actionTypes from "../../store/actions";

const TeamOrPlayer = (props) => {
  return (
    <main>

      <BackButton />
      <div className="c-team">
        <Link to="/catalog" onClick={() => props.loadType("team")}>
          <h2 className="c-team__heading">Team</h2>
          <img src={teamPicture} alt="Team huddle" className="c-team__image" />
        </Link>
      </div>
      <div className="c-player">
        <Link to="/catalog" onClick={() => props.loadType("player")}>
          <h2 className="c-player__heading">Player</h2>
          <img
            src={playerPicture}
            alt="Player pratitcing"
            className="c-player__image"
          />
        </Link>
      </div>
     </div>
    </main>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadType: data => dispatch({ type: actionTypes.LOADTYPE, data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TeamOrPlayer);

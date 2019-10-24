import React from "react";
import { Link } from "react-router-dom";

import teamPicture from "../../assets/images/team.jpeg";
import playerPicture from "../../assets/images/player.jpeg";
import BackButton from "../Layout/Backbutton";

const TeamOrPlayer = () => {
  return (
    <main>
     <BackButton />
     <div className="c-team-player">
      <div className="c-team">
        <Link to="/catalog">
          <h2 className="c-team__heading">Team</h2>
          <img src={teamPicture} alt="Team huddle" className="c-team__image" />
        </Link>
      </div>
      <div className="c-player">
        <Link to="/catalog">
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

export default TeamOrPlayer;

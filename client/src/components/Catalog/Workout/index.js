import React from "react";

const Workout = props => {
  return (
    <div className="c-workout">
      <img src={props.icon_url} alt={props.name} className="c-workout__icon" />
      <div>
        <p className="c-workout-name">{props.name}</p>
        <div className="c-workout__sets-reps">
          {props.reps && <p className="c-workout__reps">{props.reps}</p>}
          {props.duration && <p className="c-workout__duration">{props.duration}</p>}
          <p className="c-workout__sets">{props.sets}</p>
        </div>
      </div>
    </div>
  );
};

export default Workout;

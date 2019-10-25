import React from "react";
import BackButton from "../Layout/Backbutton"

const WorkoutDetails = (props) => {
  return (
    <main className="c-workout__details">
      <BackButton />
      <div className="c-workout-details__content">
        
        <div className="c-worjout-details__titles">
          <h1 className="c-workout-details__title"> Around the World </h1>
          <h2 className="c-workout-details__subtitle">Team Passing Drill</h2>
        </div>

        <div className="c-workout-details__video">
          <iframe width="356" height="200" src="https://www.youtube.com/embed/BpjqTnYZZU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        
        <p className="c-workout-details__description"> 
          Around the World is a basketball game that tests your accuracy and precision when shooting. Each player must make a series of shots in a row in order to win. Miss two shots, however, and you need to start over. Whether it's for practice or for a little friendly competition, Around the World separates the good shooters from the great.
        </p>

        <div className="c-workout-details__time">
          <p>Sets:</p>
          <p>Reps:</p>
          <p>Duration:</p>
        </div>

      </div>
    </main>
  );
};

export default WorkoutDetails;

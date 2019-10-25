import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Backbutton from "../Layout/Backbutton";
import * as actionTypes from "../../store/actions";
import lifeHoopsLogo from "../../assets/images/lifehoops.png";
import Workout from "./Workout";
import Filter from "./Filter";

const Catalog = props => {
  useEffect(() => {
    let url = `/workout/${props.sport}/${props.type}`;
    axios.get(url).then(({ data }) => props.loadWorkouts(data));
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    let url = `/workout/${props.sport}/categories`;
    axios.get(url).then(({ data }) => props.loadcategories(data));
  }, []);

  return (
    <div>
      <Backbutton />
      <img
        src={lifeHoopsLogo}
        alt="Life hoops logo"
        className="c-catalog__logo"
      />
      <div className="c-filter">
        {props.categories.map(category => (
          <Filter name={category.name} icon_url={category.icon_url} />
        ))}
      </div>

      <main className="c-catalog__workouts">
        {props.workouts.map(workout => (
          <Workout
            name={workout.name}
            icon_url={workout.icon_url}
            reps={workout.reps}
            duration={workout.duration}
            sets={workout.sets}
            key={workout._id}
          />
        ))}
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    sport: state.sport,
    type: state.type,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadWorkouts: data => dispatch({ type: actionTypes.LOADWORKOUTS, data }),
    loadcategories: data => dispatch({ type: actionTypes.LOADCATEGORY, data })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);

import React from "react";

const Filter = (props) => {
  return (
    <div className="c-filter__content">
      <img
        src={props.icon_url}
        alt={props.name}
        className="c-filter__image"
      />
      <div className="c-filter__name">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Filter;

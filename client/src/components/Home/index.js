import React, { useState, useEffect } from "react";
import axios from "axios";
import SportButton from "./SportButton";

const Home = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    axios.get("/sports").then(({ data }) => {
      return setSports(data);
    });
  }, []);
  return (
    <main className="c-home">
      <div className="c-home__round">
        <p className="c-home__logo">
          <span>LIFE</span> SPORTS
        </p>
      </div>
      {sports.map(sport => (
        <SportButton
          organization={sport.organization}
          color={sport.color}
          name={sport.name}
          key={sport.organization}
        />
      ))}
    </main>
  );
};

export default Home;

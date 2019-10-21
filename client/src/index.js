import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./assets/styles/styles.scss";
import Home from "./components/Home";
import TeamOrPlayer from "./components/TeamOrPlayer";
import Catalog from "./components/Catalog";
import Workout from "./components/Catalog/Workout";

import reducer from './store/reducer'
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teamorplayer" component={TeamOrPlayer} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/workout" component={Workout} />
    </Switch>
  </Router>
);

ReactDOM.render(<Provider store={store}>{Routing}</Provider>, document.getElementById("root"));

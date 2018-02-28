import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  NavLink
} from "react-router-dom";

import MonsterGrid from "components/Views/MonsterGrid";
import MonsterDetailsView from "components/Views/MonsterDetailsView";
import MaterialsView from "components/Views/MaterialsView";
import Sidebar from "components/shared/Sidebar";

import logo from "./logo.svg";
import "./App.css";

const Nav = ({ children }) => (
  <Router>
    <div className="router-header">
      <ul className="router-header__nav-items">
        <li className="router-header__nav-items__item">
          <NavLink to="/monsters">All Monsters</NavLink>
        </li>
        <li className="router-header__nav-items__item">
          <NavLink to="/materials">Materials</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Redirect exact from="/" to="/monsters" />
        <Route path="/monsters" component={MonsterGrid} />
        <Route path="/monster/:name" component={MonsterDetailsView} />
        <Route path="/materials" component={MaterialsView} />
      </Switch>
    </div>
  </Router>
);
class ErrorBoundary extends React.Component {
  state = { error: null };

  componentDidCatch(error, info) {
    this.setState({ error: { error, info } });
  }

  render() {
    return !!this.state.error ? (
      <div>
        <p>Oh no! Error :(</p>
        <code>{JSON.stringify(this.state.error)}</code>
      </div>
    ) : (
      this.props.children
    );
  }
}

const App = (
  <ErrorBoundary>
    <Nav />
  </ErrorBoundary>
);

console.log({ App });

export default Nav;

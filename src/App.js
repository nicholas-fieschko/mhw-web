import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MonsterGrid from "components/Views/MonsterGrid";
import MonsterDetailsView from "components/Views/MonsterDetailsView";
import MaterialsView from "components/Views/MaterialsView";
import Sidebar from "components/shared/Sidebar";

class App extends React.Component {
  state = {
    view: "MonsterGrid"
  };

  // move nav stuff to own component, add redux to proj
  renderNavIem = viewName => (
    <a onClick={() => this.setState({ view: viewName })}>{viewName}</a>
  );

  renderNavItems = viewNames => (
    <ul className="app-root__nav-items">
      {viewNames.map(viewName => (
        <li className="app-root__nav-items__item">
          {this.renderNavIem(viewName)}
        </li>
      ))}
    </ul>
  );

  render() {
    const views = {
      MonsterGrid: <MonsterGrid />,
      MonsterDetailsView: <MonsterDetailsView />,
      MaterialsView: <MaterialsView />,
      Sidebar: <Sidebar />
    };
    return (
      <div id="app-root">
        {this.renderNavItems(Object.keys(views))}
        {views[this.state.view]}
      </div>
    );
  }
}

export default App;

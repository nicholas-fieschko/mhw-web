import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import { StackNavigator } from "react-navigation";
import MonsterGrid from "components/Views/MonsterGrid";
import MonsterDetailsView from "components/Views/MonsterDetailsView";
import MaterialsView from "components/Views/MaterialsView";
import Sidebar from "components/shared/Sidebar";

// const RootStack = StackNavigator(
//   {
//     MonsterList: { screen: MonsterGrid },
//     MonsterDetail: { screen: MonsterDetailsView },
//     Materials: { screen: MaterialsView },
//     Sidebar: { screen: Sidebar }
//   },
//   {
//     initialRouteName: "MonsterList"
//     // initialRouteName: 'Materials',
//   }
// );

class App extends React.Component {
  state = {
    view: "MonsterGrid"
  };

  // move nav stuff to own component, add redux to proj
  renderNavIem = viewName => (
    <a onClick={() => this.setState({ view: viewName })}>{viewName}</a>
  );

  renderNavItems = viewNames => (
    <li>{viewNames.map(viewName => <ul>{this.renderNavIem(viewName)}</ul>)}</li>
  );

  render() {
    const views = {
      MonsterGrid: <MonsterGrid />,
      MonsterDetailsView: <MonsterDetailsView />,
      MaterialsView: <MaterialsView />,
      Sidebar: <Sidebar />
    };
    return (
      <div>
        {this.renderNavItems(Object.keys(views))}
        {views[this.state.view]}
      </div>
    );
  }
}

export default App;

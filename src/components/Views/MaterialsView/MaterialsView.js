import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  div,
  span,
  FlatList,
  TouchableHighlight
} from "react-native";
import Materials from "data/materials";
import './materialsView.css';

export default class MaterialsView extends React.Component {
  renderMaterialRow = material => {
    console.log({ material });
    debugger;
    return (
      <div
        className="materials-container__material"
        key={`${material.name} - ${material.rarity} - ${material.location}`}
      >
        <div className="materials-container__material__name">
          {material.name}
        </div>
        <div className="materials-container__material__location">
          {material.location}
        </div>
        <div className="materials-container__material__rarity">
          {material.rarity}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="materials-container">
        {Materials.map(this.renderMaterialRow)}
      </div >
    );
  }
}
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

export default class MaterialsView extends React.Component {
  renderMaterialRow = material => {
    console.log({ material });
    debugger;
    return (
      <div
        style={styles.material}
        key={`${material.name} - ${material.rarity} - ${material.location}`}
      >
        <span>{`${material.name} - ${material.rarity} - ${
          material.location
        }`}</span>
      </div>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.listViewContainer}>
        {Materials.map(this.renderMaterialRow)}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 0,
    marginTop: 0
  },
  listViewContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  material: {
    alignSelf: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
    height: 50
  }
};

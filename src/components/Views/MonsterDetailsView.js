import React, { Component } from "react";
import Monster from "components/shared/Monster";
import ErrorView from "components/Views/ErrorView";
import MonsterWeaknesses from "data/monster-weaknesses";
import { MonsterNameDictionary } from "repos/monsters";
import makeLogger from "debug";

const log = makeLogger("component:MonsterDetailsView");

export default class MonsterDetailsView extends Component {
  constructor(props) {
    super(props);
    const { name } = props.match.params;
    log("MonsterDetailsView constructor props, MonsterNameDictionary", { props, MonsterNameDictionary });
    const monsterData = MonsterNameDictionary[name];
    this.state = {
      monsterData,
      weaknesses: MonsterWeaknesses[name]
    };
  }

  WeaknessRating = ({ elementName, starCount, style }) => {
    const stars = Array(starCount)
      .fill("⭐")
      .join("");

    return <span style={style}>{`${elementName}: ${stars}`}</span>;
  };

  render() {
    const { monsterData: { image, name }, weaknesses } = this.state;

    const elementsList = Object.keys(weaknesses).sort(
      (a, b) => weaknesses[a] < weaknesses[b]
    );

    return (
      <div style={styles.container}>
        <span style={styles.name}>{name}</span>
        <Monster image={image} style={styles.monsterIcon} />
        {elementsList.map(elementName => (
          <this.WeaknessRating
            elementName={elementName}
            starCount={weaknesses[elementName]}
            style={styles.weaknessText}
            key={`weakness-${elementName}`}
          />
        ))}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  monsterIcon: {
    margin: 30,
    width: 250,
    height: 250,
    backgroundColor: "white"
  },
  weaknessText: {
    fontSize: "2rem",
    fontWeight: "bold"
  },
  name: {
    fontSize: "5rem",
    fontWeight: "bold",
    marginTop: 5
  }
};

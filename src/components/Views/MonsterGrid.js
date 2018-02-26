import React from "react";
import PropTypes from "prop-types";
import Monster from "components/shared/Monster";
import { getAllSortedMonsterData } from "repos/monsters";
import Sidebar from "components/shared/Sidebar";
import makeLogger from "debug";

const log = makeLogger("component:MonsterGrid");

const styles = {
  listViewContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  elementSortPicker: {
    flexBasis: 50
  },
  elementSortPicker: {
    marginTop: 0,
    paddingTop: 0,
    flexBasis: 50
  },
  "monster-icon__container": {
    flexBasis: "20%"
  }
};

export default class MonsterGrid extends React.Component {
  constructor(props) {
    super(props);
    const monsterData = getAllSortedMonsterData();
    // log(`in constructor, monsterData: `, { monsterData });
    this.state = {
      sortElement: null,
      monsterData
    };
  }

  renderMonster = monster => {
    log(`in renderMonster, given: `, { monster });
    if (!monster) return null;
    return (
      <a
        className="monster-icon__container"
        style={styles["monster-icon__container"]}
        onPress={this.openMonsterDetail(monster)}
      >
        <Monster image={monster.image} name={monster.name} key={monster.key} />
      </a>
    );
  };

  openMonsterDetail(monster) {
    return () => this.props.navigation.navigate("MonsterDetail", { monster });
  }

  handlePickerValueChange = selectedElement => {
    const sortField =
      selectedElement === "Pls choose" ? undefined : selectedElement;
    const monsterData = getAllSortedMonsterData(sortField);
    log("state.monsterData before picker change", {
      state: this.state.monsterData
    });
    const sectionedMonsterData = this.createSectionedList(
      monsterData,
      sortField,
      this.weaknessLevelString
    );
    log("handlePickerValueChange", { sectionedMonsterData });
    this.setState({
      sortElement: selectedElement,
      monsterData: sectionedMonsterData
    });
  };

  weaknessLevelString = weaknessLevel =>
    Array(weaknessLevel)
      .fill("+")
      .join("");

  createSectionedList = (sortedData = [], sortField, getTitle = val => val) => {
    const sectionDict = {};
    for (let i = 0; i < sortedData.length; i++) {
      const elementToCategorize = sortedData[i];
      const fieldValue = elementToCategorize[sortField];
      //log({ sectionDict });

      if (!(fieldValue in sectionDict))
        sectionDict[fieldValue] = [elementToCategorize];
      else sectionDict[fieldValue].push(elementToCategorize);
    }
    const descendingOrder = (a, b) => b - a;
    const sortedElements = Object.keys(sectionDict).sort(descendingOrder);
    const sectionedList = sortedElements.map(fieldValue => ({
      title: getTitle(fieldValue),
      data: sectionDict[fieldValue]
    }));
    log("returning from createSectionedList with list:", { sectionedList });
    return sectionedList;
  };

  renderSectionHeader = ({ section }) => {
    return null;
    // log('in renderSectionHeader, received: ', { section });
    // if(!section) return null;
    // debugger;
    // const data = section.data ? data : section;
    // const firstMonster = data & data.length ? data[0] : {};
    // const { sortElement } = this.state;
    // const weaknessToCurrentSort =
    //   sortElement && sortElement in firstMonster
    //     ? firstMonster[sortElement]
    //     : undefined;
    // return weaknessToCurrentSort ? (
    //   <div style={styles.container}>
    //     <span>{`${weaknessToCurrentSort}`} </span>
    //   </div>
    // ) : (
    //   <div style={styles.container}>
    //     <span>No Header</span>
    //   </div>
    // );
  };

  openSidebar = () => this.props.navigation.navigate("Sidebar");

  render() {
    const { monsterData } = this.state;

    const sectionedMonsterData = this.createSectionedList(monsterData);
    log({ sectionedMonsterData });

    return (
      <div
        className="monster-grid__container"
        style={{ ...styles.container, ...styles.listViewContainer }}
      >
        {/* <Picker
          selectedValue={this.state.sortElement}
          onValueChange={this.handlePickerValueChange}
          style={styles.elementSortPicker}
        >
          <Picker.Item label="Pls choose" value="Pls choose" />
          <Picker.Item label="Fire" value="Fire" />
          <Picker.Item label="Water" value="Water" />
          <Picker.Item label="Thunder" value="Thunder" />
          <Picker.Item label="Ice" value="Ice" />
          <Picker.Item label="Dragon" value="Dragon" />
          <Picker.Item label="Poison" value="Poison" />
          <Picker.Item label="Sleep" value="Sleep" />
          <Picker.Item label="Paralysis" value="Paralysis" />
          <Picker.Item label="Blast" value="Blast" />
          <Picker.Item label="Stun" value="Stun" />
        </Picker> */}
        {sectionedMonsterData &&
          sectionedMonsterData.length &&
          sectionedMonsterData.map(section => {
            log("in sectionedMonsterData.map for main grid render, given", {
              section
            });
            const { data: monsterList = [] } = section || {};
            log("extracted data key for monster list", { monsterList });
            return monsterList.map(monster => {
              log(`rendering monster ${monster && monster.name}`, {
                monster
              });
              return this.renderMonster(monster);
            });
          })}
      </div>
    );
  }
}

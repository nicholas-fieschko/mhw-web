import React from "react";

const Sidebar = ({ children, navigation }) => {
  const goTo = routeName => () => navigation.navigate(routeName);
  const menu = (
    <div style={styles.container}>
      <a href="#" style={styles.menuItem} onPress={goTo("MonsterGrid")}>
        <span>Monster Grid</span>
      </a>
      <a href="#" style={styles.menuItem} onPress={goTo("Materials")}>
        <span>Materials</span>
      </a>
    </div>
  );

  return (
    <div style={styles.container}>
      {menu}
      {children}
    </div>
  );
};

export default Sidebar;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  menuItem: {
    margin: 15,
    padding: 15,
    flexBasis: 2
  }
};

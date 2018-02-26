import React from "react";

function Monster({ name, image, style, ...restProps }) {
  return (
    <div className="monster-icon__container" style={styles["monster-icon__container"]}>
      <img
        src={image}
        style={{ ...styles.monsterIcon, ...style }}
        {...restProps}
      />
    </div>
  );
}

const styles = {
  monsterIcon: {
    margin: 10,
    maxWidth: "100%"
  },
  "monster-icon__container": {
    flexBasis: '30%',
  }
};

export default Monster;

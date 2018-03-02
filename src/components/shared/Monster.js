import React from "react";

function Monster({ image, style, ...restProps }) {
  return (
    <img
      src={image}
      style={{ ...styles.monsterIcon, ...style }}
      {...restProps}
    />
  );
}

const styles = {
  monsterIcon: {
    // margin: 10,
    maxWidth: "100%",
    maxHeight: "20rem"
  }
};

export default Monster;

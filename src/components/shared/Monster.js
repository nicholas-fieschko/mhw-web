import React from "react";

function Monster({ name, image, style, ...restProps }) {
  return (
    <img src={image} style={[styles.monsterIcon, style]} {...restProps} />
  );
}

const styles = {
  monsterIcon: {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: "white"
  }
};

export default Monster;

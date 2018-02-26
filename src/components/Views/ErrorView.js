import React from "react";

const ErrorView = ({ message }) => (
  <div style={styles.container}>
    <span>Error: {message} </span>
  </div>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
};

export default ErrorView;

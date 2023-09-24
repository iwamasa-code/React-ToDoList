import React from "react";

const ColorfullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfullMessage;

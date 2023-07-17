import React from "react";

const MyParagraph = (props) => {
  console.log("MyPARagraph Run");
  return <p>{props.children}</p>;
};

export default MyParagraph;

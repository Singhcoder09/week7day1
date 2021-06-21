import React from "react";
import Tree from "./Tree";
import data from "./data";

const TreeApp = () => {
  return <Tree data={data} width={600} height={500} />;
};

export default TreeApp;

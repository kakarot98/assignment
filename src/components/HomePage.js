import React from "react";
import { DynamicRenderer } from "../handlers/DynamicRenderer";

const HomePage = ({ component, componentProps = {} }) => {
  const Rendered = DynamicRenderer(component);

  return <Rendered {...componentProps} />;
};

export default HomePage;

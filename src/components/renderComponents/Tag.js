import React from "react";

const Tag = ({ children, tag, className }) => {
  const Element = React.createElement(tag, { className }, children);

  return Element;
};

export default Tag;

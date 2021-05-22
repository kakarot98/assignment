import React from "react";
import { DynamicRenderer } from "../../handlers/DynamicRenderer";

const Col = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children &&
        children.map((c, k) => {
          const Component = DynamicRenderer(c.component);

          return <Component key={k} {...c.props} />;
        })}
    </div>
  );
};

export default Col;

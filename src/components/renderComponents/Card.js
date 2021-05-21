import React from "react";
import { DynamicRenderer } from "../../handlers/DynamicRenderer";

const Card = ({ children, title, link, text, ...props }) => {
  return (
    <div {...props}>
      <a href={link}>{title}</a>
      {text && <p>{text}</p>}
      {children &&
        children.map((c, k) => {
          const Component = DynamicRenderer(c.component);

          return <Component key={k} {...c.props} />;
        })}
    </div>
  );
};

export default Card;

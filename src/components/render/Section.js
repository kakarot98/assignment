import React from "react";
import { DynamicRenderer } from "../../handlers/DynamicRenderer";

const Section = ({ children, h2 = null, text = null, ...props }) => {
  return (
    <section {...props}>
      {h2 && <h2 className="section-title">{h2}</h2>}
      {text && <p className="section-text">{text}</p>}
      {children &&
        children.map((c, k) => {
          const Component = DynamicRenderer(c.component);

          return <Component key={k} {...c.props} />;
        })}
    </section>
  );
};

export default Section;

import React from "react";
import path from "path";
import Section from "../components/render/Section";

const mapKeys = {
  Section: {
    key: "Section",
    path: "Section",
  },
  Col: {
    key: "Col",
    path: "Col",
  },
  Row: {
    key: "Row",
    path: "Row",
  },
  Tag: {
    key: "Tag",
    path: "Tag",
  },
  Card: {
    key: "Card",
    path: "Card",
  },
  Markdown: {
    key: "Markdown",
    path: "Markdown",
  },
};

export const DynamicRenderer = (componentKey) => {
  if (typeof mapKeys[componentKey] === "object") {
    const RenderComponent = React.lazy(() =>
      import(`../components/render/${mapKeys[componentKey].path}`)
    );

    return RenderComponent;
  }

  return null;
};

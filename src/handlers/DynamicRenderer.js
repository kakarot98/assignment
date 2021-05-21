import React from "react";

const mapKeys = {
  Section: {
    key: "Section",
    path: "../components/renderComponents/Section"
  },
  Col: {
    key: "Col",
    path: "../components/renderComponents/Col"
  },
  Row: {
    key: "Row",
    path: "../components/renderComponents/Row"
  },
  Tag: {
    key: "Tag",
    path: "../components/renderComponents/Tag"
  },
  Card: {
    key: "Card",
    path: "../components/renderComponents/Card"
  },
  Markdown: {
    key: "Markdown",
    path: "../components/renderComponents/Markdown"
  }
};

export const DynamicRenderer = (component) => {
  if (typeof mapKeys[component] === "object") {
    const RenderComponent = React.lazy(() => import(mapKeys[component].path));

    return RenderComponent;
  }

  return null;
};

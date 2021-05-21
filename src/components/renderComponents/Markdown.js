import React from "react";
import { useMarkdown } from "../../hooks/markdown";

const Markdown = ({ text }) => {
  const { content } = useMarkdown(text);

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default Markdown;

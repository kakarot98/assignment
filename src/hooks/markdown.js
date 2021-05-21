import React, { useEffect, useRef, useState } from "react";
import snarkdown from "snarkdown";

export const useMarkdown = (text = null) => {
  const subscribed = useRef(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    subscribed.current = true;

    return () => (subscribed.current = false);
  }, []);

  useEffect(() => {
    const _content = snarkdown(text);

    if (subscribed.current) setContent(_content);
  }, [text]);

  return { content };
};

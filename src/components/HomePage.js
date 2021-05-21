import React, { useEffect } from "react";
import Card from "./renderComponents/Card";
import Col from "./renderComponents/Col";
import Row from "./renderComponents/Row";
import Section from "./renderComponents/Section";
import Tag from "./renderComponents/Tag";


const mapKeys = {
    section: Section,
    col: Col,
    row: Row,
    tag: Tag,
    card: Card,
  };



const HomePage = (data) => {
  useEffect(() => {
    console.log(data)
    return () => {
      
    }
  }, [])

  if (typeof mapKeys[data.component] !== "undefined") {
    return React.createElement(mapKeys[data.component]);
  }

  
};

export default HomePage;

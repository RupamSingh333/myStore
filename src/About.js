import React from "react";
import  HeroSection  from "./components/HeroSection";

const About = () => {
  const data ={
    title:"About Us",
    name: "Bhawani Electronics.",
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente sit amet consectetur adipisicing elit Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi!.'
  };
  return<HeroSection myData={data} />;
};

export default About;

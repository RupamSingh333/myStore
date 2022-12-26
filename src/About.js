import React from "react";
import  HeroSection  from "./components/HeroSection";

const About = () => {
  const data ={
    title:"About Us",
    name: "Bhawani Electronics.",
    paragraph:`In 1991, Bhawani Electronics was established as small firm with an objective to engrave its image into the business world with its hi-profile business ethics. With its consistent vision and mission of providing customers with everything they want to know about electronics and ensuring that they are making their best buying decisions, it has now become Bihar’s Number One Electronics store with its highly convenient showrooms.
    Catering to guests of all budgets and preferences, our prolific owners Mr Jitendra Singh and Mr. Sanjay Singh with a proficient team of skilled and knowledgeable employees stay directly in contact with our associate suppliers to deliver best quality products and information to our customers.    
    Our perpetual mission is to constantly increase our reach by implementing best business practices of providing superior customer service, delivering high quality cum exceptional products at right prices and in the process become the first choice of every customer we serve.Bhawani Electronics believes that we are successful only when our customers are happy. Our mission is to set the highest possible standards in our services, reliability and integrity in this industry.`
  };  
  return<HeroSection myData={data} />;
};

export default About;

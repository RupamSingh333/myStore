import HeroSection from "./components/HeroSection"
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    title:"Welcome To",
    name: "Bhawani Electronics.",
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.'
  }
  return(
  <>
    <HeroSection myData={data} />
    <Services />
    <Trusted />
  </>
  );
};

export default Home;

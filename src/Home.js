import HeroSection from "./components/HeroSection"
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts  from "./components/FeatureProducts";

const Home = () => {
  const data = {
    title:"Welcome To",
    name: "Bhawani Electronics.",
    paragraph:'Bhawani Electronics Mirganj believes that we are successful only when our customers are happy. Our mission is to set the highest possible standards in our services, reliability and integrity in this industry.'
  }
  return(
  <>
    <HeroSection myData={data} />
    <FeatureProducts/>
    <Services />
    <Trusted />
  </>
  );
};

export default Home;

import Navbar from "../common/Navbar";
import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";
import Values from "../components/home/Values";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Values />
    </>
  );
};

export default Home;

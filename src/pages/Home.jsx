import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Ready from "../components/home/Ready";
import Services from "../components/home/Services";
import Values from "../components/home/Values";
import Bubbles from "../common/Bubbles";
import MotionWrapper from "../components/MotionWrapper";

const Home = () => {
  return (
    <>
      <Navbar />
      <Bubbles />
      <MotionWrapper>
        <Banner />
      </MotionWrapper>
      <MotionWrapper>
        <Services />
      </MotionWrapper>
      <MotionWrapper delay={0.2}>
        <About />
      </MotionWrapper>
      <MotionWrapper delay={0.3}>
        <Values />
      </MotionWrapper>
      <MotionWrapper delay={0.4}>
        <Ready />
      </MotionWrapper>
      <MotionWrapper delay={0.5}>
        <Footer />
      </MotionWrapper>
    </>
  );
};

export default Home;

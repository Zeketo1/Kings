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
    <div className="flex over flex-col items-center">
      <div className="w-full sm:w-[90%] 2xl:w-[80%] 3xl:w-[70%]">
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
        <div className="value__gradient">
          <MotionWrapper delay={0.3}>
            <Values />
          </MotionWrapper>
          <MotionWrapper delay={0.4}>
            <Ready />
          </MotionWrapper>
        </div>
        <MotionWrapper delay={0.5}>
          <Footer />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Home;

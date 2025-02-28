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
                <Banner />
                <Services />
                <About />
                <div className="value__gradient">
                    <div
                        style={{
                            width: screen.width - 200 + "px",
                        }}
                        className="services__gradient rounded-full z-1 h-[700px] absolute -bottom-[2350px] left-[0px]"
                    />
                    <Values />
                    <Ready />
                </div>
                <MotionWrapper delay={0.5}>
                    <Footer />
                </MotionWrapper>
            </div>
        </div>
    );
};

export default Home;

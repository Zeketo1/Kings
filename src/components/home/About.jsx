import woman from "../../assets/woman.png";
import { motion } from "motion/react";
import AnimatedText from "../../common/AnimatedText";
const About = () => {
    return (
        <div className="px-10 md:px-14">
            <div className="flex mb-4 gap-4 items-center font-medium">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-full h-[1px] w-full bg-gray-400"
                />{" "}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-shrink-0"
                >
                    About Us
                </motion.p>
            </div>
            <div className="grid grid-cols-1 mb-10 lg:grid-cols-[38%_60%] gap-[100px] lg:px-14">
                <img
                    src={woman}
                    className="hidden lg:block object-cover"
                    alt=""
                />
                <div>
                    <AnimatedText
                        text="More than just a cleaning service"
                        className="text-[30px] lg:text-[45px] mb-3 text-[#7985C7] font-righteous font-[400] sm:hidden md:block"
                    />
                    <p className="lg:w-[460px]">
                        “King’s Precise Cleaning - Cleaning with Purpose,
                        Building a Legacy” The story of King’s Precise Cleaning
                        began with a dream—not just of building a successful
                        business, but of creating a lasting legacy that would be
                        passed down through generations. It all started with
                        Valda King, who, inspired by the values of hard work,
                        integrity, and care for others, saw an opportunity to
                        not only provide a vital service to the community but
                        also teach her family the true essence of
                        entrepreneurship. What is starting as a small, humble
                        cleaning service is aspired to grow into a well-
                        respected brand, known for its excellence in residential
                        and commercial cleaning. But beyond the spotless spaces,
                        it’s the lessons learned along the way that truly define
                        King’s Precise Cleaning. Valda King is building more
                        than just a cleaning service. She is building a school
                        of life—a place where each generation could understand
                        the importance of perseverance, the rewards of
                        self-reliance, and the power of a strong, supportive
                        community.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

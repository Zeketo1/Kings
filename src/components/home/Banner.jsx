import bucket from "../../assets/icons_bucket.svg";
import bannerImg from "../../assets/Set of cleaning equipment.png";
import bubbles from "../../assets/banner_bubbles.png";
import { motion } from "motion/react";

const Banner = () => {
    return (
        <div className="flex mb-10 overflow-hidden justify-center md:justify-between items-center h-[50vh] md:h-[45vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[70vh] px-5 lg:px-0 lg:justify-between">
            <span id="home"></span>
            <div className="w-full flex justify-between items-center lg:px-14">
                <div>
                    <div className="flex justify-between items-center sm:block text-[25px] lg:!text-[70px] 2xl:text-[70px] md:text-[45px] text-[#7985C7] font-righteous font-[400]">
                        <div className="">
                            <motion.p
                                initial={{ x: -400, rotate: -45, opacity: 0 }}
                                animate={{ x: 0, rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Excellence in every
                            </motion.p>{" "}
                            <motion.p
                                initial={{ x: -400, rotate: -45, opacity: 0 }}
                                animate={{ x: 0, rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="-translate-y-3"
                            >
                                Sparkle, Precision
                            </motion.p>
                            <motion.p
                                initial={{ x: -400, rotate: -45, opacity: 0 }}
                                animate={{ x: 0, rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                className="-translate-y-6"
                            >
                                in every detail.
                            </motion.p>
                        </div>
                        <img
                            src={bannerImg}
                            alt=""
                            className="h-[80px] w-[80px] sm:hidden mr-[0px] bounce-phone"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-[14px] lg:text-[16px] mb-6"
                    >
                        Transforming your space, One sparkle at a time. <br />{" "}
                        It’s the same space, it’s a fresh space.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex items-center gap-4 justify-center sm:justify-start"
                    >
                        <div className="text-[14px] bubbling cursor-pointer lg:text-[16px] flex gap-3 text-white items-center font-[600] phone__gradient w-fit py-2 pl-4 pr-2 rounded-full">
                            GET A FREE QUOTE{" "}
                            <img src={bucket} alt="" className="h-[30px]" />
                        </div>
                        <p className="flex items-center bubbling cursor-pointer text-white justify-center phone__gradient rounded-full h-[47px] w-[47px] text-[25px] font-bold">
                            ?
                        </p>
                    </motion.div>
                </div>
                <div>
                    <motion.img
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="hidden md:block delay-500 bounce z-50 relative md:h-[400px] w-auto"
                        src={bannerImg}
                        alt={bannerImg}
                    />
                </div>
            </div>
            <div>
                <div className="bubble__gradient sm:block rounded-s-full z-1 h-[600px] w-[300px] absolute -bottom-[120px] -right-[0px]" />
            </div>
            <img
                id="services"
                src={bubbles}
                alt=""
                className="h-[400px] absolute -bottom-[120px] right-0 z-1"
            />
            <div className="absolute z-[100] -left-[70px] -top-16 yellow__gradient h-[400px] w-[400px]"></div>
        </div>
    );
};

export default Banner;

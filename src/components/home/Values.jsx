import { motion } from "framer-motion";
import AnimatedText from "../../common/AnimatedText";

const Values = () => {
    const values = [
        {
            title: "Personalized Cleaning Solutions",
            desc: "– Every space is unique, and we tailor our services to fit your specific requirements.",
            color: "#D098B31A",
        },
        {
            title: "Consistent & Reliable Service",
            desc: "– Count on us to deliver exceptional results every time.",
            color: "#e0c2bc4d",
        },
        {
            title: "Quality-Focused Approach",
            desc: "– We use the best tools, techniques, and products to ensure top-tier cleaning.",
            color: "#7083C81A",
        },
    ];

    return (
        <div className="px-10 lg:px-14 mb-20">
            <div className="flex mb-4 w-full gap-4 items-center font-medium">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-shrink-0"
                >
                    Core Values
                </motion.p>{" "}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-full h-[1px] w-full bg-gray-400"
                />
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-4 lg:mb-0"
            >
                Better living, Healthy Life
            </motion.p>
            <AnimatedText
                text="At kings, we are about;"
                className="text-[30px] mb-10 lg:text-[45px] text-[#7985C7] font-righteous font-[400] sm:hidden md:block"
            />
            <div className="grid w-full place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {values.map((item, i) => (
                    <motion.div
                        style={{ backgroundColor: item.color }}
                        key={i}
                        className={`px-3 cursor-pointer text-center w-[270px] sm:w-full lg:w-[270px] ${
                            i === 2 && "sm:col-span-2 lg:col-span-1"
                        } h-[350px] rounded-[30px] flex flex-col justify-center items-center`}
                        initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
                        whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3, ease: "easeOut" },
                            zIndex: 100,
                        }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <motion.h1
                            className="text-[16px] mb-3 font-medium"
                            whileHover={{ scale: 1.02 }}
                        >
                            {item.title}
                        </motion.h1>
                        <motion.p
                            className="text-[15px] mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {item.desc}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Values;

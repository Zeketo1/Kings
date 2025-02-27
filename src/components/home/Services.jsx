import { motion } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";

const Services = () => {
  const servicesOptions = [
    {
      image: "house.svg",
      title: "Residential Cleaning",
      desc: "Transform your home into a pristine sanctuary with our thorough residential cleaning services. We handle everything from routine housekeeping to deep cleaning.",
      gains: [
        "Regular housekeeping",
        "Deep cleaning & sanitization",
        "Move-in/move-out cleaning",
        "Post-renovation cleanup",
      ],
      color: "#ffffff40",
    },
    {
      image: "hotel.svg",
      title: "Commercial Cleaning",
      desc: "Keep your business space professional and welcoming with our expert commercial cleaning solutions. A clean workplace enhances productivity and maintains hygiene.",
      gains: [
        "Office & retail space cleaning",
        "Janitorial services",
        "Industrial cleaning solutions",
        "Post-construction cleanup",
      ],
      color: "#7083C84D",
    },
    {
      image: "glass.svg",
      title: "Special Services",
      desc: "Need custom cleaning solutions for special occasions or specific requirements? We've got you covered with our specialized services.",
      gains: [
        "Event cleaning (before & after)",
        "Seasonal deep cleaning",
        "Airbnb & rental property cleaning",
        "Eco-friendly cleaning solutions",
      ],
      color: "#c74f894d",
    },
  ];

  return (
    <div id="services" className="px-10 md:px-14">
      <div className="flex mb-4 gap-4 items-center font-medium">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          Services
        </motion.p>{" "}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full h-[2px] w-full bg-gray-400"
        />
      </div>
      <motion.h1
        initial={{ x: -400 }}
        whileInView={{ x: 0, transition: { duration: 0.5, bounce: 3.5 } }}
        className="text-[30px] lg:text-[45px] mb-3 text-[#7985C7] font-righteous font-[400]"
      >
        What We Can Do For You?
      </motion.h1>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, bounce: 3.5 },
        }}
        className="text-[14px] md:text-[16px]"
      >
        We offer a wide range of professional cleaning services to suit every
        space, ensuring a clean, hygienic, and welcoming <br /> environment.
      </motion.p>

      <div className="my-7 grid w-full place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesOptions.map((item, i) => (
          <div key={i} className="relative">
            <motion.div
              style={{ backgroundColor: item.color }}
              className="flex flex-col z-1 cursor-pointer justify-between px-5 py-10 rounded-[30px] max-w-[300px] relative"
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
              <img
                src={item.image}
                className="h-12 absolute top-[-30px] right-[20px] z-10"
              />
              <motion.h1
                className="text-[19px] mb-3 text-[#7985C7] font-righteous font-[400]"
                whileHover={{ scale: 1.02 }}
              >
                {item.title}
              </motion.h1>
              <p className="mb-4">{item.desc}</p>
              <div className="mb-4 pl-2">
                {item.gains.map((gain, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + index * 0.1 }}
                  >
                    {gain}
                  </motion.li>
                ))}
              </div>
              <motion.div
                className="flex m-auto mt-5 cursor-pointer items-center gap-7 p-3 rounded-full w-fit text-white font-medium phone__gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                BOOK SERVICES <IoMdArrowRoundForward className="text-[24px]" />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
      <p className="mb-10 text-gray-600">
        Let us handle the mess while you enjoy a fresh, spotless space.
      </p>
    </div>
  );
};

export default Services;

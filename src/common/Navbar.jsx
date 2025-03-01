import { FiPhone } from "react-icons/fi";
import Logo from "../assets/Brand Guideline KIngs.png";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElementWithOffset } from "../utils";

const Navbar = () => {
    const navOptions = [
        { title: "Services", to: "#services", offset: -240 },
        { title: "About Us", to: "#about", offset: 100 },
        { title: "Contact", to: "#contact", offset: 100 },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`sticky top-0 w-full z-[999] flex items-center ${
                isOpen ? "bg-[#F5E6E3]" : "glass"
            } justify-between py-3 px-4 sm:px-10 lg:px-14`}
        >
            <img
                src={Logo}
                alt=""
                className="h-[45px]"
                onClick={() => scrollToElementWithOffset("#home", 1000)}
            />
            <div className="hidden sm:flex items-center gap-10">
                {navOptions.map((item, i) => (
                    <a
                        key={i}
                        className="cursor-pointer hover:text-[#7985C7] transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToElementWithOffset(item.to, item.offset);
                        }}
                    >
                        {item.title}
                    </a>
                ))}
                <div className="phone__gradient p-2 h-fit w-fit rounded-full flex items-center justify-center">
                    <FiPhone className="text-white text-[10px] sm:text-[18px]" />
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center">
                <div className="phone__gradient p-2 h-fit w-fit rounded-full flex items-center justify-center mr-4">
                    <FiPhone className="text-white text-[18px]" />
                </div>
                <button
                    onClick={toggleMenu}
                    className="p-2 text-black rounded focus:outline-none"
                >
                    {isOpen ? (
                        <IoMdClose className="text-xl" />
                    ) : (
                        <CiMenuFries className="text-xl" />
                    )}
                </button>
            </div>

            {/* Mobile dropdown menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[61px] left-0 w-full bg-[#F5E6E3] shadow-lg z-[998]"
                    >
                        {navOptions.map((item, i) => (
                            <motion.a
                                key={i}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex justify-center items-center w-full px-4 py-4 hover:bg-gray-200 border-t border-white cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu();
                                    setTimeout(() => {
                                        scrollToElementWithOffset(
                                            item.to,
                                            item.offset
                                        );
                                    }, 500);
                                }}
                            >
                                {item.title}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;

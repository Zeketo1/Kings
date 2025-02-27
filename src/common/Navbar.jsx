import { FiPhone } from "react-icons/fi";
import Logo from "../assets/Brand Guideline KIngs.png";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const navOptions = ["Services", "About Us", "Contact"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const removeMenu = () => {
    toggleMenu();
  };

  return (
    <div className="sticky top-0 w-full flex items-center glass justify-between py-3 px-6">
      <img src={Logo} alt="" className="h-[45px]" />
      <div className="min-[360px]:hidden sm:flex items-center gap-10">
        {navOptions.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        <div className="phone__gradient p-2 h-fit w-fit rounded-full flex items-center justify-center">
          <FiPhone className="text-white text-[18px]" />
        </div>
      </div>
      <div className="relative block sm:hidden">
        {/* Burger Button */}
        <button
          onClick={toggleMenu}
          className={`p-2 text-black rounded focus:outline-none`}
        >
          {/* Burger Icon */}
          <CiMenuFries />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute translate-y-1 -right-6 top-[47px] w-40 bg-[#F5E6E3] text-gray-800 rounded-bl-md shadow-lg overflow-hidden z-20 ${
            isOpen ? "" : "hidden"
          }`}
        >
          {navOptions.map((text, i) => (
            <div
              key={i}
              onClick={i === 4 ? removeMenu : toggleMenu}
              className={`transition duration-500 flex justify-between items-center w-full px-4 py-2 hover:bg-gray-200`}
            >
              <div className="w-full z-10">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

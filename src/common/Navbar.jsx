import { FiPhone } from "react-icons/fi";
import Logo from "../assets/Brand Guideline KIngs.png";
const Navbar = () => {
  const navOptions = ["Services", "About Us", "Contact"];

  return (
    <div className="sticky top-0 w-full flex items-center glass justify-between py-3 px-6">
      <img src={Logo} alt="" className="h-[45px]" />
      <div className="flex items-center gap-10">
        {navOptions.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        <div className="phone__gradient p-2 h-fit w-fit rounded-full flex items-center justify-center">
          <FiPhone className="text-white text-[18px]" />
        </div>
      </div>
      {/* <div className="absolute -top-10 -left-20 yellow__gradient rounded-full h-[400px] w-[400px] "></div> */}
    </div>
  );
};

export default Navbar;

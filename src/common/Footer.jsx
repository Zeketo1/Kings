import Logo from "../assets/Brand Guideline KIngs.png";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 py-10 px-12 lg:px-20">
      <div className="flex flex-wrap gap-10">
        <img src={Logo} alt="Logo" className="h-[45px]" />
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">Kings</h1>
          <div>
            <p>About Us</p>
            <p>Core Values</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">Services</h1>
          <div>
            <p>Residential</p>
            <p>Commercial</p>
            <p>Special</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">Contact</h1>
          <div>
            <p>Phone</p>
            <p>Email</p>
            <p>Social</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 w-fit sm:w-full">
        <h1 className="font-semibold text-[18px]">Join our newsletter</h1>
        <div className="flex px-1 items-center bg-gray-400 w-full h-fit md:w-[350px] rounded-full">
          <input placeholder="Email Address" type="email" className="placeholder:text-gray-100 text-white focus:outline-none pl-5 placeholder:text-[15px] placeholder:pl-0 w-full py-2 bg-transparent" />
          <button className="rounded-full phone__gradient text-[14px] font-medium text-white py-[6px] px-3">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Logo from "../assets/Brand Guideline KIngs.png";
import { scrollToElementWithOffset } from "../utils";

const Footer = () => {
    return (
        <div
            id="contact"
            className="grid xl:grid-cols-2 gap-10 py-10 px-12 lg:px-20"
        >
            <div className="flex flex-wrap justify-between gap-10 lg:w-full">
                <div className="flex flex-col gap-4 m w-fit sm:w-auto">
                    <img src={Logo} alt="Logo" className="h-[45px]" />
                </div>
                <div className="flex flex-col gap-4 m w-[50%] sm:w-auto">
                    <h1 className="font-medium">Kings</h1>
                    <div className="flex flex-col gap-4 w-full">
                        <p
                            onClick={() =>
                                scrollToElementWithOffset("#about", 100)
                            }
                        >
                            About Us
                        </p>
                        <p
                            onClick={() => {
                                scrollToElementWithOffset("#values", 100);
                            }}
                        >
                            Core Values
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-medium">Services</h1>
                    <div className="flex flex-col gap-4">
                        <p
                            onClick={() =>
                                scrollToElementWithOffset("#services", -240)
                            }
                        >
                            Residential
                        </p>
                        <p
                            onClick={() =>
                                scrollToElementWithOffset("#services", -240)
                            }
                        >
                            Commercial
                        </p>
                        <p
                            onClick={() =>
                                scrollToElementWithOffset("#services", -240)
                            }
                        >
                            Special
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-medium">Contact</h1>
                    <div className="flex flex-col gap-4">
                        <p>Phone</p>
                        <p>Email</p>
                        <p>Social</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5 w-fit sm:w-full md:w-fit md:m-auto md:items-center">
                <h1 className="font-semibold text-[18px]">
                    Join our newsletter
                </h1>
                <div className="flex px-1 items-center bg-gray-400 w-full h-fit md:w-[350px] rounded-full">
                    <input
                        placeholder="Email Address"
                        type="email"
                        className="placeholder:text-gray-100 text-white focus:outline-none pl-5 placeholder:text-[15px] placeholder:pl-0 w-full py-2 bg-transparent"
                    />
                    <button className="rounded-full phone__gradient text-[14px] font-medium text-white py-[6px] px-3">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;

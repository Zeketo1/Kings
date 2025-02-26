import house from "../../assets/house.svg";
import hotel from "../../assets/hotel.svg";
import glass from "../../assets/glass.svg";
import { IoMdArrowRoundForward } from "react-icons/io";

const Services = () => {
  const servicesOptions = [
    {
      image: house,
      title: "Residential Cleaning",
      desc: "Transform your home into a pristine sanctuary with our thorough residential cleaning services. We handle everything from routine housekeeping to deep cleaning.",
      gains: [
        "Regular housekeeping",
        "Deep cleaning & sanitization",
        "Move-in/move-out cleaning",
        "Post-renovation cleanup",
      ],
      color: "#f5ddd8f0",
    },
    {
      image: hotel,
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
      image: glass,
      title: "Special Services",
      desc: "Need custom cleaning solutions for special occasions or specific requirements? We've got you covered with our specialized services.",
      gains: [
        "Event cleaning (before & after)",
        "Seasonal deep cleaning",
        "Airbnb & rental property cleaning",
        "Eco-friendly cleaning solutions",
      ],
      color: "#D098B34D",
    },
  ];

  return (
    <div className="px-14">
      <div className="flex mb-4 gap-4 items-center font-medium">
        Services <div className="rounded-full h-[2px] w-full bg-gray-400" />
      </div>
      <h1 className="text-[45px] mb-3 text-[#7985C7] font-righteous font-[400]">
        What We Can Do For You?
      </h1>
      <p>
        We offer a wide range of professional cleaning services to suit every
        space, ensuring a clean, hygienic, and welcoming <br /> environment.
      </p>
      <div className="my-7 grid grid-cols-3 gap-3">
        {servicesOptions.map((item, i) => (
          <div
            style={{ backgroundColor: item.color }}
            key={i}
            className="flex flex-col justify-between p-4 rounded-lg"
          >
            <h1 className="text-[19px] mb-3 text-[#7985C7] font-righteous font-[400]">
              {item.title}
            </h1>
            <p className="mb-4">{item.desc}</p>
            <div className="mb-4 pl-2">
              {item.gains.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
            <div className="flex items-center gap-7 p-3 rounded-full w-fit text-white font-medium phone__gradient">
              BOOK SERVICES <IoMdArrowRoundForward className="text-[24px]" />
            </div>
          </div>
        ))}
      </div>
      <p className="mb-10">Let us handle the mess while you enjoy a fresh, spotless space.</p>
    </div>
  );
};

export default Services;

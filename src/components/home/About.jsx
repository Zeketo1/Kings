import woman from "../../assets/woman.png";
const About = () => {
  return (
    <div className="px-14">
      <div className="flex mb-4 gap-4 items-center font-medium">
        <div className="rounded-full h-[2px] w-full bg-gray-400" /> About
      </div>
      <div className="grid mb-10 grid-cols-[38%_60%] gap-[100px] px-14">
        <img src={woman} className="object-cover" alt="" />
        <div>
          <h1 className="text-[45px] mb-3 text-[#7985C7] font-righteous font-[400]">
            More than just a cleaning service
          </h1>
          <p className="w-[530px]">
            “King’s Precise Cleaning - Cleaning with Purpose, Building a Legacy”
            The story of King’s Precise Cleaning began with a dream—not just of
            building a successful business, but of creating a lasting legacy
            that would be passed down through generations. It all started with
            Valda King, who, inspired by the values of hard work, integrity, and
            care for others, saw an opportunity to not only provide a vital
            service to the community but also teach her family the true essence
            of entrepreneurship. What is starting as a small, humble cleaning
            service is aspired to grow into a well- respected brand, known for
            its excellence in residential and commercial cleaning. But beyond
            the spotless spaces, it’s the lessons learned along the way that
            truly define King’s Precise Cleaning. Valda King is building more
            than just a cleaning service. She is building a school of life—a
            place where each generation could understand the importance of
            perseverance, the rewards of self-reliance, and the power of a
            strong, supportive community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import bucket from "../../assets/icons_bucket.svg";
import bannerImg from "../../assets/Set of cleaning equipment.png";
import bubbles from "../../assets/banner_bubbles.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center h-[90vh] px-14">
      <div>
        <div className="text-[45px] text-[#7985C7] font-righteous font-[400]">
          <p>Excellence in every</p>{" "}
          <p className="-translate-y-3">Sparkle, Precision</p>
          <p className="-translate-y-6">in every detail.</p>
        </div>
        <p className="mb-6">
          Transforming your space, One sparkle at a time. <br /> It’s the same
          space, it’s a fresh space.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-white items-center font-[600] phone__gradient w-fit py-2 pl-4 pr-2 rounded-full">
            GET A FREE QUOTE <img src={bucket} alt="" className="h-[30px]" />
          </div>
          <p className="flex items-center text-white justify-center phone__gradient rounded-full h-[47px] w-[47px] text-[25px] font-bold">
            ?
          </p>
        </div>
      </div>
      <img src={bannerImg} alt={bannerImg} />
      <div className="bubble__gradient h-[400px] w-[200px] absolute -bottom-[120px] right-0" />
      <img
        src={bubbles}
        alt=""
        className="h-[400px] absolute -bottom-[120px] right-0"
      />
    </div>
  );
};

export default Banner;

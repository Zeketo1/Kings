import AnimatedText from "../../common/AnimatedText";

const Ready = () => {
    return (
        <div className="flex flex-col w-[90%] m-auto mb-4 gap-10 text-center py-7 rounded-[30px] lg:mx-14 bg-[#F4E5E2]">
            <p className="font-medium text-gray-700">ARE YOU READY?</p>
            <div className="flex flex-col items-center">
                <AnimatedText
                    text="Clean Spaces, Happy Faces!"
                    className="text-[30px] lg:text-[45px] mb-3 text-[#7985C7] font-righteous font-[400] sm:hidden md:block"
                />
                <button className="py-2 px-5 text-[14napx] lg:text-[15px] rounded-full bg-[#343851] text-white font-medium">
                    SCHEDULE A CALL
                </button>
            </div>
        </div>
    );
};

export default Ready;

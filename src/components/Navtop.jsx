import { IoSearchOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const Navtop = () => {
  return (
    <div className="bg-white">
      <div className="navbar bg-base-100 px-4 py-2">
        {/* Large screen logo */}

        <div className="lg:relative lg:top-2 flex-1 cursor-pointer">
          <a className="items-center flex gap-5 lg:gap-x-7 kalpurush-font">
            <img
              className="w-11 h-11"
              src="https://ihadis.com/assets/home-logo.png"
              alt=""
            />
            <div>
              <h1 className="lg:text-xl font-semibold lg:flex hidden lg:font-bold lg:text-black  ">
                হাদিস সমূহ
              </h1>
              <h1 className="lg:hidden text-[#2B9E76] text-2xl">আল হাদিস</h1>

              <p className="text-sm lg:flex hidden  text-[#404040] dark:text-[text-[#5d5e5f] font-normal">
                {" "}
                হাদিস পড়ুন শিখুন এবং জানুন
              </p>
            </div>
          </a>
        </div>

        <div className="flex-none justify-end gap-3 lg:gap-[5rem]">
          {/* Input field for searching */}

          <div className="form-control ">
            <IoSearchOutline className="absolute text-gray-500 z-10 lg:top-[2.1rem] top-5 right-[5.2rem] lg:right-[25rem] text-2xl lg:text-xl" />
            <input
              type="text"
              placeholder="Search Hadith"
              className="input font-sans font-normal border-2 lg:h-14 lg:w-[18rem] w-11 h-11 focus:text-black input-bordered lg:bg-white bg-[#ECEEF0] md:w-auto pl-7 relative lg:bottom-0 lg:top-2 lg:pl-10 outline-none border-[#DEE1E5] rounded-lg focus:outline-0 "
            />
          </div>

          {/* Settings Icon */}

          <div className="text-[#fff] relative  lg:top-2 bg-[#2B9E76] w-11 h-11 rounded-lg flex justify-center text-2xl items-center">
            <IoIosSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtop;

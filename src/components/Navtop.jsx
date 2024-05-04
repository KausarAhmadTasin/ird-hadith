import { IoSearchOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navtop = () => {
  const [arabicFontSize, setArabicFontSize] = useState(0);
  const [banglaFontSize, setBanglaFontSize] = useState(0);

  const handleChange = (e) => {
    setArabicFontSize(e.target.value);
  };
  const handleChangeBangla = (e) => {
    setBanglaFontSize(e.target.value);
  };

  return (
    <div className="bg-white z-10">
      <div className="navbar bg-base-100 px-4 py-3 lg:py-2 lg:pb-6">
        {/* Large screen logo */}

        <div className="lg:relative lg:top-2 flex-1 cursor-pointer">
          <a className="items-center flex gap-5 lg:gap-x-7 kalpurush-font">
            <img
              className="w-11 h-11"
              src="https://ihadis.com/assets/home-logo.png"
              alt=""
            />
            <div>
              <h1 className="lg:text-[1.4rem] font-semibold lg:flex hidden lg:font-bold lg:text-black  ">
                হাদিস সমূহ
              </h1>
              <h1 className="lg:hidden text-[#2B9E76] text-2xl">আল হাদিস</h1>

              <p className="text-[.96rem] lg:flex hidden  text-[#404040] dark:text-[text-[#5d5e5f] font-normal">
                {" "}
                হাদিস পড়ুন শিখুন এবং জানুন
              </p>
            </div>
          </a>
        </div>

        <div className="flex-none justify-end gap-3 lg:gap-[5rem]">
          {/* Input field for searching */}

          <div className="form-control ">
            <IoSearchOutline className="absolute text-gray-500 z-10 lg:top-[2.1rem] top-5 right-[5.25rem] lg:right-[25rem] text-2xl lg:text-xl" />
            <input
              type="text"
              placeholder="Search Hadith"
              className="input font-sans font-normal border-2 lg:h-14 lg:w-[18rem] w-11 h-11 text-lg focus:text-black input-bordered lg:bg-white bg-[#ECEEF0] md:w-11 pl-7 relative lg:bottom-0 lg:top-2 lg:pl-10 outline-none border-[#DEE1E5] rounded-lg focus:outline-0 "
            />
          </div>

          {/* Settings Icon + Drawer*/}

          <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-white">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <div className="text-[#fff] relative lg:top-2 bg-[#2B9E76] w-11 h-11 rounded-lg flex justify-center text-2xl items-center">
                  <IoIosSettings />
                </div>
              </label>
              {/* Close button */}
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 pt-7 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <h1 className="font-medium text-2xl">সেটিংস</h1>
                <label htmlFor="my-drawer-4" className="drawer-close">
                  <div className="text-gray-500 absolute top-8 text-xl right-8 cursor-pointer">
                    <AiOutlineClose />
                  </div>
                </label>

                {/* Drawer Options */}
                <div className="mr-3 mt-10">
                  <p className="font-bold pb-1 pl-1 text-lg">
                    আরবি ফন্ট সিলেক্ট করুন
                  </p>
                  <select className="select font-sans w-full max-w-xs">
                    <option disabled selected>
                      KFGQ{" "}
                    </option>
                    <option>Arial </option>
                    <option>Me Quran</option>
                    <option>Al Mushaf</option>
                    <option>Amiri</option>
                  </select>

                  {/* Progress */}
                  <div>
                    {" "}
                    <p className="font-bold py-3 pt-7 pl-1 text-lg">
                      এরাবিক ফন্ট সাইজ
                    </p>
                    <div className="flex gap-x-3 font-sans text-base items-center">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={arabicFontSize}
                        onChange={handleChange}
                        className="range range-success "
                      />
                      <div>{arabicFontSize}</div>
                    </div>
                    <p className="font-semibold py-3 pt-7 pl-1 text-lg">
                      অনুবাদ ফন্ট সাইজ
                    </p>
                    <div className="flex gap-x-3 font-sans text-base items-center">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={banglaFontSize}
                        onChange={handleChangeBangla}
                        className="range range-success "
                      />
                      <div>{banglaFontSize}</div>
                    </div>
                  </div>

                  {/* Theme controller */}
                  <div className="flex items-center py-3 pt-7 justify-between text-lg">
                    <p className="text-lg font-bold  pl-1">নাইট মোড</p>{" "}
                    <input
                      type="checkbox"
                      value="synthwave"
                      className="toggle theme-controller"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtop;

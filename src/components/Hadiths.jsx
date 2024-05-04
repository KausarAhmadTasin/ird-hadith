import { IoIosSettings } from "react-icons/io";

const Hadiths = () => {
  return (
    <div className="bg-[#F2F4F6] gap-y-4 py-6 w-[93vw] lg:relative lg:left-[6rem] flex flex-col rounded-l-3xl">
      {/*  */}
      <div className="navbar w-[90vw] px-4 mx-auto bg-base-100 rounded-xl">
        <div className="flex-none">
          <button className="pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="font-semibold pt-1 text-lg">সহিহ বুখারী</a>
        </div>
      </div>

      {/*  */}
      <div className="navbar w-[90vw] px-4 h-24 mx-auto bg-base-100  rounded-xl">
        <div className="text-[#fff] relative -mt-4 mx-2 top-2 bg-[#2B9E76] w-11 h-11 rounded-xl flex justify-center text-xl items-center">
          ১
        </div>
        <h3 className="text-xl ml-3 font-semibold">ওহীর সূচনা অধ্যায়</h3>
      </div>
    </div>
  );
};

export default Hadiths;

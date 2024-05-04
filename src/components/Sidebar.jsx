import { BiSolidDonateHeart } from "react-icons/bi";
import { GrHomeRounded, GrSend } from "react-icons/gr";
import { HiOutlineBookOpen, HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbBooks } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="fixed lg:absolute lg:left-0 lg:h-full left-0 right-0 bottom-0 lg:top-0 lg:justify-center lg:gap-y-6 px-6 py-3 lg:pt-28 text-3xl text-[#747575] lg:w-[6rem] lg:bg-inherit bg-white flex flex-row lg:flex-col justify-between items-center">
      <GrHomeRounded className="hover:fill-[#2B9E76] hover:text-[#2B9E76]" />
      <TbBooks className="fill-white text-[#2B9E76] bg-[#2B9E76] w-14 h-14 rounded-lg p-2" />
      <HiOutlineBookOpen className="hover:fill-[#2B9E76] hover:text-white " />
      <HiOutlineBookmark className="hover:fill-[#2B9E76] hover:text-[#2B9E76]" />
      <HiOutlineSquares2X2 className="hover:fill-[#2B9E76] text-4xl hover:text-[#2B9E76]" />
      <GrSend className="hover:fill-[#2B9E76] hover:text-[#2B9E76]" />
      <div className="bg-[#2B9E76] hidden  lg:w-16 mt-9 w-10 m-1 lg:h-16 lg:flex items-center justify-center h-10 text-white p-4 rounded-lg text-base lg:text-3xl">
        <BiSolidDonateHeart />
      </div>
    </div>
  );
};

export default Sidebar;

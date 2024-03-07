/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import banner1 from "../../assets/bannerImg/bannerImgOne.jpg";
import banner2 from "../../assets/bannerImg/bannerImgTwo.jpg";
import banner3 from "../../assets/bannerImg/bannerImgThree.jpg";
import banner4 from "../../assets/bannerImg/bannerImgFour.jpg";
import banner5 from "../../assets/bannerImg/bannerImgFive.jpg";
import { useState } from "react";

const images = [banner1, banner2, banner3, banner4, banner5];

function Banner({ setSearchQuery }) {
  const [curImg, setCurImg] = useState(0);
  function handlPrevButton() {
    setCurImg(curImg === 0 ? images.length - 1 : curImg - 1);
  }
  function handleNextButton() {
    setCurImg(curImg === images.length - 1 ? 0 : curImg + 1);
  }

  function handleSlideButton(curIndex) {
    setCurImg(curIndex);
  }

  return (
    <div className="relative w-full h-auto overflow-x-hidden">
      <div className="group h-[650px] w-screen relative">
        <div
          style={{ transform: `translateX(-${curImg * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={images[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={images[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={images[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={images[3]}
            alt="ImageFour"
          />
          <img
            className="w-screen h-full object-cover"
            src={images[4]}
            alt="ImageFive"
          />
        </div>
        {/* left arrow */}
        <div>
          <MdOutlineKeyboardArrowLeft
            size={40}
            onClick={handlPrevButton}
            className="hidden group-hover:block duration-300  absolute top-[35%] left-2  translate-y-[-35%] rounded-full p-2 hover:bg-black/20 cursor-pointer"
          />
        </div>
        {/* right arrow */}
        <div>
          <MdOutlineKeyboardArrowRight
            size={40}
            onClick={handleNextButton}
            className="hidden group-hover:block  duration-300 absolute top-[35%] right-2  translate-y-[-35%] rounded-full p-2 hover:bg-black/20 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-4 absolute bottom-[25%] left-[50%] translate-x-[-50%] ">
          {images.map((image, curIndex) => (
            <div key={curIndex} onClick={() => handleSlideButton(curIndex)}>
              <button
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full flex items-center transition-all duration-300 bg-primary ${
                  curImg === curIndex ? "p-2" : "bg-primary/50"
                }`}
              ></button>
            </div>
          ))}
        </div>
      </div>
      {/* search bar */}
      <div className="absolute  w-[90%] top-[280px]   xl:top-[300px] left-[25px] md:left-[40px] xl:left-[50px] 2xl:top-[350px] 2xl:left-[60px]  flex items-center justify-center mt-4">
        <div className="relative group w-[90%] flex justify-center items-centers ">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search here..."
            className="w-full mx-auto bg-transparent rounded-full  border-[1px] text-black  font-semibold border-gray-300 shadow-md outline-none px-2 py-1 focus:outline-none focus:border-primary pl-4 pr-10 text-xl"
          />
          <FiSearch className="text-gray-500 group-hover:text-primary absolute top-1/3 right-4" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

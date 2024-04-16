import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] 1g:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transformaing <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="h-[100px] hidden md:block w-[5px] bg-slate-400 reounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              <p>
                HTML 및 CSS를 어려워하지 않습니다. 작업을 진행하기 전에 전체적인
                레이아웃을 생각하고 컴포넌트 작업을 진행하고, 화면을
                구현하는데에 오랜 시간이 걸리지 않습니다.
              </p>
              <p>
                직장을 다니면서 꾸준하게 개인 공부시간을 가지고 여러 작업은
                진행하고 있습니다.
              </p>
            </p>
          </div>
          {/* <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download Cv</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button> */}
        </div>
        <div
          data-aos="fade-left"
          className="1g:w-[500px] mx-auto md:mx-0 mt-[2rem] 1g:mt-0 1g:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/me.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] abject-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

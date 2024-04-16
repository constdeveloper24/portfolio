import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import {
  ArrowDownTrayIcon,
  PlayCircleIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";

const Hero = () => {
  const ClickDownloadButton = () => {
    window.open("https://github.com/constdeveloper24");
  };
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-2 mx-auto grid 1g:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-yellow-400">장 봄</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            <p>Web Front Developer 3년차 개발자입니다.</p>
            <p>
              빠르게 소통하고, 신속하게 작업하고, 꾸준히 성장하는 개발자입니다.
            </p>
            <p>유저의 관점에서 바라보는 것을 좋아하는 개발자입니다.</p>
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              onClick={ClickDownloadButton}
            >
              <p>GitHub Link</p>
              <LinkIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            {/* <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-200 duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white">
                Watch The Video
              </p>
            </button> */}
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/japan.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

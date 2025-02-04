import React from "react";
import Image from "next/image";

interface ReasonCardProps {
  title: string;
  description: string;
  image: string;
  key: number;
}

const ReasonCard = ({ title, description, image, key }: ReasonCardProps) => {
  return (
    <div
      key={key}
      className="sm:h-60 xl:h-auto w-full flex-initial sm:flex-auto md:flex-1 rounded-md bg-white cursor-pointer flex flex-col items-center justify-center lg:gap-y-5 py-6 px-4 xl:py-14 xl:px-8 hover:shadow-[4px_4px_0px_0px_#b54d2f] duration-500"
    >
      <div>
        <Image
          src={image}
          alt="Personalized Learning Paths"
          className="size-16 md:size-20 xl:size-32 rounded-md"
          width={32}
          height={32}
        />
      </div>
      <div className="min-h-24 text-sm sm:text-sm xl:text-lg font-normal text-center">
        <p className="leading-[18.75px] py-1 text-black font-semibold">
          {title}
        </p>
        <p className="leading-[16.41px] font-medium pt-1 text-[#0000007D] mx-10 lg:mx-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReasonCard;

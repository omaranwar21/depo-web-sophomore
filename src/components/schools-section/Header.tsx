import { useLocale } from "next-intl";
import React from "react";

const Header = () => {
  const currentLang = useLocale();
  return (
    <div className="text-white font-bold pb-4 lg:pb-8">
      <p className="text-2xl lg:text-3xl xl:text-4xl pb-1 sm:pb-2">
        {currentLang === "en" ? "Get Started Now!" : "ابدأ الآن!"}
      </p>
      <p className="text-sm md:text-base lg:text-2xl cursor-pointer lg:leading-10">
        {currentLang === "en" ? "What type of school do you attend?" : "اختار صفك الدراسي"}
      </p>
    </div>
  );
};

export default Header;

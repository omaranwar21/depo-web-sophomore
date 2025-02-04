"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";
import { setUserLocale } from "@/utils/helpers";

const LangToggle = () => {
  const currentLang = useLocale();
  const [, startTransition] = useTransition();

  const handleChange = () => {
    const nextLocale = currentLang === "en" ? "ar" : "en";
    startTransition(() => {
      setUserLocale(nextLocale);
    });
  };

  return (
    <button onClick={handleChange} className="flex items-center">
      <Image
        src={currentLang === "en" ? "/img/eg.png" : "/img/en.png"}
        width={30}
        height={30}
        alt="flag"
        className="size-5 rounded-full mx-3"
      />
      {""}
    </button>
  );
};

export default LangToggle;

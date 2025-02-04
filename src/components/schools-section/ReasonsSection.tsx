import React from "react";
import { useLocale } from "next-intl";
import ReasonCard from "./ReasonCard";

const ReasonsSection = () => {
  const currentLang = useLocale();

  const reasonsData = [
    {
      image: "/img/Group-1.svg",
      title:
        { en: "Personalized Learning Paths", ar: "مسارات التعلم المخصصة" }[
          currentLang
        ] || "Personalized Learning Paths",
      description: {
        en: "Customized curriculum based on your goals and current skill level",
        ar: "منهج دراسي مخصص بناءً على أهدافك ومستوى مهاراتك الحالي",
      }[currentLang],
    },
    {
      image: "/img/Icon-2.svg",
      title:
        { en: "Expert Instructors", ar: "مدربون خبراء" }[currentLang] ||
        "Expert Instructors",
      description: {
        en: "Learn from industry professionals with real-world experience",
        ar: "تعلم من محترفين لديهم خبرة عملية",
      }[currentLang],
    },
    {
      image: "/img/Icon-3.svg",
      title:
        { en: "Interactive Content", ar: "محتوى تفاعلي" }[currentLang] ||
        "Interactive Content",
      description: {
        en: "Engage with hands-on projects and real-time feedback",
        ar: "تفاعل مع مشاريع عملية واحصل على ملاحظات في الوقت الفعلي",
      }[currentLang],
    },
  ];
  return (
    <>
      <div className="text-white pb-4 lg:pb-8">
        <p className="text-2xl lg:text-4xl font-bold md:leading-10 inline text-nowrap">
          {currentLang === "en" ? "Why Choose" : "لماذا تختار"}
          <span className="text-lg lg:text-4xl mx-2 bg-gradient-to-r from-[#536CB3] via-[#536CB3] uppercase to-[#F15C54] bg-clip-text text-transparent inline-block">
            {currentLang === "en" ? "Sophomore" : "سوفومور"}
          </span>
        </p>
      </div>

      <div className="flex justify-center md:justify-between items-center flex-wrap md:flex-row gap-4 pt-6">
        {reasonsData.map((reason, index) => (
          <ReasonCard
            key={index}
            image={reason.image}
            title={reason.title}
            description={reason.description || ""}
          />
        ))}
      </div>
    </>
  );
};

export default ReasonsSection;

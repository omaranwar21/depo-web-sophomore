"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getSchools } from "@/redux/thunks/schools-thunks";
import { useLocale } from "next-intl";

const SchoolsArea = () => {
  const dispatch = useAppDispatch();
  const { schools } = useAppSelector((state) => state.schools);

  console.log(schools, "Schools");
  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  const currentLang = useLocale();
  return (
    <>
      {schools?.map((schoolsType) => (
        <div
          key={schoolsType.id}
          className="grid grid-cols-6 lg:grid-cols-12 gap-4"
        >
          <div className="col-span-6 lg:col-span-12 grid grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-4 mb-10">
            <div className="col-span-6 lg:col-span-12">
              <h4 className="lg:text-xl xl:text-3xl font-bold text-white bg-[#1E2A4A] border border-primary rounded-full inline-block py-2 px-4">
                {currentLang === "en" ? schoolsType.name : schoolsType.name_ar}
              </h4>
            </div>

            {schoolsType.grades.map((grade) => (
              <div
                key={grade.id}
                className="col-span-3 lg:col-span-4 rounded-2xl"
              >
                <div className="relative overflow-hidden mt-2 lg:mt-4 rounded-3xl group">
                  <Link href="">
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "3 / 2" }}
                    >
                      <Image
                        src={`https://dev.depowebeg.com${grade.path}${grade.image}`}
                        width={300}
                        height={200}
                        loading="lazy"
                        alt="Grade-1"
                        className="w-full object-cover h-full group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
                      />
                    </div>
                    <h4
                      className="absolute bottom-5 left-5 text-nowrap text-sm sm:text-xl xl:text-2xl font-bold text-white group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 
                               duration-300 transition-all"
                    >
                      {currentLang === "en" ? grade.name : grade.name_ar}
                    </h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SchoolsArea;

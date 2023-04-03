import React from "react";
import Button from "@/components/Button";
import Tabs from "@/components/Tabs";
import Typography from "@/components/Typography";
import { useState } from "react";
import { useRouter } from "next/router";

import { Planet } from "@/planets";
import Image from "next/image";
import pic from "../assets/planet-neptune-internal.svg";
export default function PlanetHome({ data }: { data: Planet }) {
  const [tabs, setTabs] = useState([
    { name: "OVERVIEW", step: "01", current: true },
    { name: "Structure", step: "02", current: false },
    { name: "Surface", step: "03", current: false },
  ]);

  const router = useRouter();

  return (
    <>
      <Tabs tabs={tabs} setTabs={setTabs} color={data.color} />
      <br />
      <br />
      <br />
      <div className="flex flex-col p-10 md:space-y-10 lg:items-center lg:justify-center lg:space-y-10 lg:p-12">
        <div className="flex h-full w-full flex-col items-center justify-center space-y-10  md:flex-col md:space-y-6 lg:flex-row lg:space-y-0 ">
          <div className=" h-full w-full lg:w-[85%] ">
            {tabs[0].current === true && (
              <Image
                src={data.images.planet}
                alt={data.name}
                width={data.width}
                height={data.height}
                className="mx-auto"
              />
            )}
            {tabs[1].current === true && (
              <Image
                src={data.images.internal}
                alt={data.name}
                width={data.width}
                height={data.height}
                className="mx-auto"
              />
            )}
            {tabs[2].current === true && (
              <div className="relative">
                <Image
                  src={data.images.planet}
                  alt={data.name}
                  width={data.width}
                  height={data.height}
                  className="mx-auto pb-28 md:pb-0 lg:pb-0"
                />
                <Image
                  src={data.images.geology}
                  alt={data.name}
                  width={163}
                  height={199}
                  className="absolute left-1/2 top-[55%] -translate-x-1/2 transform sm:top-[50%]"
                />
              </div>
            )}
          </div>
          <div className="flex  flex-col items-start space-y-6 md:flex-row md:space-x-16 md:px-5  lg:w-1/2 lg:flex-col lg:space-x-0">
            <div className="space-y-4 text-center sm:text-left">
              <Typography type="h1">{data.name}</Typography>
              <Typography type="body" className=" ">
                {tabs[0].current === true && data.overview.content}
                {tabs[1].current === true && data.structure.content}
                {tabs[2].current === true && data.geology.content}
              </Typography>
              <div className="">
                <a
                  href={
                    tabs[0].current === true
                      ? data.overview.source
                      : tabs[1].current === true
                      ? data.structure.source
                      : data.geology.source
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-row items-center space-x-2"
                >
                  <Typography type="body" className="text-white/50">
                    Source :{" "}
                    <span className="font-bold underline">Wikipedia</span>
                  </Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="#FFF"
                      d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                      opacity=".5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" self-start">
              <Button color={data.color} tabs={tabs} setTabs={setTabs} />
            </div>
          </div>
        </div>
        <div className="block">
          <div className=" flex h-full w-full flex-col items-center justify-center space-y-2 md:flex-row md:space-x-3 md:space-y-0 lg:flex-row lg:space-x-3 lg:space-y-0">
            <div className="flex h-[48px] w-[327px] flex-row items-center justify-between border border-white/20 px-5 py-2 md:h-[88px] md:w-[164px] md:flex-col md:items-start md:px-4 md:py-2 lg:h-[128px] lg:w-[255px] lg:flex-col lg:p-6">
              <Typography type="h4" className="text-white/50">
                ROTATION TIME
              </Typography>
              <Typography
                type="h2"
                className="text-[20px] md:text-[24px] lg:text-[40px]"
              >
                {data.rotation}
              </Typography>
            </div>
            <div className="flex h-[48px] w-[327px] flex-row items-center justify-between border border-white/20 px-5 py-2 md:h-[88px] md:w-[164px] md:flex-col md:items-start md:px-4 md:py-2 lg:h-[128px] lg:w-[255px] lg:flex-col lg:p-6">
              <Typography type="h4" className="text-white/50">
                REVOLUTION TIME
              </Typography>
              <Typography type="h2" className=" ">
                {data.revolution}
              </Typography>
            </div>
            <div className="flex h-[48px] w-[327px] flex-row items-center justify-between border border-white/20 px-5 py-2 md:h-[88px] md:w-[164px] md:flex-col md:items-start md:px-4 md:py-2 lg:h-[128px] lg:w-[255px] lg:flex-col lg:p-6">
              <Typography type="h4" className="text-white/50">
                radius
              </Typography>
              <Typography
                type="h2"
                className="text-[20px] md:text-[24px] lg:text-[40px]"
              >
                {data.radius}
              </Typography>
            </div>
            <div className="flex h-[48px] w-[327px] flex-row items-center justify-between border border-white/20 px-5 py-2 md:h-[88px] md:w-[164px] md:flex-col md:items-start md:px-4 md:py-2 lg:h-[128px] lg:w-[255px] lg:flex-col lg:p-6">
              <Typography type="h4" className="text-white/50">
                AVERAGE TEMP.
              </Typography>
              <Typography
                type="h2"
                className="text-[20px] md:text-[24px] lg:text-[40px]"
              >
                {data.temperature}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: {
  params: { planet: string };
}) {
  const { planet } = context.params;
  // Fetch data from external API
  const res = await fetch(`http://${process.env.API_URL}/api/${planet}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

import React from "react";
import Typography from "./Typography";
import clsx from "clsx";
export default function Button({
  color,
  tabs,
  setTabs,
}: {
  color: string;
  tabs: { name: string; step: string; current: boolean }[];
  setTabs: (tabs: { name: string; step: string; current: boolean }[]) => void;
}) {
  const classes = clsx({
    "bg-[#419EBB]": color === "#419EBB",
    "bg-[#EDA249]": color === "#EDA249",
    "bg-[#6D2ED5]": color === "#6D2ED5",
    "bg-[#D14C32]": color === "#D14C32",
    "bg-[#D83A34]": color === "#D83A34",
    "bg-[#CD5120]": color === "#CD5120",
    "bg-[#1EC1A2]": color === "#1EC1A2",
    "bg-[#2D68F0]": color === "#2D68F0",
  });

  return (
    <div className="hidden sm:block">
      <div className="flex flex-col space-y-4">
        {tabs.map((tab) => (
          <button
            onClick={() => {
              const newTabs = tabs.map((tab) => {
                return { ...tab, current: false };
              });
              newTabs.find((t) => t.name === tab.name)!.current = true;
              setTabs(newTabs);
            }}
            className={`flex h-[48px] w-[350px] flex-row items-center space-x-8 border border-white/20 px-7 hover:border-current hover:bg-white/20  
  ${tab.current === true ? classes : ``}`}
            key={tab.name}
          >
            <Typography type="h3" className="text-white/50">
              {tab.step}
            </Typography>
            <Typography type="h3" className="text-white">
              {tab.name}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  );
}

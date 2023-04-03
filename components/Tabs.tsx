import Typography from "./Typography";

import clsx from "clsx";

export default function Example({
  tabs,
  setTabs,
  color,
}: {
  tabs: { name: string; step: string; current: boolean }[];
  setTabs: (tabs: { name: string; step: string; current: boolean }[]) => void;
  color?: string;
}) {
  const classes = clsx({
    "border-b-4 border-[#419EBB] text-[#419EBB]": color === "#419EBB",
    "border-b-4 border-[#EDA249] text-[#EDA249]": color === "#EDA249",
    "border-b-4 border-[#6D2ED5] text-[#6D2ED5]": color === "#6D2ED5",
    "border-b-4 border-[#D14C32] text-[#D14C32]": color === "#D14C32",
    "border-b-4 border-[#D83A34] text-[#D83A34]": color === "#D83A34",
    "border-b-4 border-[#CD5120] text-[#CD5120]": color === "#CD5120",
    "border-b-4 border-[#1EC1A2] text-[#1EC1A2]": color === "#1EC1A2",
    "border-b-4 border-[#2D68F0] text-[#2D68F0]": color === "#2D68F0",
  });
  return (
    <div className="block  sm:hidden">
      <div className="">
        <div className="border-b border-white/20">
          <nav
            className="flex flex-row justify-center space-x-8 px-6"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <button
                onClick={() => {
                  const newTabs = tabs.map((tab) => {
                    return { ...tab, current: false };
                  });
                  newTabs.find((t) => t.name === tab.name)!.current = true;
                  setTabs(newTabs);
                }}
                key={tab.name}
                className={`w-3/4 border-b-2 px-1 py-4 text-sm font-medium ${
                  tab.current === true
                    ? classes
                    : `border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700`
                }`}
                aria-current={tab.current ? "page" : undefined}
              >
                <Typography
                  type="h3"
                  className="text-center text-[9px] tracking-[1.93px]"
                >
                  {tab.name}
                </Typography>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

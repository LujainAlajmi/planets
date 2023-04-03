import React from "react";
import clsx from "clsx";
export default function Typography({
  children,
  type,
  className,
}: {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "body";
  className?: string;
}) {
  const classes = clsx({
    "font-[Antonio] text-[80px] font-medium uppercase leading-[103px] text-white":
      type === "h1",
    "font-[Antonio] text-[20px] font-medium leading-[52px] tracking-[-1.5px] text-white md:text-[24px] lg:text-[40px]":
      type === "h2",
    "font-[League Spartan] text-[12px] font-bold uppercase leading-6 tracking-[2.57px] text-white":
      type === "h3",
    "font-[League Spartan] text-[11px] font-bold uppercase leading-6 tracking-[1px] text-white":
      type === "h4",
    "font-[League Spartan] text-[14px] font-normal leading-6 text-white":
      type === "body",
  });

  return <h1 className={`${classes} ${className}`}>{children}</h1>;
}

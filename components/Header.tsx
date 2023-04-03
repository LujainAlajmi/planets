import { planets } from "@/data";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Typography from "./Typography";
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure as="nav" className="">
      {({ open, close }) => (
        <>
          <div className="p-4 sm:p-4 lg:p-6">
            <div className="relative flex h-16 flex-row items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:flex-col sm:space-y-4 md:flex-col md:space-y-4 lg:flex-row  lg:space-y-0">
                <div className="">
                  <Typography type="h2" className="text-[28px]">
                    THE PLANETS
                  </Typography>
                </div>
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {planets.map((planet) => (
                      <Link href={`/${planet.name}`} key={planet.name}>
                        <Typography type="h3" className="text-white/75">
                          {planet.name}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="  flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`inline-flex items-center justify-center p-2 ${
                    open ? "text-white/25" : "text-white"
                  } `}
                >
                  <span className="sr-only">Open main menu</span>

                  <Bars3Icon className={"block h-10 w-10"} aria-hidden="true" />
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <hr className="border-white/20" />
          <Disclosure.Panel className=" bg-[#070724] sm:hidden ">
            <div className="  divide-y divide-slate-400/25 p-7">
              {planets.map((planet) => (
                <Disclosure.Button
                  key={planet.name}
                  className={" h-16 w-full "}
                  onClick={() => close()}
                >
                  <Link
                    href={`/${planet.name}`}
                    key={planet.name}
                    onClick={() => close()}
                  >
                    <div className="flex w-[98%] flex-row items-center justify-between">
                      <div className={"flex  flex-row items-center space-x-6 "}>
                        <div
                          className={`h-5 w-5 rounded-full bg-[${planet.color}]`}
                        />
                        <Typography type="h3" className="text-[15px] ">
                          {planet.name}
                        </Typography>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="8"
                        >
                          <path
                            fill="none"
                            stroke="#FFF"
                            opacity=".4"
                            d="M1 0l4 4-4 4"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

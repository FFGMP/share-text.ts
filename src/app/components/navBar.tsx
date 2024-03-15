"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export function NavMenu() {
  const { setTheme } = useTheme();
  return (
    <nav className="relative z-10 flex flex-row justify-end">
      <div
        className={`fixed right-4 top-4 flex h-12 w-fit flex-row items-center justify-end rounded-3xl border border-gray-300 bg-gray-100 px-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900`}
      >
        <div className="flex items-center justify-center">
          <ButtonSun setTheme={setTheme} />
          <ButtonMoon setTheme={setTheme} />
        </div>
        <div className="mx-4 h-4/5 border border-gray-300 dark:border-neutral-800"></div>
        <div>
          <h2 className="cursor-pointer select-none text-gray-800 dark:text-neutral-100">
            <Link href={"/about"}>About</Link>
          </h2>
        </div>
      </div>
    </nav>
  );
}

//Sun Button
const ButtonSun = ({ setTheme }: any) => {
  return (
    <button
      className="hidden scale-0 dark:block dark:scale-150"
      aria-label="Turn dark mode off"
      onClick={() => setTheme("light")}
    >
      <FaSun />
    </button>
  );
};

//Moon Button
const ButtonMoon = ({ setTheme }: any) => {
  return (
    <button
      className="block scale-150 dark:hidden dark:scale-0"
      aria-label="Turn dark mode on"
      onClick={() => setTheme("dark")}
    >
      <FaMoon />
    </button>
  );
};

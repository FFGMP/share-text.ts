"use client";

import { SlClose } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction, useState } from "react";

//Logica a ser mudada mas por enquanto fica assim
//Logic to be changed but for now it stays like this
async function clickLinkClose(
  e: React.MouseEvent<HTMLAnchorElement>,
  setCloseSidebar: Dispatch<SetStateAction<boolean>>,
  router: AppRouterInstance,
): Promise<void> {
  e.preventDefault();
  setCloseSidebar(true);
  await new Promise((resolve) => setTimeout(resolve, 300));
  router.push("/");
}

export default function About() {
  const router = useRouter();
  const [closeSidebar, setCloseSidebar] = useState(false);

  return (
    <main className=" flex h-screen flex-row-reverse">
      <div
        className={`${closeSidebar ? "sidebarClose" : "sidebar"} flex h-full w-5/6 flex-col border-l border-neutral-400 bg-yellow-400 transition-all duration-700 dark:border-neutral-400 dark:bg-yellow-500 md:w-2/4`}
      >
        <div className="z-10 mt-4 flex h-12 w-full flex-row items-center pl-4">
          <Link
            href={"/"}
            onClick={(e) => {
              clickLinkClose(e, setCloseSidebar, router);
            }}
          >
            <SlClose className="cursor-pointer" />
          </Link>
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center">
          <div className="h-36 w-36">
            <FaGithub className="h-full w-full" />
          </div>
          <p className="">
            <span>
              <a
                className="underline hover:text-blue-500"
                target="_blank"
                href="https://github.com/FFGMP/"
              >
                Github | FFGMP
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="w-1/6 cursor-pointer transition-all duration-700 md:w-2/4">
        <Link
          href={"/"}
          onClick={(e) => {
            clickLinkClose(e, setCloseSidebar, router);
          }}
        >
          <div className="h-full w-full"></div>
        </Link>
      </div>
    </main>
  );
}

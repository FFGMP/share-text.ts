import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SlClose } from "react-icons/sl";

type Props = {
  reverse?: boolean;
};

export default async function AboutSlide({ reverse }: Props) {
  return (
    <main className={` flex h-screen flex-row-reverse`}>
      <div
        className={`${reverse ? "sidebarClose" : "sidebar"} flex h-full w-5/6 flex-col justify-center border-l border-neutral-400 bg-yellow-400 transition-all duration-700 dark:border-neutral-400 dark:bg-yellow-500 md:w-2/4`}
      >
        <div className="absolute top-0 z-10 mt-4 flex h-12 w-full flex-row items-center pl-4">
          <Link href={"/?ref=about"}>
            <SlClose className="cursor-pointer" />
          </Link>
        </div>
        <div className="absolute flex h-full w-full  flex-col items-center justify-center">
          <div className="h-36 w-36">
            <FaGithub className="h-full w-full" />
          </div>
          <p>
            <span>
              <Link
                className="underline hover:text-blue-500"
                target="_blank"
                href="https://github.com/FFGMP/"
              >
                Github | FFGMP
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="w-1/6 cursor-pointer transition-all duration-700 md:w-2/4">
        <Link href={"/?ref=about"}>
          <div className="h-full w-full"></div>
        </Link>
      </div>
    </main>
  );
}

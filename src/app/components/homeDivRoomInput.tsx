"use client";

//Serve para perceber em que pagina estou para saber como lidar com o about, isto tem que ser mudado, fica lento quand esta ecra muito pequeno
import { usePathname } from "next/navigation";

export default function HomeDivRoomInput() {
  return (
    <div
      className={`${usePathname() === "/about" ? "-left-96 w-80 md:left-0 " : "left-0 w-full"} absolute flex h-full flex-col justify-center p-4 transition-all duration-500 sm:ml-12 sm:w-80 sm:p-0 `}
    >
      <div className="flex h-[330px] flex-col items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-gray-100 p-8 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900">
        <div className="text-center">
          <h1 className=" font-bold text-gray-800 dark:text-neutral-100">
            texto.space
          </h1>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center">
          <input
            className="rounded-sm border p-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
            placeholder="Nome da Sala"
          ></input>
          <p className="text-center text-xs text-gray-600 dark:text-neutral-300">
            Coloque o nome da sala que pretende criar ou entrar
          </p>
        </div>
        <button className="rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-sm duration-200 hover:bg-gray-300 dark:border-neutral-500 dark:bg-neutral-700 dark:hover:bg-neutral-800">
          Entrar
        </button>
      </div>
    </div>
  );
}

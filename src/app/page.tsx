import AboutSlide from "./components/about-slide";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const hasAboutRef = searchParams.ref;

  return (
    <>
      {hasAboutRef && <AboutSlide reverse={true} />}
      <div
        className={`absolute left-96 flex h-full w-full flex-col justify-center p-4 transition-all duration-500 sm:ml-12 sm:w-80 sm:p-0 md:left-0 `}
      >
        <div className="flex h-[330px] flex-col items-center justify-center overflow-hidden rounded-md border border-gray-300  p-8  dark:border-neutral-700 dark:bg-neutral-900">
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 dark:text-neutral-100">
              texto.space
            </h1>
          </div>
          <div className="flex flex-grow flex-col items-center justify-center">
            {/* //REVIEW - you can update this to <input/> instead of <input></input> */}
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
    </>
  );
}

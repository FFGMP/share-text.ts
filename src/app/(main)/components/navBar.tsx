import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";

type Props = {
  path?: string;
};

export function NavMenu({ path }: Props) {
  const store = cookies();
  const currentTheme = store.get("theme")?.value || "dark";

  async function onSubmit(formData: FormData) {
    "use server";
    const store = cookies();
    const theme = formData.get("theme")?.toString() || "dark";

    if (theme === "light") store.set("theme", "light");
    if (theme === "dark") store.set("theme", "dark");
    redirect(path || "/");
  }

  return (
    <nav className="relative z-10 flex flex-row justify-end">
      <div
        className={`fixed right-4 top-4 flex h-12 w-fit flex-row items-center justify-end rounded-3xl border border-gray-300 bg-gray-100 px-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900`}
      >
        <form action={onSubmit} className="flex items-center justify-center">
          {currentTheme === "dark" ? (
            <button type="submit" name="theme" value={"light"}>
              <FaSun />
            </button>
          ) : (
            <button type="submit" value="dark" name="theme">
              <FaMoon />
            </button>
          )}
        </form>
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LinkToSpace() {
  return (
    <span className="text-2xl underline">
      <Link href={"/space" + usePathname()}>space</Link>
    </span>
  );
}

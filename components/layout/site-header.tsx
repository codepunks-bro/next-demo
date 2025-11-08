 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/config/navigation";

function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex max-w-full flex-1 items-center gap-2 overflow-auto pr-2">
      {mainNavigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname?.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "group flex flex-col rounded-2xl border border-transparent px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "bg-gradient-to-br from-sky-600/90 to-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "bg-white/70 text-zinc-800 backdrop-blur hover:bg-white/90 hover:shadow",
            ].join(" ")}
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              {item.label}
              {item.badge ? (
                <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700 group-hover:bg-white/80 group-hover:text-sky-900">
                  {item.badge}
                </span>
              ) : null}
            </span>
            <span className="text-xs text-zinc-600 group-hover:text-zinc-800">
              {item.description}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-500 via-purple-500 to-amber-500 text-white shadow-lg shadow-sky-400/40">
            NL
          </span>
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Next Travel Lab
            </span>
            <span className="text-lg text-zinc-900 dark:text-zinc-100">
              Demo Stack
            </span>
          </div>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}


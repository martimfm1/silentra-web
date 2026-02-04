
"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@heroui/skeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="relative mx-4 flex w-full max-w-3xl flex-col gap-10 overflow-hidden rounded-3xl border border-zinc-200 bg-white/90 p-10 shadow-[0_22px_60px_rgba(15,23,42,0.18)] backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-900/70 sm:mx-0 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(161,161,170,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(39,39,42,0.26),_transparent_55%)] opacity-70 dark:opacity-90" />

        {isLoading ? (
          <div className="relative flex flex-col gap-6 sm:max-w-xl">
            <div className="inline-flex items-center gap-2">
              <Skeleton className="h-6 w-32 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80" />
              <Skeleton className="h-4 w-40 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded-lg bg-zinc-200/70 dark:bg-zinc-800/70" />
                <Skeleton className="h-4 w-5/6 rounded-lg bg-zinc-200/70 dark:bg-zinc-800/70" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Skeleton className="h-7 w-32 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
              <Skeleton className="h-7 w-40 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <Skeleton className="h-3 w-32 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
                <Skeleton className="h-3 w-48 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
              </div>
              <Skeleton className="h-9 w-36 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
            </div>
          </div>
        ) : (
          <>
            <div className="relative flex flex-col gap-6 sm:max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                In progress
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  We&apos;re building the next version of Silentra.
                </h1>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                  You Think, We Do.
                </p>
                <p className="text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  We&apos;re crafting a quiet, distraction-free experience with a focus on simplicity,
                  detail and digital calm. Soon, this space will come to life.
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-zinc-300/80 px-3 py-1 dark:border-zinc-700/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  Built around simplicity
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-zinc-300/80 px-3 py-1 dark:border-zinc-700/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  Neutral, calm design
                </span>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-700 dark:text-zinc-200">
                  Stay close.
                </span>
                <span>
                  We&apos;ll share more soon — no noise, only what matters.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://discord.gg/aKpwVrXgyx"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium text-zinc-50 shadow-[0_10px_35px_rgba(15,23,42,0.45)] backdrop-blur-md transition hover:bg-white/16 hover:border-white/30 dark:border-zinc-500/30 dark:bg-zinc-900/30 dark:text-zinc-50 dark:hover:bg-zinc-900/50 cursor-pointer"
                >
                  Join our Discord
                </a>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
                  A quiet space for early updates and feedback.
                </span>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

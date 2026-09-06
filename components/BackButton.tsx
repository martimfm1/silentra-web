"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className={
        "inline-flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-md bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] text-sm text-[#b8b8b8] " +
        (className || "")
      }
      aria-label="Voltar"
    >
      <span className="text-[#b8b8b8] text-sm">←</span>
      <span>Voltar</span>
    </button>
  );
}

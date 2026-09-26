"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const EMPTY_COUNTS = {
  plan: 0,
  saved: 0,
};

function getCounts() {
  if (typeof window === "undefined") {
    return EMPTY_COUNTS;
  }

  try {
    const storedPlan = JSON.parse(
      localStorage.getItem("fitlog-plan") || "[]"
    );

    const storedSaved = JSON.parse(
      localStorage.getItem("fitlog-saved") || "[]"
    );

    return {
      plan: Array.isArray(storedPlan) ? storedPlan.length : 0,
      saved: Array.isArray(storedSaved) ? storedSaved.length : 0,
    };
  } catch {
    return EMPTY_COUNTS;
  }
}

export default function Navbar() {
  const [counts, setCounts] = useState(EMPTY_COUNTS);

  useEffect(() => {
    const updateCounts = () => {
      setCounts(getCounts());
    };

    updateCounts();

    window.addEventListener("storage", updateCounts);
    window.addEventListener("fitlog-storage-update", updateCounts);

    return () => {
      window.removeEventListener("storage", updateCounts);
      window.removeEventListener(
        "fitlog-storage-update",
        updateCounts
      );
    };
  }, []);

  return (
    <nav className="bg-[#0d0f11]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/fitlog-icon.png"
           alt="FitLog logo"
            width={18}
            height={18}
          />

          <span className="text-[10px] font-bold text-white">
            FITLOG
          </span>
        </Link>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-5">
          <Link
            href="/"
            className="rounded-full bg-lime-400 px-4 py-1.5 text-[7px] font-bold text-black"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-[7px] font-medium text-gray-500 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-1"
          >
            <span className="text-[7px] text-gray-500">
              Plan
            </span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[6px] font-black text-black">
              {counts.plan}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1"
          >
            <span className="text-[7px] text-gray-500">
              Saved
            </span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#303338] text-[6px] text-gray-500">
              {counts.saved}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
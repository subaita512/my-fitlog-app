import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f11]">
      <Navbar />

      <Hero />

      <WorkoutLibrary />

      <footer className="border-t border-[#202328] px-5 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/fitlog-icon.png"
              alt="FitLog"
              width={14}
              height={14}
            />

            <span className="text-[8px] font-bold text-white">
              FITLOG
            </span>
          </div>

          <p className="text-[7px] text-gray-600">
            © 2026 FitLog
          </p>
        </div>
      </footer>
    </main>
  );
}
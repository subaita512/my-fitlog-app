import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import { workouts } from "@/data/workouts";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f11]">
      <Navbar />

      <Hero />

      <section id="workouts" className="px-3 py-8 sm:px-5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5">
            <h2 className="text-sm font-black uppercase text-white">
              The Library
            </h2>

            <p className="mt-1 text-[8px] text-gray-600">
              Track the lifts covering every major muscle group.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#202328] px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-1">
            <img
              src="/fitlog-icon.png"
              alt=""
              className="h-3 w-3"
            />

            <span className="text-[7px] font-bold text-white">
              FITLOG
            </span>
          </div>

          <p className="text-[6px] text-gray-600">
            © 2026 FitLog
          </p>
        </div>
      </footer>
    </main>
  );
}
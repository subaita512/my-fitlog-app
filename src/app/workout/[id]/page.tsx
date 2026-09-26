import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WorkoutActions from "@/components/WorkoutActions";
import { workouts } from "@/data/workouts";

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workout = workouts.find((item) => item.id === id);

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#0d0f11]">
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-2xl font-black uppercase text-white">
              Workout Not Found
            </h1>

            <Link
              href="/"
              className="mt-4 inline-block rounded-sm bg-lime-400 px-4 py-2 text-xs font-bold text-black"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f11]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-5 inline-block text-[8px] font-bold uppercase text-gray-500 hover:text-white"
        >
          ← Back to Workouts
        </Link>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-[#24272c] sm:min-h-[400px]">
            <Image
              src="/workout-card.png"
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-lg border border-[#24272c] bg-[#15181c] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[8px] font-bold uppercase text-lime-400">
                {workout.category}
              </span>

              <span className="text-[8px] text-gray-500">
                ★ {workout.rating}
              </span>
            </div>

            <h1 className="mt-2 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
              {workout.name}
            </h1>

            <p className="mt-3 text-[9px] leading-5 text-gray-500">
              {workout.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1">
              {workout.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm bg-lime-400 px-2 py-1 text-[7px] font-black uppercase text-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 overflow-hidden border border-[#282b30]">
              {[
                ["Equipment", workout.equipment],
                ["Difficulty", workout.difficulty],
                ["Sets", workout.sets],
                ["Reps", workout.reps],
                ["Duration", workout.duration],
                ["Calories", workout.calories],
                ["Rating", `★ ${workout.rating}`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-[#282b30] px-3 py-3 last:border-0"
                >
                  <span className="text-[7px] font-bold uppercase text-gray-600">
                    {label}
                  </span>

                  <span className="text-[8px] text-gray-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mt-6 text-[9px] font-black uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-2 space-y-2 text-[8px] leading-4 text-gray-500">
              <li>1. Set up the equipment and prepare your position.</li>
              <li>2. Control the movement through the full range.</li>
              <li>3. Keep your form steady throughout each repetition.</li>
              <li>4. Complete the planned sets and repetitions.</li>
            </ol>

            <WorkoutActions workoutId={workout.id} />
          </div>
        </div>
      </section>
    </main>
  );
}
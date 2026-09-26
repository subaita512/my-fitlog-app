import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-3 pt-4 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-lg bg-[#171a1f] px-5 py-7 sm:px-8 sm:py-8">
        <div className="max-w-xl">
          <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-lime-400 sm:text-[8px]">
            Workout Library
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-3 max-w-sm text-[8px] leading-4 text-gray-500 sm:text-[9px]">
            FitLog is a clean, no-nonsense gym companion: pick a lift, log it
            into today&apos;s plan, and see how your work stacks up.
          </p>

          <a
            href="#workouts"
            className="mt-4 inline-block rounded-sm bg-lime-400 px-4 py-2 text-[7px] font-black uppercase text-black hover:bg-lime-300 sm:text-[8px]"
          >
            Browse Workouts
          </a>
        </div>

        <div className="hidden md:block">
          <Image
            src="/hero-workout.png"
            alt="Workout"
            width={192}
            height={192}
            className="h-40 w-40 object-contain lg:h-48 lg:w-48"
          />
        </div>
      </div>
    </section>
  );
}
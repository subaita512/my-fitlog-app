"use client";

import { useState } from "react";
import WorkoutCard from "@/components/WorkoutCard";
import { workouts } from "@/data/workouts";

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutLibrary() {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return (
        parseInt(a.duration) -
        parseInt(b.duration)
      );
    }

    if (sortBy === "calories") {
      return (
        parseInt(a.calories) -
        parseInt(b.calories)
      );
    }

    return (
      parseFloat(b.rating) -
      parseFloat(a.rating)
    );
  });

  return (
    <section
      id="library"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-lime-400">
              Explore
            </p>

            <h2 className="mt-1 text-xl font-black uppercase text-white sm:text-2xl">
              The Library
            </h2>

            <p className="mt-1 max-w-md text-[8px] leading-4 text-gray-500 sm:text-[9px]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-[7px] font-bold uppercase text-gray-600"
            >
              Sort
            </label>

            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value as SortOption
                  )
                }
                className="appearance-none rounded-sm border border-[#303338] bg-[#15181c] px-3 py-2 pr-7 text-[8px] font-bold uppercase text-gray-300 outline-none focus:border-lime-400"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[8px] text-gray-500">
                ▼
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
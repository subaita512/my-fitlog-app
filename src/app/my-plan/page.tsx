"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import WorkoutCard from "@/components/WorkoutCard";
import { workouts } from "@/data/workouts";

export default function MyPlan() {
  const [planIds, setPlanIds] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [doneIds, setDoneIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = () => {
      try {
        const storedPlan = JSON.parse(
          localStorage.getItem("fitlog-plan") || "[]"
        );

        const storedSaved = JSON.parse(
          localStorage.getItem("fitlog-saved") || "[]"
        );

        const storedDone = JSON.parse(
          localStorage.getItem("fitlog-done") || "[]"
        );

        setPlanIds(
          Array.isArray(storedPlan) ? storedPlan : []
        );

        setSavedIds(
          Array.isArray(storedSaved) ? storedSaved : []
        );

        setDoneIds(
          Array.isArray(storedDone) ? storedDone : []
        );
      } catch {
        setPlanIds([]);
        setSavedIds([]);
        setDoneIds([]);
      }

      setLoaded(true);
    };

    const timer = window.setTimeout(loadData, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const removeFromPlan = (id: string) => {
    const updated = planIds.filter(
      (item) => item !== id
    );

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updated)
    );

    setPlanIds(updated);

    window.dispatchEvent(
      new Event("fitlog-storage-update")
    );

    toast.success("Workout removed from your plan");
  };

  const removeFromSaved = (id: string) => {
    const updated = savedIds.filter(
      (item) => item !== id
    );

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(updated)
    );

    setSavedIds(updated);

    window.dispatchEvent(
      new Event("fitlog-storage-update")
    );

    toast.success("Workout removed from saved");
  };

  const markAsDone = (id: string) => {
    if (doneIds.includes(id)) {
      toast.info("Workout is already completed.");
      return;
    }

    const updated = [...doneIds, id];

    localStorage.setItem(
      "fitlog-done",
      JSON.stringify(updated)
    );

    setDoneIds(updated);

    toast.success("Workout marked as done");
  };

  const planWorkouts = workouts.filter((workout) =>
    planIds.includes(workout.id)
  );

  const savedWorkouts = workouts.filter((workout) =>
    savedIds.includes(workout.id)
  );

  const totalMinutes = planWorkouts.reduce(
    (total, workout) =>
      total + parseInt(workout.duration),
    0
  );

  const totalCalories = planWorkouts.reduce(
    (total, workout) =>
      total + parseInt(workout.calories),
    0
  );

  return (
    <main className="min-h-screen bg-[#0d0f11]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-lime-400">
            Your Training
          </p>

          <h1 className="mt-1 text-2xl font-black uppercase text-white sm:text-3xl">
            My Plan
          </h1>

          <p className="mt-2 text-[8px] leading-4 text-gray-500 sm:text-[9px]">
            Manage your planned and saved workouts.
          </p>
        </div>

        {!loaded ? (
          <div className="flex min-h-[350px] items-center justify-center rounded-lg border border-dashed border-[#303338]">
            <p className="animate-pulse text-[9px] font-bold uppercase text-gray-500">
              Loading...
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#24272c] bg-[#15181c] p-4">
                <p className="text-[7px] font-bold uppercase text-gray-600">
                  Exercises
                </p>

                <p className="mt-1 text-xl font-black text-white">
                  {planWorkouts.length}
                </p>
              </div>

              <div className="rounded-lg border border-[#24272c] bg-[#15181c] p-4">
                <p className="text-[7px] font-bold uppercase text-gray-600">
                  Minutes
                </p>

                <p className="mt-1 text-xl font-black text-white">
                  {totalMinutes}
                </p>
              </div>

              <div className="rounded-lg border border-[#24272c] bg-[#15181c] p-4">
                <p className="text-[7px] font-bold uppercase text-gray-600">
                  Calories
                </p>

                <p className="mt-1 text-xl font-black text-white">
                  {totalCalories}
                </p>
              </div>
            </div>

            <div className="mb-6 flex border-b border-[#24272c]">
              <button
                type="button"
                onClick={() => setActiveTab("plan")}
                className={`px-4 py-3 text-[8px] font-black uppercase ${
                  activeTab === "plan"
                    ? "border-b-2 border-lime-400 text-lime-400"
                    : "text-gray-600"
                }`}
              >
                Today&apos;s Plan
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`px-4 py-3 text-[8px] font-black uppercase ${
                  activeTab === "saved"
                    ? "border-b-2 border-lime-400 text-lime-400"
                    : "text-gray-600"
                }`}
              >
                Saved
              </button>
            </div>

            {activeTab === "plan" ? (
              <section>
                {planWorkouts.length === 0 ? (
                  <div className="rounded-lg border border-[#24272c] bg-[#15181c] px-5 py-12 text-center">
                    <h3 className="text-sm font-black uppercase text-white">
                      Your Plan Is Empty
                    </h3>

                    <p className="mt-2 text-[8px] text-gray-500">
                      Add workouts from the workout details page.
                    </p>

                    <Link
                      href="/"
                      className="mt-4 inline-block rounded-sm bg-lime-400 px-4 py-2 text-[8px] font-black uppercase text-black"
                    >
                      Browse Workouts
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {planWorkouts.map((workout) => {
                      const isDone = doneIds.includes(
                        workout.id
                      );

                      return (
                        <div
                          key={workout.id}
                          className={isDone ? "opacity-60" : ""}
                        >
                          <WorkoutCard workout={workout} />

                          <div className="mt-2 grid grid-cols-2 gap-2">
                            <Link
                              href={`/workout/${workout.id}`}
                              className="border border-[#303338] py-2 text-center text-[7px] font-bold uppercase text-gray-300 hover:border-lime-400 hover:text-white"
                            >
                              View Details
                            </Link>

                            <button
                              type="button"
                              onClick={() =>
                                markAsDone(workout.id)
                              }
                              disabled={isDone}
                              className="border border-lime-400 py-2 text-[7px] font-bold uppercase text-lime-400 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {isDone
                                ? "✓ Done"
                                : "✓ Mark as Done"}
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromPlan(workout.id)
                            }
                            className="mt-2 w-full border border-[#303338] py-2 text-[7px] font-bold uppercase text-gray-500 hover:border-red-400 hover:text-red-400"
                          >
                            × Remove
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            ) : (
              <section>
                {savedWorkouts.length === 0 ? (
                  <div className="rounded-lg border border-[#24272c] bg-[#15181c] px-5 py-12 text-center">
                    <h3 className="text-sm font-black uppercase text-white">
                      No Saved Workouts
                    </h3>

                    <p className="mt-2 text-[8px] text-gray-500">
                      Save workouts from their details page to see them here.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {savedWorkouts.map((workout) => (
                      <div key={workout.id}>
                        <WorkoutCard workout={workout} />

                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <Link
                            href={`/workout/${workout.id}`}
                            className="border border-[#303338] py-2 text-center text-[7px] font-bold uppercase text-gray-300 hover:border-lime-400 hover:text-white"
                          >
                            View Details
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromSaved(workout.id)
                            }
                            className="border border-[#303338] py-2 text-[7px] font-bold uppercase text-gray-500 hover:border-red-400 hover:text-red-400"
                          >
                            × Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </section>
    </main>
  );
}
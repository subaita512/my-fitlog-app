"use client";

import { toast } from "sonner";

type WorkoutActionsProps = {
  workoutId: string;
};

export default function WorkoutActions({
  workoutId,
}: WorkoutActionsProps) {
  const addToPlan = () => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("fitlog-plan") || "[]"
      );

      const planIds: string[] = Array.isArray(stored) ? stored : [];

      if (planIds.includes(workoutId)) {
        toast.info("Workout is already in today's plan.");
        return;
      }

      if (planIds.length >= 5) {
        toast.error("Today's plan can contain only 5 workouts.");
        return;
      }

      const updated = [...planIds, workoutId];

      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify(updated)
      );

      window.dispatchEvent(
        new Event("fitlog-storage-update")
      );

      toast.success("Added to today's plan");
    } catch {
      toast.error("Could not add workout to your plan.");
    }
  };

  const saveForLater = () => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("fitlog-saved") || "[]"
      );

      const savedIds: string[] = Array.isArray(stored)
        ? stored
        : [];

      if (savedIds.includes(workoutId)) {
        toast.info("Workout is already saved.");
        return;
      }

      const updated = [...savedIds, workoutId];

      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify(updated)
      );

      window.dispatchEvent(
        new Event("fitlog-storage-update")
      );

      toast.success("Workout saved for later");
    } catch {
      toast.error("Could not save workout.");
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
      <button
        type="button"
        onClick={addToPlan}
        className="rounded-sm bg-lime-400 px-4 py-3 text-[8px] font-black uppercase text-black transition hover:bg-lime-300"
      >
        + Add to Today&apos;s Plan
      </button>

      <button
        type="button"
        onClick={saveForLater}
        className="rounded-sm border border-[#303338] px-4 py-3 text-[8px] font-black uppercase text-gray-300 transition hover:border-lime-400 hover:text-white"
      >
        ☆ Save for Later
      </button>
    </div>
  );
}
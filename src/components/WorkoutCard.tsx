import Image from "next/image";

type Workout = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  duration: string;
  calories: string;
  rating: string;
};

export default function WorkoutCard({
  workout,
}: {
  workout: Workout;
}) {
  return (
    <a
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-lg border border-[#24272c] bg-[#15181c] transition hover:border-lime-400"
    >
      <div className="relative h-32 overflow-hidden">
        <Image
          src="/workout-card.png"
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {workout.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-lime-400 px-2 py-1 text-[6px] font-black uppercase text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="text-[6px] font-bold uppercase text-lime-400">
            {workout.category}
          </span>

          <span className="text-[7px] text-gray-500">
            ★ {workout.rating}
          </span>
        </div>

        <h3 className="mt-1 text-[10px] font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-[7px] leading-4 text-gray-600">
          {workout.description}
        </p>

        <div className="mt-3 flex gap-3 text-[6px] text-gray-500">
          <span>◷ {workout.duration}</span>
          <span>🔥 {workout.calories}</span>
        </div>
      </div>
    </a>
  );
}
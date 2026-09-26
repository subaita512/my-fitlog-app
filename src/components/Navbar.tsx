import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/fitlog-icon.png"
            alt="FitLog"
            width={16}
            height={16}
          />

          <span className="text-xs font-bold text-white">
            FITLOG
          </span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/"
            className="rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-black"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-xs text-gray-500 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        <button
          type="button"
          className="text-xs text-gray-500 hover:text-white"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}
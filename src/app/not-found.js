
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-[#0a0a0b]">
            <div className="w-full max-w-3xl text-center">

                {/* Decorative Tile Pattern */}
                <div className="flex justify-center mb-10">
                    <div className="grid grid-cols-2 gap-2 rotate-12">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5" />
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black dark:bg-white" />
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black dark:bg-white" />
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5" />
                    </div>
                </div>

                {/* 404 */}
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4">
                    404 — Tile Not Found
                </p>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Looks like this space
                    <span className="block text-gray-400 dark:text-gray-500">
                        is still under design.
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-xl mx-auto mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    The page you&apos;re looking for doesn&apos;t exist or may have been
                    moved. Let&apos;s get you back to a beautifully designed space.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center
                        px-6 py-3 rounded-full
                        bg-black text-white
                        dark:bg-white dark:text-black
                        text-sm font-medium
                        transition-all duration-200
                        hover:scale-[1.02]
                        hover:shadow-lg"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/tiles"
                        className="w-full sm:w-auto inline-flex items-center justify-center
                        px-6 py-3 rounded-full
                        border border-gray-200 dark:border-white/10
                        text-gray-900 dark:text-white
                        text-sm font-medium
                        transition-all duration-200
                        hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                        Explore Tiles
                    </Link>
                </div>

                {/* Brand */}
                <div className="mt-16">
                    <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        Tessera
                    </span>

                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                        Transform Your Space, Tile by Tile.
                    </p>
                </div>
            </div>
        </main>
    );
}


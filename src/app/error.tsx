"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In a real app, we would log the error to an error reporting service
    console.error("Uncaught error:", error);
  }, [error]);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-white dark:bg-black flex flex-col items-center justify-center z-200 px-6 text-center transition-colors duration-500">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] -z-10 rounded-full" />

      <div className="flex flex-col items-center max-w-xl relative animate-in fade-in zoom-in duration-700">
        <div className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-10 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
          <FaExclamationTriangle className="text-purple-600 dark:text-purple-500 text-3xl animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-6 leading-none">
          Something <br /> went wrong.
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-md">
          An unexpected error occurred. Try refreshing the page or returning home.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => reset()}
            className="group flex items-center gap-3 px-10 py-4 bg-gray-900 dark:bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-600 dark:hover:bg-purple-500 transition-all duration-300 shadow-xl shadow-gray-900/10 dark:shadow-purple-600/20"
          >
            <FaRedo className="text-sm group-hover:rotate-180 transition-transform duration-700" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-3 px-10 py-4 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <FaHome className="text-sm" />
            <span>Go Home</span>
          </Link>
        </div>

        {error.digest && (
          <div className="mt-16">
            <span className="text-gray-400 dark:text-white/10 text-[10px] font-mono tracking-[0.3em] uppercase">
              Digest Code: {error.digest}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

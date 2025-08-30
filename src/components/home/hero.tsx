"use client";

interface HeroProps {
  activePattern?: string | null;
  setActivePattern?: (pattern: string | null) => void;
  theme: "light" | "dark";
}

export default function Hero({ theme }: HeroProps) {
  const isPatternDark = theme === "dark";

  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-18 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Main heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 sm:mb-3">
            <span
              className={`font-medium transition-colors duration-300 ${
                isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"
              }`}
            >
              Craft Beautiful
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight">
            <span
              className={`bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 ${
                isPatternDark
                  ? "from-neutral-100 via-slate-400 to-neutral-400"
                  : "from-neutral-900 via-slate-500 to-neutral-500 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
              }`}
            >
              Patterns Backgrounds
            </span>
          </h2>
        </div>

        {/* Description */}
        <p
          className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed transition-colors duration-300 px-4 sm:px-0 ${
            isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
          }`}
        >
          Professional-grade background patterns and gradients. Easily copy the
          code and seamlessly integrate it into your projects.
          <span className="block">Crafted with modern CSS and Tailwind</span>
        </p>
      </div>
    </section>
  );
}

import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
  description?: string;
  rightElement?: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  subtitle,
  description,
  rightElement,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <div className="flex items-end justify-between flex-wrap gap-8">
        <div>
          <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            <span className="h-px w-8 bg-emerald-400/60" />
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white leading-[1.2] tracking-tight">
            <span className="block">
              {title}
            </span>
            <span className="text-slate-950 dark:text-white block">
              {subtitle}
            </span>
          </h2>
        </div>

        {/* Right Side Content */}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            {description}
          </p>
        )}

        {rightElement && <div>{rightElement}</div>}
      </div>
    </div>
  );
};

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  inverted = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${
        centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div className={centered ? "flex justify-center" : "flex justify-start"}>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide uppercase ${
              inverted
                ? "bg-[#E6B85C]/20 text-[#E6B85C] border border-[#E6B85C]/30"
                : "bg-[#142A46]/10 text-[#142A46] border border-[#142A46]/15"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-4xl font-normal tracking-tight leading-tight ${
          inverted ? "text-white" : "text-[#142A46]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            inverted ? "text-slate-300" : "text-[#5A6578]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}


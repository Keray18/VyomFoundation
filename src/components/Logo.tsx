import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  withTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "dark",
  withTagline = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
    >
      {/* Emblem SVG */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#142A46] via-[#1D3D66] to-[#0B1726] p-2 shadow-sm ring-1 ring-[#E6B85C]/30">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Subtle sky arc */}
          <path
            d="M6 28C10 18 20 12 34 12"
            stroke="#E6B85C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Stylized 'V' for Vyom / open sky wings */}
          <path
            d="M12 16L20 28L28 16"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Rising star / spark */}
          <circle cx="20" cy="11" r="2.5" fill="#E6B85C" />
          <circle cx="20" cy="28" r="1.5" fill="#E6B85C" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif text-xl font-bold tracking-tight leading-none ${
            isLight ? "text-white" : "text-[#142A46]"
          }`}
        >
          VYOM <span className="font-sans font-medium text-xs tracking-widest uppercase text-[#E6B85C] ml-1">Foundation</span>
        </span>
        {withTagline && (
          <span
            className={`text-[10px] tracking-wide mt-1 font-medium italic ${
              isLight ? "text-slate-300" : "text-[#5A6578]"
            }`}
          >
            &ldquo;Sheltering every cause together&rdquo;
          </span>
        )}
      </div>
    </Link>
  );
}

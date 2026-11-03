"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, ChevronDown, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Work",
    href: "/our-work",
    dropdown: [
      { name: "Overview & Vision", href: "/our-work", desc: "Our educational roadmap & priorities" },
      { name: "Project Samarth (Flagship)", href: "/our-work/project-samarth", desc: "Foundational learning for classes 5–12" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    dropdown: [
      { name: "Overview", href: "/get-involved", desc: "Find your way to contribute" },
      { name: "Volunteer as a Teacher", href: "/get-involved/volunteer", desc: "Teach 3 days a week via Google Meet" },
      { name: "Internships (6 Roles)", href: "/get-involved/internships", desc: "Build experience in social impact" },
      { name: "Become a Partner", href: "/get-involved/partner", desc: "Schools, NGOs & institutions" },
      { name: "Support Education", href: "/get-involved/support", desc: "Support our learning initiatives" },
    ],
  },
  { name: "Stories & Impact", href: "/stories" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5]/80 py-2.5"
          : "bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#E8E2D5]/50 py-3.5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-[#142A46] font-semibold bg-[#142A46]/5"
                          : "text-[#242B33] hover:text-[#142A46] hover:bg-[#142A46]/5"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5 text-[#5A6578] transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-1 w-64 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                      <div className="rounded-xl border border-[#E8E2D5] bg-white p-2 shadow-xl ring-1 ring-black/5">
                        {link.dropdown.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block rounded-lg px-3 py-2 text-xs transition-colors ${
                                isSubActive
                                  ? "bg-[#142A46]/10 text-[#142A46] font-semibold"
                                  : "text-[#242B33] hover:bg-[#F5F1E8] hover:text-[#142A46]"
                              }`}
                            >
                              <div className="font-semibold text-sm text-[#142A46]">
                                {subItem.name}
                              </div>
                              <div className="text-[11px] text-[#5A6578] mt-0.5">
                                {subItem.desc}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-[#142A46] font-semibold bg-[#142A46]/5"
                      : "text-[#242B33] hover:text-[#142A46] hover:bg-[#142A46]/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/our-work/project-samarth"
              className="text-xs font-semibold text-[#142A46] hover:text-[#0E1D31] px-3 py-2 rounded-lg hover:bg-[#E8E2D5]/40 transition"
            >
              Project Samarth
            </Link>

            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-lg bg-[#142A46] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#1D3D66] transition-all hover:shadow-md"
            >
              <HeartHandshake className="h-4 w-4 text-[#E6B85C]" />
              <span>Join Our Mission</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-1 rounded-lg bg-[#142A46] px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
            >
              <span>Join</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#142A46] hover:bg-[#142A46]/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#E8E2D5] bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.dropdown) {
                const isSubExpanded = openDropdown === link.name;
                return (
                  <div key={link.name} className="py-1">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isSubExpanded ? null : link.name)
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[#142A46] hover:bg-[#F5F1E8]"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isSubExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isSubExpanded && (
                      <div className="mt-1 ml-3 space-y-1 border-l-2 border-[#E6B85C] pl-3">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1.5 text-xs font-medium text-[#242B33] hover:text-[#142A46]"
                          >
                            <span className="font-semibold block">{subItem.name}</span>
                            <span className="text-[11px] text-[#5A6578]">{subItem.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#142A46]/10 text-[#142A46] font-semibold"
                      : "text-[#242B33] hover:bg-[#F5F1E8]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E8E2D5] flex flex-col gap-2.5">
            <Link
              href="/our-work/project-samarth"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#142A46] py-2.5 text-xs font-semibold text-[#142A46]"
            >
              <Sparkles className="h-4 w-4 text-[#E6B85C]" />
              <span>Explore Project Samarth</span>
            </Link>
            <Link
              href="/get-involved"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#142A46] py-2.5 text-xs font-semibold text-white shadow-sm"
            >
              <span>Get Involved & Apply</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


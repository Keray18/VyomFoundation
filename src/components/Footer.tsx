import Link from "next/link";
import Logo from "./Logo";
import { Mail, MapPin, Heart, Shield, ArrowUpRight, GraduationCap } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#142A46] text-white border-t border-[#1D3D66] mt-auto">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#E6B85C] via-[#648B78] to-[#E6B85C]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Vyom Foundation is a youth-led organization committed to strengthening educational access. Through Project Samarth, we connect passionate volunteer teachers with students to bridge foundational learning gaps.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#E6B85C] shrink-0" />
                <span>Mathura, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#E6B85C] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-[#648B78] shrink-0" />
                <span>Flagship: Project Samarth (Classes 5–12)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D3D66]/80 px-3 py-1 text-[11px] font-medium text-[#E6B85C] border border-[#E6B85C]/20">
                <Shield className="h-3.5 w-3.5" />
                <span>Established March 2026 • Youth-Led</span>
              </span>
            </div>
          </div>

          {/* Column 2: About & Vision */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E6B85C]">
              About Vyom
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Origins
                </Link>
              </li>
              <li>
                <Link href="/about#vision-mission" className="hover:text-white transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/about#our-approach" className="hover:text-white transition-colors">
                  The 4E Approach
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-white transition-colors">
                  Core Values
                </Link>
              </li>
              <li>
                <Link href="/about#transparency" className="hover:text-white transition-colors">
                  Registration & Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Program */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E6B85C]">
              Project Samarth
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/our-work/project-samarth" className="hover:text-white transition-colors">
                  Program Overview
                </Link>
              </li>
              <li>
                <Link href="/our-work/project-samarth#need" className="hover:text-white transition-colors">
                  The Learning Gap Need
                </Link>
              </li>
              <li>
                <Link href="/our-work/project-samarth#how-it-works" className="hover:text-white transition-colors">
                  6-Step Learning Flow
                </Link>
              </li>
              <li>
                <Link href="/our-work/project-samarth#beyond-academics" className="hover:text-white transition-colors">
                  Beyond Academics
                </Link>
              </li>
              <li>
                <Link href="/our-work/project-samarth#reach" className="hover:text-white transition-colors">
                  Active Cohorts & Expansion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E6B85C]">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/get-involved/volunteer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Volunteer as Teacher</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/internships"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Internships (6 Roles)</span>
                  <span className="text-[10px] bg-[#E6B85C] text-[#142A46] font-bold px-1.5 py-0.5 rounded">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/get-involved/partner" className="hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/get-involved/support" className="hover:text-white transition-colors">
                  Support Our Mission
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white transition-colors">
                  Stories & Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Foundation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Impact Transparency Note */}
        <div className="mt-12 rounded-xl bg-[#0B1726]/60 border border-[#1D3D66] p-4 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#E6B85C] animate-pulse shrink-0" />
            <p>
              <strong className="text-white">Transparency Commitment:</strong> Online learning cohorts are currently active for students in Odisha & Delhi. Offline learning centres in Mathura are in active planning stages.
            </p>
          </div>
          <Link
            href="/about#transparency"
            className="text-[#E6B85C] hover:underline shrink-0 font-medium"
          >
            Read Our Transparency Policy →
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[#1D3D66] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {SITE_CONFIG.foundedYear} Vyom Foundation. All rights reserved. &ldquo;Sheltering every cause together&rdquo;.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

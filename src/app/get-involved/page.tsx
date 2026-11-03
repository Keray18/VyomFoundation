import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  GraduationCap,
  Layers,
  HeartHandshake,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Building2,
  Users2,
} from "lucide-react";
import { INTERNSHIP_ROLES } from "@/data/content";

export const metadata = {
  title: "Get Involved — Join Vyom Foundation",
  description:
    "Discover how you can contribute to Vyom Foundation: volunteer as a teacher, apply for an internship, explore institutional partnerships, or support education.",
};

export default function GetInvolvedHubPage() {
  const activeInternshipsCount = INTERNSHIP_ROLES.filter(
    (r) => r.status === "Actively Recruiting"
  ).length;

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <HeartHandshake className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Participation & Community</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Every Hand Strengthens the Roof.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                Vyom Foundation was built on community participation. Whether you have three hours a week to mentor a child, technical skills to power our team, or an organization eager to collaborate—there is a role for you.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Core Pathways */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pathway 1: Volunteer Teacher */}
              <div className="rounded-3xl border-2 border-[#142A46] bg-[#FDFBF7] p-8 sm:p-10 flex flex-col justify-between shadow-sm card-hover">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                      Ongoing Intake
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142A46]">
                    Volunteer as a Teacher
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                    Teach a small batch of 4 to 8 students online via Google Meet. Spend 3 evenings a week helping students in classes 5–12 master foundational math, science, or English.
                  </p>

                  <div className="space-y-2 text-xs text-[#242B33] pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>3 sessions per week (approx. 4-5 hours total)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Complete lesson outlines and diagnostic rubrics provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Official Certificate of Volunteering upon cohort completion</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/volunteer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#142A46] py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D3D66] transition"
                  >
                    <span>View Volunteer Requirements & Apply</span>
                    <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
                  </Link>
                </div>
              </div>

              {/* Pathway 2: Internships */}
              <div className="rounded-3xl border-2 border-[#E6B85C] bg-[#FDFBF7] p-8 sm:p-10 flex flex-col justify-between shadow-sm card-hover">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B85C] text-[#142A46]">
                      <Layers className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800 border border-amber-200">
                      {activeInternshipsCount} Roles Recruiting
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142A46]">
                    Join as an Intern
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                    Gain practical, hands-on experience in nonprofit management, design, research, content, and growth with our youth leadership team.
                  </p>

                  <div className="space-y-2 text-xs text-[#242B33] pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#E6B85C]" />
                      <span>Roles in Founder&apos;s Office, Design, Writing, Marketing & Research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#E6B85C]" />
                      <span>Flexible 8-15 hours/week remote arrangement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#E6B85C]" />
                      <span>Formal Experience Certificate & Letter of Recommendation</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/internships"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#142A46] py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D3D66] transition"
                  >
                    <span>Browse 6 Internship Openings</span>
                    <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
                  </Link>
                </div>
              </div>

              {/* Pathway 3: Become a Partner */}
              <div className="rounded-3xl border border-[#E8E2D5] bg-[#FDFBF7] p-8 sm:p-10 flex flex-col justify-between shadow-sm card-hover">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#648B78] text-white">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#648B78]/10 px-3 py-1 text-[11px] font-bold text-[#648B78]">
                      Institutional
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142A46]">
                    Become a Partner
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                    Collaborate with Vyom Foundation as a school, university NSS/community cell, registered NGO, or corporate sponsor to scale foundational learning.
                  </p>

                  <div className="space-y-2 text-xs text-[#242B33] pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Student batch referrals and diagnostic screening</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Campus volunteer drives and intern recruitment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Curriculum exchange and community center co-hosting</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/partner"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#142A46] bg-white py-3 text-xs font-semibold text-[#142A46] hover:bg-[#FAF4E6] transition"
                  >
                    <span>Explore Institutional Partnership</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Pathway 4: Support Education */}
              <div className="rounded-3xl border border-[#E8E2D5] bg-[#FDFBF7] p-8 sm:p-10 flex flex-col justify-between shadow-sm card-hover">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D3D66] text-[#E6B85C]">
                      <Award className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#142A46]/10 px-3 py-1 text-[11px] font-bold text-[#142A46]">
                      Direct Support
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142A46]">
                    Support Education
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                    Contribute learning supplies, books, tablets, or sponsor learning camps directly. Learn about our transparent, direct contact-based donation process.
                  </p>

                  <div className="space-y-2 text-xs text-[#242B33] pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Notebook, stationery & book collection drives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Digital device support for rural student pods</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#648B78]" />
                      <span>Strict financial transparency policy</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/support"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#142A46] bg-white py-3 text-xs font-semibold text-[#142A46] hover:bg-[#FAF4E6] transition"
                  >
                    <span>Support Our Educational Mission</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

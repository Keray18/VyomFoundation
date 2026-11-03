import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  ArrowRight,
  Laptop,
  Smile,
  Target,
  Compass,
  CheckCircle,
  Clock,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const metadata = {
  title: "Our Work — Educational Initiatives & Roadmap",
  description:
    "Explore Vyom Foundation's educational programs, centered around our flagship remedial initiative Project Samarth, supporting students in classes 5–12.",
};

export default function OurWorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <BookOpen className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Our Educational Scope</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Education Where Foundations Are Built.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                At Vyom Foundation, we believe that real educational equality starts with mastering the fundamentals. We focus our energy on accessible, structured learning support for students from underserved communities.
              </p>
            </div>
          </div>
        </section>

        {/* Flagship Feature: Project Samarth */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-[#142A46] bg-[#FDFBF7] p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#142A46] px-3.5 py-1 text-xs font-bold text-[#E6B85C]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Flagship Educational Initiative</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#142A46] leading-tight">
                    Project Samarth — Empowering Students Through Education
                  </h2>

                  <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed">
                    Project Samarth provides remedial, foundational learning support to students in <strong>classes 5 through 12</strong>. Through online cohorts on Google Meet, dedicated volunteer teachers help students bridge multi-grade learning gaps in mathematics, science, and languages.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                    <div className="flex items-center gap-2 text-[#142A46] font-semibold">
                      <CheckCircle className="h-4 w-4 text-[#648B78]" />
                      <span>3 Sessions / Week per Batch</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#142A46] font-semibold">
                      <CheckCircle className="h-4 w-4 text-[#648B78]" />
                      <span>Small Peer Cohorts (4-8 kids)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#142A46] font-semibold">
                      <CheckCircle className="h-4 w-4 text-[#648B78]" />
                      <span>Diagnostic Gap Assessments</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#142A46] font-semibold">
                      <CheckCircle className="h-4 w-4 text-[#648B78]" />
                      <span>Beyond Academics Modules</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/our-work/project-samarth"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#142A46] px-6 py-3.5 text-xs font-semibold text-white shadow-md hover:bg-[#1D3D66] transition"
                    >
                      <span>Explore Detailed Samarth Model</span>
                      <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
                    </Link>

                    <Link
                      href="/get-involved/volunteer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#142A46] bg-white px-6 py-3.5 text-xs font-semibold text-[#142A46] hover:bg-[#FAF4E6] transition"
                    >
                      <GraduationCap className="h-4 w-4 text-[#E6B85C]" />
                      <span>Apply to Teach a Batch</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-[#E8E2D5] bg-white p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold text-[#E6B85C] uppercase tracking-wider block">
                      Active Online Presence
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#142A46]">
                      Odisha & Delhi Cohorts
                    </h3>
                    <p className="text-xs text-[#5A6578]">
                      Our digital learning model currently pairs volunteer educators from various states with eager learners in Odisha and Delhi, proving that distance is no barrier to patient teaching.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E8E2D5] bg-white p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold text-[#648B78] uppercase tracking-wider block">
                      Pedagogical Distinction
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#142A46]">
                      Remedial First, Grade-Level Second
                    </h3>
                    <p className="text-xs text-[#5A6578]">
                      We meet the child where they are. If a 9th grader does not understand integers, we do not force 9th-grade algebra until the basics are secure and mastered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap (Distinction of Current vs Planned) */}
        <section className="py-20 bg-[#FAF4E6]/50 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Strategic Roadmap"
              title="Our Future Educational Milestones"
              description="To maintain our standard of trust, we clearly designate the initiatives below as planned future milestones, not active facilities."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <span className="inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                    Phase 2 Planning
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Physical Learning Centres in Mathura
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Setting up neighborhood after-school learning spaces in semi-urban and rural Mathura equipped with solar power, offline tablets, and physical libraries.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-[11px] text-[#5A6578]">
                  Target: 2027 Cohort Pilot
                </div>
              </div>

              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <span className="inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                    Phase 2 Planning
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Hands-On STEM Mobile Kits
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Low-cost science experiment boxes enabling students to conduct simple physics, chemistry, and biology experiments with household items.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-[11px] text-[#5A6578]">
                  Curriculum Design Underway
                </div>
              </div>

              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <span className="inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                    Phase 3 Planning
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Youth Peer Mentorship Circles
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Pairing high-school graduates with university mentors for guidance on vocational options, college entrance applications, and career readiness.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-[11px] text-[#5A6578]">
                  Mentorship Framework in Design
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#142A46] hover:underline"
              >
                <span>Interested in partnering on our roadmap? Connect with our team</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#E6B85C]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


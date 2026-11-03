import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import RoleDirectory from "@/components/internships/RoleDirectory";
import { INTERNSHIP_ROLES } from "@/data/content";
import { Layers, Sparkles, Award, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Internships at Vyom Foundation — 6 Opportunities",
  description:
    "Explore internship opportunities at Vyom Foundation: Founder's Office, Graphic Design, Content Writing, Digital Marketing, Research, and Pride & Inclusion.",
};

export default function InternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <Layers className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Student & Youth Internships</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Build Practical Experience with Social Purpose.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                Work alongside our youth leadership team to expand educational opportunities across India. Gain verified credentials, real-world ownership, and professional mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition Highlights */}
        <section className="py-12 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#142A46] text-[#E6B85C]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-sm font-bold text-[#142A46]">
                    Verified Recognition
                  </h2>
                  <p className="text-xs text-[#5A6578] mt-0.5">
                    Experience Certificate & personalized Letter of Recommendation highlighting your direct deliverables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#648B78] text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-sm font-bold text-[#142A46]">
                    Student-Friendly Hours
                  </h2>
                  <p className="text-xs text-[#5A6578] mt-0.5">
                    Designed for college students with flexible 8-15 hours per week remote working rhythms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E6B85C] text-[#142A46]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-sm font-bold text-[#142A46]">
                    Real Ownership
                  </h2>
                  <p className="text-xs text-[#5A6578] mt-0.5">
                    No busywork. Lead campaigns, draft research papers, interview learners, and shape organization strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Directory */}
        <section className="py-20 bg-[#FAF4E6]/30 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Available Positions"
              title="Current Internship Openings"
              description="Click on any role to explore key responsibilities, required skills, and submit your application."
            />

            <div className="mt-14">
              <RoleDirectory roles={INTERNSHIP_ROLES} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


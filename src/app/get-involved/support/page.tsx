import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  Heart,
  BookOpen,
  Laptop,
  CheckCircle,
  Shield,
  Mail,
  ArrowRight,
  Info,
  Gift,
  Users2,
  Calendar,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const metadata = {
  title: "Support Education — Vyom Foundation",
  description:
    "Learn how you can support Vyom Foundation's educational mission through learning materials, devices, mentorship, and direct dialogue.",
};

const SUPPORT_MODES = [
  {
    icon: BookOpen,
    title: "Learning Supplies & Books",
    desc: "Donate grade-appropriate storybooks, math workbooks, stationery, and drawing supplies for our community cohorts.",
  },
  {
    icon: Laptop,
    title: "Digital Devices for Learning",
    desc: "Contribute smartphones, refurbished tablets, or laptops that enable rural learning pods in Odisha and Mathura to join Google Meet classes.",
  },
  {
    icon: Calendar,
    title: "Sponsor Learning Camps",
    desc: "Cover material costs, art supplies, and healthy refreshments for our weekend and seasonal experiential learning workshops.",
  },
  {
    icon: Users2,
    title: "Professional Skills & Mentorship",
    desc: "Offer specialized training workshops for our volunteer educators, or advisory mentorship for our youth founding team.",
  },
];

export default function SupportEducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <Heart className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Supporting the Cause</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Support Meaningful Education.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                Invest in a child&apos;s foundational learning journey. We believe in high-transparency, purposeful contributions where every rupee, device, and book directly touches a classroom.
              </p>
            </div>
          </div>
        </section>

        {/* Essential Transparency & Compliance Notice */}
        <section className="py-8 bg-[#FAF4E6] border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-2 border-[#E6B85C]/60 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                <Shield className="h-6 w-6" />
              </div>
              <div className="space-y-1 text-xs text-[#242B33]">
                <strong className="text-sm text-[#142A46] block">
                  Important Notice on Donations & Financial Transparency
                </strong>
                <p className="text-[#5A6578] leading-relaxed">
                  Vyom Foundation does not currently process automated online payment gateway donations or claim premature tax deductions (Section 80G/12A). In strict adherence to our transparency charter, all financial or in-kind support is currently handled via <strong>direct contact with the foundation leadership</strong>. Online payment functionality will only be introduced post statutory compliance verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Support */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Meaningful Contributions"
              title="Ways You Can Make a Difference"
              description="Direct, high-impact ways to support students and community learning batches."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUPPORT_MODES.map((mode) => {
                const Icon = mode.icon;
                return (
                  <div
                    key={mode.title}
                    className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover"
                  >
                    <div className="space-y-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#142A46]">
                        {mode.title}
                      </h3>
                      <p className="text-xs text-[#5A6578] leading-relaxed">
                        {mode.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Support Contact Card */}
            <div className="mt-16 rounded-3xl border-2 border-[#142A46] bg-[#142A46] text-white p-8 sm:p-12 max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6B85C]/20 border border-[#E6B85C]/30 px-3.5 py-1 text-xs font-semibold text-[#E6B85C]">
                <Mail className="h-3.5 w-3.5" />
                <span>Contact-Based Support Process</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
                Connect Directly with Vyom Foundation
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                If you or your organization would like to support student batches, sponsor learning materials, or discuss direct contributions, please write to our founding team. We will share a detailed project docket and coordinate logistics transparently.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Supporting Vyom Foundation Educational Mission`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6B85C] px-6 py-3.5 text-xs font-bold text-[#142A46] shadow-md hover:bg-[#DDA843] transition"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email: {SITE_CONFIG.email}</span>
                </a>

                <Link
                  href="/contact?topic=support"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
                >
                  <span>Submit Support Enquiry Form</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


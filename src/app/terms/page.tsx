import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const metadata = {
  title: "Terms and Conditions — Vyom Foundation",
  description:
    "Terms of use, community standards, and operational guidelines for Vyom Foundation website and educational programs.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-14 pb-16 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
              <FileCheck className="h-3.5 w-3.5 text-[#E6B85C]" />
              <span>Legal Guidelines</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#142A46] tracking-tight">
              Terms & Conditions
            </h1>

            <p className="text-xs sm:text-sm text-[#5A6578]">
              Effective Date: March 2026 • Governing Public Website Usage
            </p>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm text-[#5A6578] space-y-8 leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. Vyom Foundation is an autonomous youth-led non-profit educational initiative founded in Mathura, Uttar Pradesh, India.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                2. Educational Purpose & Scope
              </h2>
              <p>
                This website serves exclusively to communicate Vyom Foundation&apos;s educational initiatives, facilitate volunteer and internship applications, and enable community dialogue. Information presented regarding Project Samarth, ongoing cohorts, and future roadmap represents our genuine organizational intent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                3. Volunteer & Contributor Code of Ethics
              </h2>
              <p>
                All individuals submitting applications as volunteer teachers, interns, or mentors agree to maintain the highest standards of integrity, respect, and child safety. Any form of harassment, discrimination, or unauthorized commercial exploitation of students is strictly prohibited and grounds for immediate termination and legal reporting.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                4. Intellectual Property
              </h2>
              <p>
                The name Vyom Foundation, the emblem logo, the tagline &ldquo;Sheltering every cause together&rdquo;, and curriculum diagnostic rubrics developed by our research contributors remain the intellectual property of the foundation. Content may be shared for non-commercial educational purposes with proper attribution.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                5. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Republic of India and the jurisdiction of courts in Uttar Pradesh.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E2D5]">
              <p className="text-xs text-[#5A6578]">
                For questions regarding these terms, please contact: <strong className="text-[#142A46]">{SITE_CONFIG.email}</strong>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


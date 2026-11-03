import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const metadata = {
  title: "Privacy Policy — Vyom Foundation",
  description:
    "Privacy Policy of Vyom Foundation: our commitment to child protection, data privacy, and ethical handling of volunteer and student information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-14 pb-16 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
              <Shield className="h-3.5 w-3.5 text-[#E6B85C]" />
              <span>Transparency & Ethics</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#142A46] tracking-tight">
              Privacy Policy & Child Protection
            </h1>

            <p className="text-xs sm:text-sm text-[#5A6578]">
              Effective Date: March 2026 • Last Updated for Public Release
            </p>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm text-[#5A6578] space-y-8 leading-relaxed">
            <div className="rounded-2xl border border-[#E6B85C]/40 bg-[#FAF4E6]/60 p-6 space-y-2 text-[#242B33]">
              <strong className="text-sm font-serif text-[#142A46] block">
                Our Core Child Protection Principle:
              </strong>
              <p>
                As an educational foundation working with school-age students in classes 5–12, Vyom Foundation upholds the highest ethical standards of child safety. We never sell, monetize, or publicly disclose the personal contact details, residential addresses, or sensitive academic records of participating children.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                1. Information We Collect
              </h2>
              <p>We collect personal information through our public web forms strictly for functional non-profit communication:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Volunteer & Intern Applications:</strong> Name, email address, phone number, academic background, teaching preferences, resume links, and motivation statements.</li>
                <li><strong>Partnership Enquiries:</strong> Organization name, contact person details, official email, phone, and proposed collaboration models.</li>
                <li><strong>General Enquiries:</strong> Name, contact email, subject line, and user-provided messages.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                2. How We Use Collected Information
              </h2>
              <p>Data collected is used exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Evaluating and onboarding prospective volunteer educators and interns.</li>
                <li>Organizing students into appropriate diagnostic cohorts and Google Meet batches.</li>
                <li>Responding to partnership inquiries and donor communications.</li>
                <li>Issuing official certificates of volunteering and internship completion.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                3. Photographs & Media Consent
              </h2>
              <p>
                Any photograph, video recording, or student voice reflection featured across our website, reports, or social channels is published only with explicit parental or institutional guardian consent. We avoid publishing children&apos;s full surnames or identifying school badge metadata without permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                4. Data Storage & Security
              </h2>
              <p>
                Form submissions are handled via secure HTTPS server-side APIs and stored within restricted organizational access channels. Only authorized coordinators of Vyom Foundation have access to applicant credentials.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#142A46]">
                5. Contact Regarding Privacy
              </h2>
              <p>
                If you have questions regarding our data protection policies or wish to request the removal of your or your child&apos;s data, please contact our privacy coordinator at:
              </p>
              <p className="font-semibold text-[#142A46]">
                Email: <a href={`mailto:${SITE_CONFIG.email}`} className="underline">{SITE_CONFIG.email}</a>
                <br />
                Address: Mathura, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

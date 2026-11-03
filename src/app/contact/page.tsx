import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import Accordion from "@/components/ui/Accordion";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  GraduationCap,
  Building2,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const metadata = {
  title: "Contact Us — Reach Vyom Foundation",
  description:
    "Contact Vyom Foundation in Mathura, Uttar Pradesh. Enquire about Project Samarth batches, volunteer teaching, internships, or partnerships.",
};

const GENERAL_FAQS = [
  {
    question: "How can parents enroll their children in Project Samarth?",
    answer:
      "Parents or guardians can write to us via the contact form choosing 'Project Samarth (Student/Parent)' or email us directly at vyomfoundationofficial@gmail.com with the student's grade, current school, and subject requiring foundational help. Our coordinator will contact you to schedule a friendly diagnostic session.",
  },
  {
    question: "Where is Vyom Foundation headquartered?",
    answer:
      "Vyom Foundation is based in Mathura, Uttar Pradesh, India. While our roots and planned offline centers are in Mathura, our active online cohorts reach students in multiple locations including Odisha and Delhi.",
  },
  {
    question: "How quickly does the team respond to messages?",
    answer:
      "Our youth coordination team typically responds to all general, volunteer, and partnership inquiries within 24 to 48 business hours.",
  },
  {
    question: "Can organizations propose CSR or institutional collaboration?",
    answer:
      "Yes. We welcome conversations with academic institutions, CSR teams, and non-profits. Please submit the partnership form on our website or email vyomfoundationofficial@gmail.com with your institutional scope.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <MessageSquare className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Get in Touch</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                We Would Love to Hear from You.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                Have a question about Project Samarth, want to volunteer, explore an internship, or propose a partnership? Send us a message and our team will connect with you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Shortcuts */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Contact & Fast Shortcuts */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionHeading
                    badge="Direct Channels"
                    title="Official Coordinates"
                    description="Reach out directly through official correspondence channels."
                  />
                </div>

                <div className="space-y-4">
                  {/* Email Card */}
                  <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2 card-hover">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6578]">
                          Official Email
                        </span>
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="font-serif text-base font-bold text-[#142A46] hover:underline block"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2 card-hover">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#648B78] text-white">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6578]">
                          Headquarters
                        </span>
                        <p className="font-serif text-base font-bold text-[#142A46]">
                          Mathura, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Response Note */}
                  <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2 card-hover">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6B85C] text-[#142A46]">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6578]">
                          Response Standard
                        </span>
                        <p className="text-xs text-[#242B33]">
                          Inquiries reviewed within 24 to 48 business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Shortcuts */}
                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FAF4E6]/50 p-6 space-y-4">
                  <h3 className="font-serif text-base font-bold text-[#142A46]">
                    Dedicated Inquiry Shortcuts
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/get-involved/volunteer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E2D5] text-xs font-semibold text-[#142A46] hover:bg-[#FDFBF7] transition"
                    >
                      <span className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-[#E6B85C]" />
                        <span>Apply to Volunteer as a Teacher</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                      href="/get-involved/internships"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E2D5] text-xs font-semibold text-[#142A46] hover:bg-[#FDFBF7] transition"
                    >
                      <span className="flex items-center gap-2">
                        <HeartHandshake className="h-4 w-4 text-[#648B78]" />
                        <span>View 6 Open Internship Roles</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                      href="/get-involved/partner"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E2D5] text-xs font-semibold text-[#142A46] hover:bg-[#FDFBF7] transition"
                    >
                      <span className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-[#142A46]" />
                        <span>Institutional Partnership Proposal</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border-2 border-[#142A46] bg-white p-6 sm:p-8 shadow-xl">
                  <div className="border-b border-[#E8E2D5] pb-4 mb-6">
                    <span className="text-[11px] font-bold text-[#E6B85C] uppercase tracking-wider block">
                      Direct Communication
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#142A46] mt-1">
                      Send a Message to Vyom Foundation
                    </h2>
                    <p className="text-xs text-[#5A6578] mt-1">
                      Whether you are a student, educator, parent, or supporter, we welcome your thoughts.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* General FAQs */}
        <section className="py-20 bg-[#FAF4E6]/40 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Answers & Clarity"
              title="Frequently Asked Questions"
              description="Quick answers about our foundation and programs."
            />

            <div className="mt-12">
              <Accordion items={GENERAL_FAQS} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


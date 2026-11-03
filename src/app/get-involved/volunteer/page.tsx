import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import VolunteerForm from "@/components/forms/VolunteerForm";
import Accordion from "@/components/ui/Accordion";
import {
  GraduationCap,
  Clock,
  Video,
  CheckCircle,
  Award,
  Sparkles,
  Users2,
  Calendar,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Volunteer as a Teacher — Project Samarth",
  description:
    "Apply to become a volunteer teacher with Vyom Foundation. Teach students in classes 5–12 online three days a week and build lasting educational impact.",
};

const VOLUNTEER_FAQS = [
  {
    question: "What is the expected weekly time commitment?",
    answer:
      "Volunteer teachers commit to 3 sessions per week for their assigned batch, with each session lasting approximately 60 minutes. Together with brief lesson preparation and homework review, the commitment is roughly 4 to 5 hours per week.",
  },
  {
    question: "How are classes conducted?",
    answer:
      "All sessions are conducted online via Google Meet. You will be assigned a small batch of 4 to 8 students in classes 5–8, 9–10, or 11–12, matched according to your subject strengths.",
  },
  {
    question: "What subjects and classes can I teach?",
    answer:
      "Our primary focus is foundational mathematics, science, English grammar/reading, and social science. You can choose whether you prefer primary-to-middle school students (Classes 5–8) or board-level students (Classes 9–12).",
  },
  {
    question: "Do I receive a certificate of volunteering?",
    answer:
      "Yes. Upon successful completion of a cohort tenure (typically 3 months or a full school term) and maintaining consistent batch attendance, Vyom Foundation provides an official Certificate of Volunteering and performance commendation.",
  },
  {
    question: "Can working professionals and college students apply?",
    answer:
      "Absolutely. Most of our volunteer teachers are university undergraduates, postgraduates, and working professionals who teach during evening hours (typically between 5:00 PM and 8:30 PM).",
  },
];

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <GraduationCap className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Teaching Fellowship</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Volunteer as a Teacher with Project Samarth.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                Join our collective of passionate volunteer educators. Spend three evenings a week helping students from underserved backgrounds master foundational concepts and build lifelong academic confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Form Grid */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Role Details & Commitment */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionHeading
                    badge="Role Overview"
                    title="What You Will Teach & How It Works"
                    description="As a Samarth volunteer teacher, you are more than an instructor—you are an empathetic academic mentor."
                  />
                </div>

                {/* Key Pillars */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-[#142A46]">
                      <Clock className="h-4 w-4 text-[#E6B85C]" />
                      <span>3 Days a Week Batch Model</span>
                    </div>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      Sessions are organized across alternate weekdays (e.g. Mon-Wed-Fri or Tue-Thu-Sat) during evening hours. Batch schedules are coordinated around your university or work availability.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-[#142A46]">
                      <Users2 className="h-4 w-4 text-[#648B78]" />
                      <span>Micro-Batches (4 to 8 Students)</span>
                    </div>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      You will teach an intimate group of eager learners, ensuring you can hear every voice, answer every doubt, and track each student&apos;s individual progress.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-[#142A46]">
                      <Award className="h-4 w-4 text-[#142A46]" />
                      <span>Certification & Recognition</span>
                    </div>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      Receive a verifiable Certificate of Volunteering from Vyom Foundation along with personalized recommendations based on student retention and feedback.
                    </p>
                  </div>
                </div>

                {/* Requirements Checklist */}
                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FAF4E6]/50 p-6 space-y-3">
                  <h3 className="font-serif text-base font-bold text-[#142A46]">
                    Who We Are Looking For:
                  </h3>
                  <ul className="space-y-2 text-xs text-[#242B33]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>University students, graduates, educators, or working professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>Comfortable teaching classes 5–8, 9–10, or 11–12 in English/Hindi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>Consistent weekly commitment for at least 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>Patience, high empathy, and enthusiasm for child development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Embedded Volunteer Application Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border-2 border-[#142A46] bg-white p-6 sm:p-8 shadow-xl">
                  <div className="border-b border-[#E8E2D5] pb-4 mb-6">
                    <span className="text-[11px] font-bold text-[#E6B85C] uppercase tracking-wider block">
                      Teacher Intake Form
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#142A46] mt-1">
                      Volunteer Teacher Application
                    </h2>
                    <p className="text-xs text-[#5A6578] mt-1">
                      Fill out your details below. Our team reviews every application and schedules a brief onboarding call within 48 hours.
                    </p>
                  </div>

                  <VolunteerForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#FAF4E6]/40 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Common Questions"
              title="Frequently Asked Questions"
              description="Everything you need to know about teaching with Project Samarth."
            />

            <div className="mt-12">
              <Accordion items={VOLUNTEER_FAQS} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


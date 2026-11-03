import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users2,
  HeartHandshake,
  BookOpen,
  Calendar,
  CheckCircle,
  MapPin,
  Shield,
  Layers,
  Award,
  ChevronRight,
  Laptop,
  Smile,
  Compass,
} from "lucide-react";
import {
  SITE_CONFIG,
  TESTIMONIALS,
  SAMARTH_STEPS,
  INTERNSHIP_ROLES,
} from "@/data/content";

export const metadata = {
  title: "Vyom Foundation — Sheltering Every Cause Together",
  description:
    "A youth-led organization founded in Mathura, Uttar Pradesh, empowering students through Project Samarth, foundational learning, and dedicated volunteer teachers.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* SECTION 2: HERO */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E8E2D5]">
          {/* Subtle sky background gradient & ambient elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF4E6]/60 via-[#FDFBF7] to-white pointer-events-none" />
          <div className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-[#E6B85C]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-[#142A46]/5 blur-2xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Editorial Hero Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Brand Tagline Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#142A46]/5 border border-[#142A46]/10 px-4 py-1.5 text-xs font-semibold text-[#142A46]">
                  <Sparkles className="h-3.5 w-3.5 text-[#E6B85C]" />
                  <span className="italic font-serif">
                    &ldquo;{SITE_CONFIG.tagline}&rdquo;
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#5A6578]">Youth-Led Foundation</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#142A46] leading-[1.15]">
                  Every Child Deserves the Opportunity to{" "}
                  <span className="underline decoration-[#E6B85C] decoration-wavy decoration-2 underline-offset-8">
                    Learn.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#5A6578] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We bring together passionate volunteers and communities to create meaningful educational opportunities and empower young minds through foundational learning.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/our-work/project-samarth"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#142A46] px-6 py-4 text-sm font-semibold text-white shadow-md hover:bg-[#1D3D66] hover:shadow-lg transition-all"
                  >
                    <span>Explore Project Samarth</span>
                    <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
                  </Link>

                  <Link
                    href="/get-involved/volunteer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#142A46] bg-white px-6 py-3.5 text-sm font-semibold text-[#142A46] hover:bg-[#F5F1E8] transition-all"
                  >
                    <GraduationCap className="h-4 w-4 text-[#E6B85C]" />
                    <span>Become a Volunteer</span>
                  </Link>
                </div>

                {/* Key Verifiable Highlights */}
                <div className="pt-8 border-t border-[#E8E2D5]/70 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
                  <div>
                    <span className="block font-serif text-2xl font-bold text-[#142A46]">
                      Classes 5–12
                    </span>
                    <span className="text-xs text-[#5A6578]">
                      Core Foundational Focus
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl font-bold text-[#142A46]">
                      3 Days/Wk
                    </span>
                    <span className="text-xs text-[#5A6578]">
                      Batch Schedule
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl font-bold text-[#142A46]">
                      Mathura, UP
                    </span>
                    <span className="text-xs text-[#5A6578]">
                      Origin & Inception
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#E6B85C]/30 to-[#142A46]/20 blur-lg opacity-70" />

                  <div className="relative rounded-3xl border border-[#E8E2D5] bg-white p-7 shadow-xl">
                    <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h2 className="font-serif text-base font-bold text-[#142A46]">
                            Project Samarth
                          </h2>
                          <p className="text-[11px] text-[#5A6578]">
                            Flagship Remedial & Foundational Initiative
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                        Active Cohorts
                      </span>
                    </div>

                    <div className="mt-5 space-y-3.5">
                      <div className="rounded-xl bg-[#FAF4E6] p-3.5 border border-[#E6B85C]/30 text-xs">
                        <strong className="text-[#142A46] block mb-1">
                          Bridging Foundational Learning Gaps
                        </strong>
                        <p className="text-[#5A6578]">
                          Students enrolled in grade 7 or 8 often struggle with concepts from earlier classes. Samarth bridges those gaps with patience and small-group focus.
                        </p>
                      </div>

                      <div className="space-y-2 text-xs text-[#242B33]">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0" />
                          <span>Google Meet sessions (3 days/week per batch)</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0" />
                          <span>Volunteer teachers matched by subject expertise</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0" />
                          <span>Beyond Academics: Art, storytelling & camps</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0" />
                          <span>Active online learners across Odisha & Delhi</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/our-work/project-samarth"
                          className="flex items-center justify-between rounded-xl bg-[#142A46]/5 hover:bg-[#142A46]/10 p-3 text-xs font-semibold text-[#142A46] transition"
                        >
                          <span>See How Samarth Works</span>
                          <ChevronRight className="h-4 w-4 text-[#E6B85C]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO WE ARE */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <SectionHeading
                  badge="Who We Are"
                  title="A Foundation Built Around Possibility."
                  description="Founded in March 2026 in the historic city of Mathura, Uttar Pradesh, Vyom Foundation was born from a simple conviction: access to quality learning should never depend on privilege."
                />

                <p className="text-sm text-[#5A6578] leading-relaxed">
                  The word <strong>Vyom</strong> signifies the limitless expanse of the sky. We believe every learner possesses boundless potential. As a youth-led organization, we mobilize university students, educators, and compassionate citizens to build real, structured educational support.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#142A46] hover:text-[#1D3D66] group"
                  >
                    <span>Discover Our Story & Values</span>
                    <ArrowRight className="h-4 w-4 text-[#E6B85C] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#142A46] text-[#E6B85C]">
                    <Users2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Youth-Led Dynamism
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Spearheaded by young thinkers and university scholars who relate directly to modern student challenges and bring peer empathy to every lesson.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#648B78] text-white">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Community Collaboration
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    We co-create learning spaces with families and local community anchors, ensuring our interventions meet real, grounded community needs.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6B85C] text-[#142A46]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Rooted in Mathura, UP
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Established in Mathura with an initial focus on regional community learning pods, while connecting online cohorts nationally.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#142A46] text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Transparency & Honesty
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    We maintain absolute clarity about what is active today, our verifiable metrics, and our structured roadmap for future expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR COMMITMENT */}
        <section className="py-20 bg-[#FAF4E6]/50 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <SectionHeading
                  badge="Our Commitment"
                  title="Education Is Where We Begin."
                  description="While Vyom Foundation envisions broad social empowerment over time, our active operational focus is uncompromisingly dedicated to education."
                />

                <p className="text-sm text-[#5A6578] leading-relaxed">
                  We align our grassroots educational efforts with the spirit of the United Nations Sustainable Development Goal 4 (Quality Education) and India&apos;s National Education Policy emphasis on foundational literacy and numeracy. Rather than spreading ourselves across every social sector prematurely, we channel our energy where it creates the deepest ripple: the mind of a child.
                </p>

                <div className="rounded-xl border border-[#E6B85C]/40 bg-white p-4 text-xs text-[#242B33] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#142A46]">
                    <span className="h-2 w-2 rounded-full bg-[#E6B85C]" />
                    <span>Our Transparent Scope Principle:</span>
                  </div>
                  <p className="text-[#5A6578]">
                    We do not claim multi-sectoral projects that are not yet active. We focus deeply on Project Samarth—ensuring every student we teach receives consistent, high-quality, and empathetic academic support.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[#E8E2D5] bg-white p-8 shadow-sm space-y-6">
                  <div className="border-b border-[#E8E2D5] pb-4">
                    <span className="text-[11px] font-bold text-[#648B78] uppercase tracking-wider block">
                      Guiding Framework
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#142A46] mt-1">
                      The 4E Educational Model
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                      <span className="font-bold text-[#142A46] block text-sm mb-1">
                        1. Engage
                      </span>
                      <p className="text-[#5A6578]">
                        Connect with community learners, diagnose learning gaps, and build mutual trust.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                      <span className="font-bold text-[#142A46] block text-sm mb-1">
                        2. Educate
                      </span>
                      <p className="text-[#5A6578]">
                        Deliver structured 3-day weekly sessions on fundamentals in mathematics, science, and languages.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                      <span className="font-bold text-[#142A46] block text-sm mb-1">
                        3. Empower
                      </span>
                      <p className="text-[#5A6578]">
                        Nurture self-confidence, critical curiosity, and life skills beyond standard textbooks.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E8E2D5]">
                      <span className="font-bold text-[#142A46] block text-sm mb-1">
                        4. Elevate
                      </span>
                      <p className="text-[#5A6578]">
                        Enable independent academic mastery and sustainable personal development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PROJECT SAMARTH SPOTLIGHT */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Flagship Initiative"
              title="Building Stronger Foundations Through Learning."
              description="Project Samarth is Vyom Foundation's signature educational program, designed to bridge foundational learning gaps for students in classes 5 through 12 through dedicated volunteer teachers."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-7 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C] mb-5">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Online Interactive Cohorts
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    Classes are conducted three days a week via Google Meet in small groups of 4 to 8 students. This ensures each child gets individualized attention and patient doubt clearing.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-[11px] font-semibold text-[#142A46]">
                  Classes 5 to 12 • Core Academic Subjects
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-7 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#648B78] text-white mb-5">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Remedial & Conceptual Focus
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    We focus on core concepts rather than memorization. If a Grade 8 student struggles with basic fractions or grammar rules, our volunteers take the time to fix the foundation first.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-[11px] font-semibold text-[#648B78]">
                  Diagnostic Assessments & Homework Reviews
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-7 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B85C] text-[#142A46] mb-5">
                    <Smile className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Beyond Academics
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    Weekend creative sessions include art & craft, singing, storytelling, moral reasoning, and seasonal camps that build joy, teamwork, and civic responsibility.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-[11px] font-semibold text-[#142A46]">
                  Holistic Confidence & Emotional Safety
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/our-work/project-samarth"
                className="inline-flex items-center gap-2 rounded-xl bg-[#142A46] px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#1D3D66] transition"
              >
                <span>Read Complete Project Samarth Blueprint</span>
                <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW WE CREATE IMPACT (5-Step Visual Process) */}
        <section className="py-20 bg-[#FAF4E6]/40 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Our Process"
              title="How We Create Impact"
              description="A structured, reliable educational pathway designed to turn curiosity into lasting academic confidence."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  num: "01",
                  title: "Connect with Learners",
                  desc: "Partner with families and grassroots networks to identify students with foundational gaps.",
                },
                {
                  num: "02",
                  title: "Mobilize Volunteers",
                  desc: "Vet and prepare passionate university students and educators for empathetic teaching.",
                },
                {
                  num: "03",
                  title: "Structured Sessions",
                  desc: "Conduct 3 online classes weekly per batch with small cohorts via Google Meet.",
                },
                {
                  num: "04",
                  title: "Nurture Creativity",
                  desc: "Integrate storytelling, art, dance, and civic awareness alongside math and science.",
                },
                {
                  num: "05",
                  title: "Monitor & Support",
                  desc: "Review weekly assignments, gather parent feedback, and adjust pacing continuously.",
                },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-5 flex flex-col justify-between shadow-sm relative group card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[#E6B85C]">
                      {step.num}
                    </span>
                    {idx < 4 && (
                      <ArrowRight className="h-4 w-4 text-slate-300 hidden md:block" />
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-base font-bold text-[#142A46]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5A6578] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: BECOME PART OF VYOM (4 Pathway Cards) */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Get Involved"
              title="Become Part of Vyom"
              description="Whatever your background or schedule, there is a meaningful way to contribute to education."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Teach */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C] mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Teach
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    Help students strengthen their academic foundations. Commit 3 evenings a week to teaching a small batch online.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/volunteer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142A46] hover:text-[#E6B85C] transition"
                  >
                    <span>Volunteer as Teacher</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Intern */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#648B78] text-white mb-4">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Intern
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    Build practical experience in non-profit strategy, graphic design, writing, research, and growth while advancing social equity.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/internships"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142A46] hover:text-[#E6B85C] transition"
                  >
                    <span>View 6 Open Roles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Partner */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B85C] text-[#142A46] mb-4">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Partner
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    Collaborate with Vyom Foundation as a school, university chapter, NGO, or corporate sponsor to expand learning opportunities.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/partner"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142A46] hover:text-[#E6B85C] transition"
                  >
                    <span>Explore Partnerships</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Support */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D3D66] text-[#E6B85C] mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Support
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578]">
                    Support our mission through educational material, devices, books, or community resources through transparent, direct contact.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/support"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142A46] hover:text-[#E6B85C] transition"
                  >
                    <span>Support Education</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: STORIES FROM OUR COMMUNITY */}
        <section className="py-20 bg-[#FAF4E6]/50 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Voices of Vyom"
              title="Stories From Our Community"
              description="Real experiences from volunteer teachers, learners, parents, and youth contributors who make this mission come alive."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-6 flex flex-col justify-between shadow-sm card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#142A46]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#142A46] border border-[#142A46]/10">
                        {t.badge}
                      </span>
                      <span className="font-serif text-2xl text-[#E6B85C]">&ldquo;</span>
                    </div>

                    <p className="text-xs text-[#242B33] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E2D5]/70 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C] font-serif text-xs font-bold">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <h3 className="font-serif text-xs font-bold text-[#142A46]">
                        {t.name}
                      </h3>
                      <p className="text-[10px] text-[#5A6578]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#142A46] hover:text-[#1D3D66]"
              >
                <span>Browse Photo Gallery, Activities & Updates</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#E6B85C]" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: CLOSING CTA */}
        <section className="py-20 bg-[#142A46] text-white relative overflow-hidden">
          {/* Subtle celestial / horizon graphics */}
          <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#E6B85C]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#648B78]/20 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6B85C]/20 border border-[#E6B85C]/30 px-3.5 py-1 text-xs font-semibold text-[#E6B85C]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Build Together</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight leading-tight">
              Together, We Can Make Learning More Accessible.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you can contribute three hours a week to teach, bring creative skills to our team, or connect us with children who need support—your participation matters.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-involved"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6B85C] px-7 py-4 text-sm font-bold text-[#142A46] shadow-lg hover:bg-[#DDA843] transition"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                <span>Contact Vyom Foundation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

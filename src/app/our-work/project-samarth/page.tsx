import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  GraduationCap,
  Sparkles,
  CheckCircle,
  Clock,
  Video,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
  HelpCircle,
  Palette,
  Music,
  MessagesSquare,
  Smile,
  Sun,
  Shield,
  Laptop,
  Users2,
  MapPin,
} from "lucide-react";
import {
  SAMARTH_STEPS,
  SAMARTH_OBJECTIVES,
  BEYOND_ACADEMICS,
  TESTIMONIALS,
} from "@/data/content";

export const metadata = {
  title: "Project Samarth — Flagship Educational Initiative",
  description:
    "Project Samarth is Vyom Foundation's flagship program providing foundational learning support for students in classes 5–12 through online volunteer teaching.",
};

export default function ProjectSamarthPage() {
  const teacherTestimonials = TESTIMONIALS.filter(
    (t) => t.category === "Teacher" || t.category === "Student"
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6] via-[#FDFBF7] to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#142A46] px-3.5 py-1 text-xs font-bold text-[#E6B85C]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Flagship Educational Initiative</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Project Samarth — Empowering Students Through Education.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                Project Samarth is Vyom Foundation&apos;s flagship educational initiative, providing learning support to students from underserved communities through dedicated volunteer teachers.
              </p>

              {/* Dual Pathways Quick Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/get-involved/volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#142A46] px-6 py-3.5 text-xs font-semibold text-white shadow-md hover:bg-[#1D3D66] transition"
                >
                  <GraduationCap className="h-4 w-4 text-[#E6B85C]" />
                  <span>I Want to Teach / Volunteer</span>
                </Link>

                <Link
                  href="/contact?topic=samarth"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#142A46] bg-white px-6 py-3.5 text-xs font-semibold text-[#142A46] hover:bg-[#FAF4E6] transition"
                >
                  <span>I Want to Learn / Enquire About Batches</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE NEED */}
        <section id="need" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionHeading
                  badge="The Problem We Address"
                  title="The Silent Crisis of Foundational Gaps"
                  description="A student may formally be enrolled in Grade 7 or 8, but struggles with the foundational math or grammar taught in Grade 3 or 4."
                />

                <div className="space-y-4 text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                  <p>
                    In large school classrooms, syllabus deadlines force teachers to advance rapidly. Children who fail to grasp foundational fractions, decimals, or basic reading fluency get left behind silently. Over months and years, this learning deficit compounds into anxiety, school detachment, and loss of confidence.
                  </p>
                  <p>
                    <strong>Project Samarth exists to solve this exact problem.</strong> Rather than pressuring students to memorize textbook formulas they do not understand, our volunteers identify where the breakdown occurred and gently build up that foundational knowledge.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-[#E8E2D5] bg-[#FAF4E6]/50 p-8 shadow-sm space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Why Remedial Attention Works
                  </h3>
                  <div className="space-y-3 text-xs text-[#242B33]">
                    <div className="rounded-xl bg-white p-4 border border-[#E8E2D5]">
                      <strong className="text-[#142A46] block text-sm mb-1">
                        Zero Shame, Safe Space
                      </strong>
                      <span>
                        Students are encouraged to say &ldquo;I don&apos;t know&rdquo; and ask questions repeatedly without fear of judgment.
                      </span>
                    </div>

                    <div className="rounded-xl bg-white p-4 border border-[#E8E2D5]">
                      <strong className="text-[#142A46] block text-sm mb-1">
                        Micro-Batches (4 to 8 students)
                      </strong>
                      <span>
                        Unlike classrooms with 50+ students, our online batches allow volunteer educators to listen to every child individually.
                      </span>
                    </div>

                    <div className="rounded-xl bg-white p-4 border border-[#E8E2D5]">
                      <strong className="text-[#142A46] block text-sm mb-1">
                        Intuitive Visual Learning
                      </strong>
                      <span>
                        Explaining mathematics through household objects and everyday stories rather than rote blackboard formulas.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR OBJECTIVES */}
        <section id="objectives" className="py-20 bg-[#FAF4E6]/40 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Program Goals"
              title="Our Objectives"
              description="Every Project Samarth session is structured around six core developmental goals."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMARTH_OBJECTIVES.map((obj, i) => (
                <div
                  key={obj.title}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-6 shadow-sm card-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold text-[#E6B85C]">
                      GOAL 0{i + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#142A46]">
                      {obj.title}
                    </h3>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW SAMARTH WORKS (Visual Process) */}
        <section id="how-it-works" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Step-by-Step Flow"
              title="How Project Samarth Works"
              description="A clear, respectful, and transparent educational onboarding journey."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMARTH_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-[#142A46]">
                        {step.step}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#E6B85C]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#142A46] mt-4">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5A6578] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-[#FAF4E6] border border-[#E6B85C]/40 p-4 text-xs text-[#5A6578] text-center max-w-2xl mx-auto">
              <strong>Transparent Operational Note:</strong> Student diagnostic benchmarks and onboarding criteria are currently undergoing formal review to maintain high academic consistency.
            </div>
          </div>
        </section>

        {/* 5. LEARNING MODEL */}
        <section id="learning-model" className="py-20 bg-[#FAF4E6]/50 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <SectionHeading
                  badge="Weekly Cohort Structure"
                  title="The Learning Model"
                  description="Engineered to provide consistent, sustainable learning without overwhelming students or volunteer teachers."
                />

                <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                  Consistency beats intensity. Rather than sporadic weekend marathons, each Samarth cohort meets three evenings a week. This rhythm allows concepts to sink in, provides time for homework reflection, and creates genuine mentorship between teacher and student.
                </p>

                <div className="pt-2">
                  <Link
                    href="/get-involved/volunteer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#142A46] px-5 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D3D66] transition"
                  >
                    <span>Volunteer as a Teacher (3 Days/Week)</span>
                    <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5 space-y-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                    <Video className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#142A46]">
                    Google Meet Platform
                  </h3>
                  <p className="text-xs text-[#5A6578]">
                    Accessible directly on simple family smartphones or computers without complex app installations.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5 space-y-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#648B78] text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#142A46]">
                    3 Days Per Week
                  </h3>
                  <p className="text-xs text-[#5A6578]">
                    Structured 60-minute evening batches (e.g. Mon/Wed/Fri or Tue/Thu/Sat) convenient for students after school hours.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5 space-y-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6B85C] text-[#142A46]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#142A46]">
                    Homework & Checkpoints
                  </h3>
                  <p className="text-xs text-[#5A6578]">
                    Light 15-minute practice worksheets checked weekly with positive encouragement and tailored feedback.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5 space-y-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D3D66] text-[#E6B85C]">
                    <Smile className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#142A46]">
                    Academic + Creative
                  </h3>
                  <p className="text-xs text-[#5A6578]">
                    Balance of core academic revision (Maths, Science, English) with creative self-expression modules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BEYOND ACADEMICS */}
        <section id="beyond-academics" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Holistic Expression"
              title="Beyond Academics"
              description="Education is more than test scores. Project Samarth integrates arts, storytelling, and civic awareness to help students grow into confident, thoughtful human beings."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BEYOND_ACADEMICS.map((act) => (
                <div
                  key={act.title}
                  className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 shadow-sm card-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                      <Palette className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#142A46]">
                      {act.title}
                    </h3>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. REACH AND EXPANSION */}
        <section id="reach" className="py-20 bg-[#FAF4E6]/50 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <SectionHeading
                  badge="Current Footprint & Future Vision"
                  title="Reach and Expansion"
                  description="We are transparent about where we operate right now, and where our community plans to grow."
                />

                <div className="space-y-4 text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                  <p>
                    Currently, Project Samarth operates through online cohorts connecting volunteer educators with students in <strong>Odisha and Delhi</strong>. This online footprint allows us to refine our remedial curriculum, train volunteer educators remotely, and demonstrate measurable learning growth.
                  </p>
                  <p>
                    <strong>Future Offline Learning Centres:</strong> Setting up physical community learning centers in Mathura and neighboring regions is our top expansion objective. These centers are actively in the planning phase and will be announced once facility leases and local community logistics are fully finalized.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border-2 border-emerald-300 bg-white p-6 shadow-sm">
                  <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 inline-block mb-3">
                    Currently Active
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Online Cohorts
                  </h3>
                  <p className="mt-2 text-xs text-[#5A6578]">
                    Active learners in Odisha & Delhi connecting 3 times a week on Google Meet with volunteer teachers.
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-amber-300 bg-white p-6 shadow-sm">
                  <span className="rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 inline-block mb-3">
                    Future Roadmap
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Offline Learning Centres
                  </h3>
                  <p className="mt-2 text-xs text-[#5A6578]">
                    Planned physical hubs in Mathura, Uttar Pradesh, featuring study spaces and library books.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PARTICIPATION (Dual Pathways) */}
        <section id="participate" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <SectionHeading
              centered
              badge="Get Involved in Samarth"
              title="Two Ways to Participate in Project Samarth"
              description="Whether you are a parent seeking educational support for your child or a mentor eager to teach, there is a place for you."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {/* Pathway 1: For Learners / Parents */}
              <div className="rounded-3xl border-2 border-[#142A46] bg-[#FDFBF7] p-8 flex flex-col justify-between card-hover">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#142A46]">
                    I Want to Learn
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Are you a student in classes 5–12 or a parent looking for patient, foundational learning guidance? Connect with our team to inquire about joining an upcoming online batch.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/contact?topic=samarth-learner"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#142A46] py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D3D66] transition"
                  >
                    <span>Enquire for Student Enrollment</span>
                    <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
                  </Link>
                </div>
              </div>

              {/* Pathway 2: For Volunteer Teachers */}
              <div className="rounded-3xl border-2 border-[#648B78] bg-[#FDFBF7] p-8 flex flex-col justify-between card-hover">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#648B78] text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#142A46]">
                    I Want to Teach
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Are you a college student, graduate, or working professional with a heart for teaching? Teach a small online batch three evenings a week and transform a student&apos;s relationship with education.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5]">
                  <Link
                    href="/get-involved/volunteer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#648B78] py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#527363] transition"
                  >
                    <span>Apply as Volunteer Teacher</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. TESTIMONIALS */}
        <section className="py-20 bg-[#FAF4E6]/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Experiences"
              title="Voices from Project Samarth"
              description="Authentic reflections from our volunteer educators and families."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teacherTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-6 shadow-sm card-hover flex flex-col justify-between"
                >
                  <p className="text-xs text-[#242B33] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#E8E2D5] flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C] font-serif text-xs font-bold">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-bold text-[#142A46]">
                        {t.name}
                      </h4>
                      <p className="text-[10px] text-[#5A6578]">
                        {t.role} • {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

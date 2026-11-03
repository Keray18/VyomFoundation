import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  Sparkles,
  MapPin,
  Calendar,
  Shield,
  HeartHandshake,
  Users2,
  BookOpen,
  Award,
  CheckCircle,
  FileCheck,
  Building,
  Target,
  Compass,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, VALUES_LIST } from "@/data/content";

export const metadata = {
  title: "About Us — Our Story, Vision & Values",
  description:
    "Learn about Vyom Foundation, a youth-led initiative founded in March 2026 in Mathura, UP, dedicated to equitable education, community collaboration, and transparent impact.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <Compass className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>About Vyom Foundation</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Rooted in Mathura. Driven by Youth.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                We believe the sky represents limitless opportunity. Vyom Foundation brings together passionate university youth and dedicated volunteers to ensure foundational learning is accessible to every child.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Our Story */}
        <section id="our-story" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <SectionHeading
                  badge="Origin & Purpose"
                  title="The Story Behind Vyom"
                  description="In Sanskrit, 'Vyom' (व्योम) denotes the sky—an expanse without artificial boundaries or ceilings."
                />

                <div className="space-y-4 text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                  <p>
                    Vyom Foundation was established in <strong>March 2026</strong> in <strong>Mathura, Uttar Pradesh</strong>. It began with a circle of college students and young professionals who witnessed a stark reality in local communities: children were regularly advancing from grade to grade without mastering the basic foundations of reading, fractions, or fundamental science.
                  </p>
                  <p>
                    Rather than accepting educational gaps as inevitable, the team resolved to organize. We chose an ethos of direct participation: uniting passionate volunteer educators with small cohorts of students, using accessible online tools like Google Meet and localized community learning circles.
                  </p>
                  <p>
                    Our organizational tagline, <strong className="text-[#142A46] italic">&ldquo;Sheltering every cause together&rdquo;</strong>, reflects our belief that social transformation cannot be achieved in isolation. It requires a collaborative roof under which youth, mentors, families, and partner institutions stand together.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Meaning of &apos;Vyom&apos;
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    The expansive sky. It symbolizes our belief in the boundless intellectual and creative potential latent in every student, regardless of socio-economic background.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#648B78] text-white">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    March 2026 Inception
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Conceived and established by passionate youth leaders who recognized the urgency of remedial education following nationwide learning loss reports.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6B85C] text-[#142A46]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Mathura, Uttar Pradesh
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Headquartered in the historic educational hub of Mathura, coordinating regional grassroots initiatives alongside digital cohorts reaching learners in Odisha and Delhi.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D3D66] text-[#E6B85C]">
                    <Users2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142A46]">
                    Youth-Led Governance
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Managed and driven by university students, fresh graduates, and young educators who bring fresh pedagogies and relentless energy to the social sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vision & Mission */}
        <section id="vision-mission" className="py-20 bg-[#FAF4E6]/60 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Our Guiding Lights"
              title="Vision & Mission"
              description="Our foundational declarations guiding every batch, volunteer orientation, and community partnership."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="rounded-3xl border-2 border-[#142A46] bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C]">
                      <Target className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#142A46]">
                      Our Vision
                    </span>
                  </div>

                  <blockquote className="font-serif text-2xl sm:text-3xl font-normal text-[#142A46] leading-snug">
                    &ldquo;A society where every learner has access to meaningful educational opportunities, the confidence to pursue their potential, and the support to build a better future.&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5] text-xs text-[#5A6578]">
                  Envisioning an ecosystem where socio-economic status does not dictate learning outcomes.
                </div>
              </div>

              {/* Mission Card */}
              <div className="rounded-3xl border-2 border-[#648B78] bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#648B78] text-white">
                      <Compass className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#648B78]">
                      Our Mission
                    </span>
                  </div>

                  <blockquote className="font-serif text-2xl sm:text-3xl font-normal text-[#142A46] leading-snug">
                    &ldquo;To strengthen educational access and learning outcomes through community participation, dedicated volunteers, inclusive learning opportunities, and sustainable educational initiatives.&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D5] text-xs text-[#5A6578]">
                  Operationalized through Project Samarth batches, diagnostic remediation, and creative enrichment.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Approach (The 4E Model) */}
        <section id="our-approach" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Educational Pedagogy"
              title="Our Approach: The 4E Model"
              description="A structured learning framework designed to build genuine conceptual mastery, self-esteem, and lifelong curiosity."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  code: "01",
                  title: "Engage",
                  badge: "Community Discovery",
                  desc: "We begin by listening to parents and diagnosing foundational learning gaps in a friendly, zero-pressure atmosphere.",
                },
                {
                  code: "02",
                  title: "Educate",
                  badge: "Structured Batches",
                  desc: "Passionate volunteer educators conduct 3 classes per week per batch, simplifying complex textbook concepts into intuitive ideas.",
                },
                {
                  code: "03",
                  title: "Empower",
                  badge: "Holistic Growth",
                  desc: "Weekend activities including storytelling, public speaking, art, and civic discussions ensure children feel heard and validated.",
                },
                {
                  code: "04",
                  title: "Elevate",
                  badge: "Lifelong Autonomy",
                  desc: "Students learn how to learn—transitioning from hesitating learners into curious, confident, and self-directed achievers.",
                },
              ].map((step) => (
                <div
                  key={step.code}
                  className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 flex flex-col justify-between card-hover"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#E6B85C] uppercase tracking-wider block mb-1">
                      Phase {step.code}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#142A46]">
                      {step.title}
                    </h3>
                    <span className="inline-block mt-2 rounded bg-[#142A46]/5 px-2 py-0.5 text-[10px] font-semibold text-[#142A46]">
                      {step.badge}
                    </span>
                    <p className="mt-4 text-xs text-[#5A6578] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Our Values */}
        <section id="values" className="py-20 bg-[#FAF4E6]/40 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Ethical Principles"
              title="Our Values"
              description="The bedrock principles that guide how we treat learners, coordinate volunteers, and steward community trust."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES_LIST.map((val) => (
                <div
                  key={val.title}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-6 shadow-sm card-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142A46] text-[#E6B85C]">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#142A46]">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Our Team & Youth Leadership */}
        <section id="our-team" className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <Users2 className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Our People</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#142A46]">
                Led by Youth. Supported by Community.
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed">
                Vyom Foundation is powered by an energetic collective of university undergraduates, postgraduates, young working professionals, and advisory mentors who share an uncompromising dedication to educational equity.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C] font-serif text-lg font-bold">
                  VF
                </div>
                <h3 className="font-serif text-base font-bold text-[#142A46]">
                  Founding Office & Strategy
                </h3>
                <p className="text-xs text-[#5A6578]">
                  Youth leaders steering program design, cohort expansion, and academic operations from Mathura, UP.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#648B78] text-white font-serif text-lg font-bold">
                  VE
                </div>
                <h3 className="font-serif text-base font-bold text-[#142A46]">
                  Volunteer Educator Cohort
                </h3>
                <p className="text-xs text-[#5A6578]">
                  Over 25+ passionate university students taking active weekly batches across mathematics, science, and English.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-6 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E6B85C] text-[#142A46] font-serif text-lg font-bold">
                  AM
                </div>
                <h3 className="font-serif text-base font-bold text-[#142A46]">
                  Academic Mentors & Advisors
                </h3>
                <p className="text-xs text-[#5A6578]">
                  Experienced school educators and developmental mentors advising on curriculum rubrics and child safety.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/get-involved/internships"
                className="inline-flex items-center gap-2 rounded-xl bg-[#142A46] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D3D66] transition"
              >
                <span>Join Our Working Team (View Open Internships)</span>
                <ArrowRight className="h-4 w-4 text-[#E6B85C]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Recognition, Registration & Transparency */}
        <section id="transparency" className="py-20 bg-[#FAF4E6]/60 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <SectionHeading
                  badge="Trust & Integrity"
                  title="Recognition, Registration & Transparency"
                  description="We operate with rigorous transparency, separating verified present activities from our structured future roadmap."
                />

                <div className="space-y-3 text-xs text-[#5A6578] leading-relaxed">
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-[#E8E2D5]">
                    <Shield className="h-5 w-5 text-[#648B78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#142A46] block text-sm">
                        Trust & Organization Status
                      </strong>
                      <span>
                        Vyom Foundation is an autonomous youth-led non-profit organization established in March 2026. All operations comply with applicable national and state guidelines for educational initiatives.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-[#E8E2D5]">
                    <FileCheck className="h-5 w-5 text-[#E6B85C] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#142A46] block text-sm">
                        NGO Darpan & Regulatory Verification
                      </strong>
                      <span>
                        In accordance with our strict transparency policy, NGO Darpan details and statutory documentation are undergoing verified record alignment and will be published upon final regulatory filing completion.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-[#E8E2D5]">
                    <Building className="h-5 w-5 text-[#142A46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#142A46] block text-sm">
                        Child Protection & Data Ethics
                      </strong>
                      <span>
                        We adhere to strict child safety protocols. Learner photographs and video recordings require written parental consent, and sensitive personal identifiers are never shared publicly.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-[#E8E2D5] bg-white p-8 shadow-sm space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#142A46]">
                    Our Transparency Pledge to Donors & Partners
                  </h3>
                  <ul className="space-y-3 text-xs text-[#242B33]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>
                        <strong>No Fabricated Impact Figures:</strong> We do not publish inflated numbers. We document real completed sessions, verified volunteer hours, and qualitative student progress.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>
                        <strong>Clear Distinction on Facilities:</strong> Online sessions currently reach students in Odisha and Delhi. Physical learning centers in Mathura and surrounding districts are planned future expansions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#648B78] shrink-0 mt-0.5" />
                      <span>
                        <strong>Ethical Financial Process:</strong> Online payment gateways will only be enabled after full statutory tax-exemption verification (80G/12A). Currently, support is coordinated through direct institutional dialogue.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#142A46] hover:underline"
                    >
                      <span>Inquire About Governance or Request Documentation</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
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


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StoryFilter from "@/components/stories/StoryFilter";
import { STORIES_AND_EVENTS, TESTIMONIALS } from "@/data/content";
import { Sparkles, Camera, ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "Stories & Impact — Photo Gallery, Events & Reflections",
  description:
    "Explore authentic learning moments, volunteer stories, and community events from Vyom Foundation and Project Samarth.",
};

export default function StoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <Camera className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Community Chronicles</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Stories of Learning, Joy & Growth.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                The authentic human side of Vyom Foundation: real classrooms, volunteer reflections, creative camp moments, and the daily breakthroughs of our students.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Transparency Banner */}
        <section className="py-6 bg-[#FAF4E6] border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5A6578]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#648B78] shrink-0" />
                <span>
                  <strong className="text-[#142A46]">Ethical Storytelling Pledge:</strong> We prioritize authentic documentation over staged marketing. Children&apos;s privacy is respected at all times in compliance with child protection guidelines.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Categorized Story Feed & Gallery */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Explore Activities"
              title="Moments That Matter"
              description="Filter through our camps, student reading milestones, volunteer reflections, and organizational updates."
            />

            <div className="mt-14">
              <StoryFilter stories={STORIES_AND_EVENTS} />
            </div>
          </div>
        </section>

        {/* Volunteer & Intern Voices Carousel / Grid */}
        <section className="py-20 bg-[#FAF4E6]/50 border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              badge="Community Voices"
              title="Reflections from our Educators & Contributors"
              description="Real thoughts from the youth leading batches and building operations."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-6 shadow-sm card-hover flex flex-col justify-between"
                >
                  <div>
                    <span className="rounded-full bg-[#142A46]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#142A46] border border-[#142A46]/10">
                      {t.badge}
                    </span>
                    <p className="mt-4 text-xs text-[#242B33] leading-relaxed italic">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

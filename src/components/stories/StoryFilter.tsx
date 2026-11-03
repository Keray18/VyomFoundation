"use client";

import { useState } from "react";
import { StoryItem } from "@/types";
import { Sparkles, Calendar, Tag, ArrowRight, BookOpen, Heart, Eye } from "lucide-react";

interface StoryFilterProps {
  stories: StoryItem[];
}

const CATEGORIES = [
  "All",
  "Events & Camps",
  "Student Stories",
  "Volunteer Experiences",
  "Photo Gallery",
  "Updates",
];

export default function StoryFilter({ stories }: StoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalStory, setActiveModalStory] = useState<StoryItem | null>(null);

  const filteredStories =
    selectedCategory === "All"
      ? stories
      : stories.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-[#142A46] text-[#E6B85C] shadow-md"
                : "bg-white text-[#5A6578] border border-[#E8E2D5] hover:border-[#142A46]/30 hover:bg-[#F5F1E8]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-2xl border border-[#E8E2D5] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover group"
          >
            {/* Visual Header / Banner */}
            <div
              className={`h-48 w-full bg-gradient-to-br ${item.aspectColor} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
            >
              {/* Subtle background graphic */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-semibold tracking-wide text-white border border-white/20">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/80">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </span>
              </div>

              <div className="z-10">
                <p className="text-xs text-white/90 italic font-serif">
                  &ldquo;{item.imageCaption}&rdquo;
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#142A46] group-hover:text-[#1D3D66] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#5A6578]">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D5]/70 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-[#F5F1E8] px-2 py-0.5 text-[10px] font-medium text-[#142A46]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalStory(item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#142A46] group-hover:text-[#E6B85C] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Story Detail Modal */}
      {activeModalStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#E8E2D5] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div
              className={`p-6 bg-gradient-to-r ${activeModalStory.aspectColor} text-white`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  {activeModalStory.category}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalStory(null)}
                  className="rounded-full bg-black/20 p-1.5 hover:bg-black/40 text-white transition"
                  aria-label="Close story detail"
                >
                  ✕
                </button>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">
                {activeModalStory.title}
              </h3>
              <p className="mt-1 text-xs text-white/80">
                {activeModalStory.date} • Vyom Educational Cohort Record
              </p>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="rounded-xl bg-[#FAF4E6] border border-[#E6B85C]/30 p-4 text-xs italic text-[#142A46]">
                <strong>Visual Note:</strong> {activeModalStory.imageCaption}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#142A46]">
                  Overview
                </h4>
                <p className="mt-1 text-sm text-[#242B33] leading-relaxed">
                  {activeModalStory.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#142A46]">
                  Detailed Account & Learning Outcome
                </h4>
                <p className="mt-1 text-sm text-[#5A6578] leading-relaxed">
                  {activeModalStory.details}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {activeModalStory.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#F5F1E8] px-3 py-1 text-xs font-medium text-[#142A46]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-[#E8E2D5] bg-[#FDFBF7] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalStory(null)}
                className="rounded-lg bg-[#142A46] px-5 py-2 text-xs font-semibold text-white hover:bg-[#1D3D66] transition"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="rounded-xl border border-[#E8E2D5] bg-white overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-serif text-base sm:text-lg font-bold text-[#142A46] hover:bg-[#FDFBF7] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5F1E8] text-[#142A46] transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#142A46] text-[#E6B85C]" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-[#5A6578] leading-relaxed border-t border-[#E8E2D5]/50 pt-3 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

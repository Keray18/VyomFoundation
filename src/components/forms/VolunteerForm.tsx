"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, GraduationCap } from "lucide-react";

const CLASS_OPTIONS = [
  "Classes 5–8 (Upper Primary)",
  "Classes 9–10 (Secondary / Board Prep)",
  "Classes 11–12 (Higher Secondary)",
];

const AVAILABILITY_OPTIONS = [
  "3 days a week (approx. 4-5 hours total)",
  "2 days a week (approx. 3 hours total)",
  "Weekends only (approx. 4 hours total)",
  "Flexible / Alternate days",
];

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    occupation: "",
    teachingSubjects: "",
    classesComfortable: [] as string[],
    relevantExperience: "",
    weeklyAvailability: AVAILABILITY_OPTIONS[0],
    motivation: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => {
      const exists = prev.classesComfortable.includes(option);
      return {
        ...prev,
        classesComfortable: exists
          ? prev.classesComfortable.filter((item) => item !== option)
          : [...prev.classesComfortable, option],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "volunteer",
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message);
        setReferenceId(data.referenceId || "");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to submit application. Please check the fields.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-[#648B78]/40 bg-[#EBF2EE] p-8 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#648B78] text-white">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold text-[#142A46]">
          Volunteer Application Submitted!
        </h3>
        <p className="mt-2 text-sm text-[#242B33] max-w-md mx-auto">
          {message}
        </p>

        {referenceId && (
          <div className="mt-5 inline-block rounded-lg bg-white px-4 py-2 border border-[#648B78]/30 shadow-sm">
            <span className="text-xs text-[#5A6578] block">Your Application Reference</span>
            <span className="font-mono font-bold text-sm text-[#142A46]">{referenceId}</span>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#648B78]/20 text-xs text-[#5A6578]">
          Our volunteer coordinator will review your profile and reach out via email or phone within 2-3 working days.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Submission Problem</span>
            {message}
          </div>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Priya Sharma"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.fullName && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.fullName[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="priya@example.com"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Occupation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            WhatsApp / Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.phone[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Current Occupation / Study Program <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
            placeholder="e.g. B.Sc Mathematics, 2nd Year"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.occupation && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.occupation[0]}</p>
          )}
        </div>
      </div>

      {/* Subjects */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Subjects You Are Passionate About Teaching <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.teachingSubjects}
          onChange={(e) => setFormData({ ...formData, teachingSubjects: e.target.value })}
          placeholder="e.g. Mathematics, Science, English Grammar, Social Studies"
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.teachingSubjects && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.teachingSubjects[0]}</p>
        )}
      </div>

      {/* Classes Comfortable Teaching */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1.5">
          Classes You Are Comfortable Teaching (Select all that apply) <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {CLASS_OPTIONS.map((cls) => (
            <label
              key={cls}
              className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition ${
                formData.classesComfortable.includes(cls)
                  ? "border-[#142A46] bg-[#142A46]/5 font-semibold text-[#142A46]"
                  : "border-[#E8E2D5] bg-white text-[#5A6578] hover:bg-[#FDFBF7]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.classesComfortable.includes(cls)}
                onChange={() => handleCheckboxChange(cls)}
                className="rounded border-[#E8E2D5] text-[#142A46] focus:ring-[#142A46]"
              />
              <span>{cls}</span>
            </label>
          ))}
        </div>
        {fieldErrors.classesComfortable && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.classesComfortable[0]}</p>
        )}
      </div>

      {/* Weekly Availability */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Weekly Commitment / Availability <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.weeklyAvailability}
          onChange={(e) => setFormData({ ...formData, weeklyAvailability: e.target.value })}
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        >
          {AVAILABILITY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <p className="mt-1 text-[11px] text-[#5A6578]">
          Project Samarth conducts online classes via Google Meet 3 days a week for each batch.
        </p>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Prior Teaching or Volunteering Experience (Optional)
        </label>
        <textarea
          rows={2}
          value={formData.relevantExperience}
          onChange={(e) => setFormData({ ...formData, relevantExperience: e.target.value })}
          placeholder="Taught home tuitions, peer tutoring, school clubs, or prior NGO work..."
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
      </div>

      {/* Motivation */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Why do you want to volunteer as a teacher with Vyom? <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder="Tell us what motivates you to help students strengthen foundational learning..."
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.motivation && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.motivation[0]}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#5A6578]">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 rounded border-[#E8E2D5] text-[#142A46] focus:ring-[#142A46]"
          />
          <span>
            I confirm that the details provided are accurate and I consent to being contacted by Vyom Foundation regarding volunteer teaching orientations and onboarding.
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.consent[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#142A46] py-3.5 px-6 text-sm font-semibold text-white shadow-md hover:bg-[#1D3D66] focus:outline-none focus:ring-2 focus:ring-[#142A46] focus:ring-offset-2 disabled:opacity-70 transition-all"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-[#E6B85C]" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <GraduationCap className="h-4 w-4 text-[#E6B85C]" />
            <span>Submit Teacher Application</span>
          </>
        )}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Briefcase, FileText } from "lucide-react";
import { INTERNSHIP_ROLES } from "@/data/content";

interface InternshipFormProps {
  initialRole?: string;
  onSuccess?: () => void;
}

export default function InternshipForm({ initialRole, onSuccess }: InternshipFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    position: initialRole || INTERNSHIP_ROLES[0].title,
    skills: "",
    portfolioLink: "",
    motivation: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

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
          type: "internship",
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message);
        setReferenceId(data.referenceId || "");
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to submit application. Please check your fields.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or reach out at vyomfoundationofficial@gmail.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-[#E6B85C]/50 bg-[#FAF4E6] p-8 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold text-[#142A46]">
          Internship Application Received!
        </h3>
        <p className="mt-2 text-sm text-[#242B33] max-w-md mx-auto">
          {message}
        </p>

        {referenceId && (
          <div className="mt-5 inline-block rounded-lg bg-white px-4 py-2 border border-[#E6B85C]/40 shadow-sm">
            <span className="text-xs text-[#5A6578] block">Your Application ID</span>
            <span className="font-mono font-bold text-sm text-[#142A46]">{referenceId}</span>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#E6B85C]/30 text-xs text-[#5A6578]">
          Selected candidates will be invited for a virtual 15-minute conversation with our team leads.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Please review the form:</span>
            {message}
          </div>
        </div>
      )}

      {/* Role Selection */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Select Internship Role <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] font-medium focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        >
          {INTERNSHIP_ROLES.map((role) => (
            <option key={role.id} value={role.title}>
              {role.title} — {role.department} ({role.status})
            </option>
          ))}
        </select>
        {fieldErrors.position && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.position[0]}</p>
        )}
      </div>

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
            placeholder="Aarav Gupta"
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
            placeholder="aarav@college.edu"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & College/Education */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Contact Number / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 99887 76655"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.phone[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            College / Degree & Year <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.education}
            onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            placeholder="e.g. Delhi University, B.A. English (2nd Year)"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.education && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.education[0]}</p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Relevant Skills & Tools <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="e.g. Canva, Figma, Copywriting, Google Docs, Research, Social Media Analytics"
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.skills && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.skills[0]}</p>
        )}
      </div>

      {/* Resume / Portfolio Link */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Resume / Portfolio / Drive Link (Optional but recommended)
        </label>
        <input
          type="url"
          value={formData.portfolioLink}
          onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
          placeholder="https://drive.google.com/your-resume or LinkedIn / Behance profile"
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        <p className="mt-1 text-[11px] text-[#5A6578]">
          Ensure access permissions are set to &apos;Anyone with the link can view&apos;.
        </p>
      </div>

      {/* Motivation Statement */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Why do you want to join Vyom in this specific role? <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder="Share your interest in this role, what you hope to learn, and how your skills can support our educational mission..."
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.motivation && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.motivation[0]}</p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#5A6578]">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 rounded border-[#E8E2D5] text-[#142A46] focus:ring-[#142A46]"
          />
          <span>
            I certify that the information submitted is accurate and I agree to be contacted for interview scheduling and internship updates.
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
            <Briefcase className="h-4 w-4 text-[#E6B85C]" />
            <span>Submit Internship Application</span>
          </>
        )}
      </button>
    </form>
  );
}

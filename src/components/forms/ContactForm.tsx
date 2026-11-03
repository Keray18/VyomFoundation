"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

const CATEGORIES = [
  "General Enquiry",
  "Project Samarth (Student/Parent)",
  "Volunteering Query",
  "Institutional Partnership",
  "Supporting the Mission",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: CATEGORIES[0],
    subject: "",
    message: "",
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
          type: "contact",
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message);
        setReferenceId(data.referenceId || "");
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: CATEGORIES[0],
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to submit message.");
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
      <div className="rounded-2xl border-2 border-[#142A46]/20 bg-[#FAF4E6] p-8 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold text-[#142A46]">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 text-sm text-[#242B33] max-w-md mx-auto">
          {message}
        </p>

        {referenceId && (
          <div className="mt-5 inline-block rounded-lg bg-white px-4 py-2 border border-[#E8E2D5] shadow-sm">
            <span className="text-xs text-[#5A6578] block">Your Message Reference</span>
            <span className="font-mono font-bold text-sm text-[#142A46]">{referenceId}</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold text-[#142A46] underline underline-offset-4 hover:text-[#1D3D66]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Submission Problem</span>
            {message}
          </div>
        </div>
      )}

      {/* Category Pills */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-2">
          What is your enquiry regarding?
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setFormData({ ...formData, category: cat })}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                formData.category === cat
                  ? "bg-[#142A46] text-white shadow-sm"
                  : "bg-white border border-[#E8E2D5] text-[#5A6578] hover:bg-[#F5F1E8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Suman Roy"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.name && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.name[0]}</p>
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
            placeholder="suman@example.com"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Contact Number (Optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="How can we assist you?"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.subject && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.subject[0]}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share details about your query or how you'd like to connect..."
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.message && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.message[0]}</p>
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
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4 text-[#E6B85C]" />
            <span>Send Message to Vyom Foundation</span>
          </>
        )}
      </button>
    </form>
  );
}


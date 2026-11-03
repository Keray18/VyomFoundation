"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Handshake, Building2 } from "lucide-react";

const ORG_TYPES = [
  "School / Academic Institution",
  "College / University Student Chapter",
  "Registered Non-Profit / NGO",
  "Community Organization / Local Center",
  "Corporate / CSR Initiative",
  "Independent Educator / Academic Mentor",
  "Other Institution",
];

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    organizationType: ORG_TYPES[0],
    proposedCollaboration: "",
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
          type: "partner",
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
        setMessage(data.message || "Failed to submit partnership proposal.");
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
      <div className="rounded-2xl border-2 border-[#142A46]/20 bg-[#F5F1E8] p-8 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#142A46] text-[#E6B85C]">
          <Handshake className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold text-[#142A46]">
          Partnership Proposal Received
        </h3>
        <p className="mt-2 text-sm text-[#242B33] max-w-md mx-auto">
          {message}
        </p>

        {referenceId && (
          <div className="mt-5 inline-block rounded-lg bg-white px-4 py-2 border border-[#E8E2D5] shadow-sm">
            <span className="text-xs text-[#5A6578] block">Partnership Docket Reference</span>
            <span className="font-mono font-bold text-sm text-[#142A46]">{referenceId}</span>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-xs text-[#5A6578]">
          Our leadership and partnership coordinator will review your scope of collaboration and reach out for an introductory discussion.
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
            <span className="font-bold block">Please verify your inputs:</span>
            {message}
          </div>
        </div>
      )}

      {/* Row 1: Org Name & Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Organization / Institution Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.organizationName}
            onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
            placeholder="e.g. Mathura Youth Council / Delhi Public School"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.organizationName && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.organizationName[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Organization Category <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.organizationType}
            onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          >
            {ORG_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 2: Contact Person & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Contact Person & Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.contactPerson}
            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            placeholder="e.g. Rajesh Mehra, Principal / Coordinator"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.contactPerson && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.contactPerson[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#142A46] mb-1">
            Official Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="contact@institution.org"
            className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-[11px] text-red-600">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Direct Phone / Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+91 98765 00000"
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.phone && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.phone[0]}</p>
        )}
      </div>

      {/* Proposed Collaboration */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Proposed Mode of Collaboration <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.proposedCollaboration}
          onChange={(e) => setFormData({ ...formData, proposedCollaboration: e.target.value })}
          placeholder="e.g. Student batch referrals, volunteer drive, learning material sponsorship, venue sharing"
          className="w-full rounded-lg border border-[#E8E2D5] bg-white px-3.5 py-2.5 text-xs text-[#242B33] focus:border-[#142A46] focus:outline-none focus:ring-1 focus:ring-[#142A46]"
        />
        {fieldErrors.proposedCollaboration && (
          <p className="mt-1 text-[11px] text-red-600">{fieldErrors.proposedCollaboration[0]}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#142A46] mb-1">
          Details / Context on How We Can Work Together <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share relevant details about your learners, geographic focus, or institutional objectives..."
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
            <span>Sending Proposal...</span>
          </>
        ) : (
          <>
            <Building2 className="h-4 w-4 text-[#E6B85C]" />
            <span>Submit Partnership Proposal</span>
          </>
        )}
      </button>
    </form>
  );
}


"use client";

import { useState } from "react";
import { InternshipRole } from "@/types";
import { Briefcase, Clock, Calendar, Award, CheckCircle, ArrowRight, X } from "lucide-react";
import InternshipForm from "@/components/forms/InternshipForm";

interface RoleDirectoryProps {
  roles: InternshipRole[];
}

export default function RoleDirectory({ roles }: RoleDirectoryProps) {
  const [selectedRole, setSelectedRole] = useState<InternshipRole | null>(null);
  const [filterDepartment, setFilterDepartment] = useState("All");

  const departments = ["All", ...Array.from(new Set(roles.map((r) => r.department)))];

  const filteredRoles =
    filterDepartment === "All"
      ? roles
      : roles.filter((r) => r.department === filterDepartment);

  return (
    <div>
      {/* Department Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setFilterDepartment(dept)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              filterDepartment === dept
                ? "bg-[#142A46] text-[#E6B85C] shadow-sm"
                : "bg-white text-[#5A6578] border border-[#E8E2D5] hover:bg-[#F5F1E8]"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Grid of Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoles.map((role) => {
          const isRecruiting = role.status === "Actively Recruiting";

          return (
            <div
              key={role.id}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 card-hover justify-between ${
                isRecruiting
                  ? "border-[#E8E2D5] hover:border-[#142A46]/40"
                  : "border-slate-200 opacity-90"
              }`}
            >
              <div>
                {/* Header badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-[#5A6578] uppercase tracking-wider">
                    {role.department}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      isRecruiting
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {role.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-serif text-xl font-bold text-[#142A46]">
                  {role.title}
                </h3>

                {/* Meta specifications */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[#5A6578] border-y border-[#E8E2D5]/70 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#142A46]" />
                    <span>{role.commitment}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#142A46]" />
                    <span>{role.duration}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-3 text-xs leading-relaxed text-[#242B33]">
                  {role.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#142A46] block mb-1.5">
                    Key Responsibilities:
                  </span>
                  <ul className="space-y-1 text-xs text-[#5A6578]">
                    {role.responsibilities.slice(0, 3).map((resp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-[#648B78] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills needed */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {role.skills.slice(0, 3).map((sk) => (
                      <span
                        key={sk}
                        className="rounded bg-[#FAF4E6] px-2 py-0.5 text-[10px] font-medium text-[#142A46]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#E8E2D5]">
                <button
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-semibold transition shadow-sm ${
                    isRecruiting
                      ? "bg-[#142A46] text-white hover:bg-[#1D3D66]"
                      : "bg-[#F5F1E8] text-[#142A46] hover:bg-[#E8E2D5]"
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5 text-[#E6B85C]" />
                  <span>{isRecruiting ? "Apply for this Role" : "Express Interest (Upcoming)"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Role Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#E8E2D5] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            <div className="p-6 bg-[#142A46] text-white flex items-center justify-between">
              <div>
                <span className="rounded-full bg-[#E6B85C]/20 text-[#E6B85C] border border-[#E6B85C]/30 px-3 py-0.5 text-xs font-semibold">
                  {selectedRole.department}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-bold">
                  {selectedRole.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Commitment: {selectedRole.commitment} • {selectedRole.duration} ({selectedRole.status})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
                aria-label="Close application form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="mb-6 rounded-xl bg-[#FAF4E6] border border-[#E6B85C]/30 p-3.5 text-xs text-[#142A46]">
                <strong>Recognition & Certificate:</strong> {selectedRole.stipendOrCertificate}
              </div>

              <InternshipForm
                initialRole={selectedRole.title}
                onSuccess={() => {
                  // Keep modal visible with success message
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


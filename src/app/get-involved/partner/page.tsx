import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import PartnerForm from "@/components/forms/PartnerForm";
import {
  Handshake,
  School,
  Building,
  HeartHandshake,
  Users2,
  CheckCircle,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Become a Partner — Collaborate with Vyom Foundation",
  description:
    "Partner with Vyom Foundation: collaborating with schools, universities, NGOs, and corporate CSR supporters to broaden foundational learning access.",
};

const PARTNERSHIP_TRACKS = [
  {
    icon: School,
    title: "Schools & Colleges",
    desc: "Refer students needing remedial attention, host community student screening drives, or establish a campus volunteer chapter.",
  },
  {
    icon: Building,
    title: "Grassroots NGOs & SHGs",
    desc: "Co-create local community learning circles, share offline spaces, or bring Project Samarth online batches to existing learning pods.",
  },
  {
    icon: Users2,
    title: "Educators & Subject Mentors",
    desc: "Contribute curriculum insights, train youth volunteer teachers in remedial pedagogy, or conduct guest workshops.",
  },
  {
    icon: Building2,
    title: "Corporate & Institutional Supporters",
    desc: "Support technology devices (tablets/laptops), study kits, or sponsor educational camps through transparent institutional grants.",
  },
];

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF4E6]/80 to-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#142A46]/10 px-3.5 py-1 text-xs font-semibold text-[#142A46]">
                <Handshake className="h-3.5 w-3.5 text-[#E6B85C]" />
                <span>Institutional Collaboration</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#142A46] tracking-tight leading-tight">
                Collaborate to Expand Educational Horizons.
              </h1>

              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
                We believe in the power of shared roofs. We collaborate with schools, non-profits, student chapters, and ethical organizations to bring structured learning to more children.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Form Grid */}
        <section className="py-20 bg-white border-b border-[#E8E2D5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Collaboration Tracks */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionHeading
                    badge="Partnership Models"
                    title="How We Can Collaborate"
                    description="We customize each institutional partnership to maximize tangible student benefit and mutual respect."
                  />
                </div>

                <div className="space-y-4">
                  {PARTNERSHIP_TRACKS.map((track) => {
                    const Icon = track.icon;
                    return (
                      <div
                        key={track.title}
                        className="rounded-2xl border border-[#E8E2D5] bg-[#FDFBF7] p-5 space-y-2 card-hover"
                      >
                        <div className="flex items-center gap-2.5 font-serif text-base font-bold text-[#142A46]">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#142A46] text-[#E6B85C]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span>{track.title}</span>
                        </div>
                        <p className="text-xs text-[#5A6578] leading-relaxed pl-10">
                          {track.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl border border-[#648B78]/40 bg-[#EBF2EE] p-5 text-xs text-[#242B33] space-y-2">
                  <strong className="text-[#142A46] block text-sm">
                    Our Partnership Pledge:
                  </strong>
                  <p className="text-[#5A6578]">
                    We treat every partner with complete clarity and respect. We execute mutual MoUs with clear expectations, child privacy protection guarantees, and regular progress reports.
                  </p>
                </div>
              </div>

              {/* Right Column: Embedded Partner Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border-2 border-[#142A46] bg-white p-6 sm:p-8 shadow-xl">
                  <div className="border-b border-[#E8E2D5] pb-4 mb-6">
                    <span className="text-[11px] font-bold text-[#E6B85C] uppercase tracking-wider block">
                      Inquiry & Proposal
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#142A46] mt-1">
                      Initiate a Partnership Discussion
                    </h2>
                    <p className="text-xs text-[#5A6578] mt-1">
                      Tell us about your organization and how we can combine forces to support foundational education.
                    </p>
                  </div>

                  <PartnerForm />
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

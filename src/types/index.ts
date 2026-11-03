export interface InternshipRole {
  id: string;
  title: string;
  department: string;
  status: "Actively Recruiting" | "Open" | "Upcoming";
  type: "Remote" | "Hybrid";
  commitment: string;
  duration: string;
  stipendOrCertificate: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  learningOpportunities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  quote: string;
  category: "Teacher" | "Intern" | "Student" | "Mentor";
  avatarInitials: string;
  badge?: string;
}

export interface StoryItem {
  id: string;
  title: string;
  category: "Photo Gallery" | "Events & Camps" | "Student Stories" | "Volunteer Experiences" | "Updates";
  date: string;
  summary: string;
  details: string;
  tags: string[];
  imageCaption: string;
  aspectColor: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string[]>;
}

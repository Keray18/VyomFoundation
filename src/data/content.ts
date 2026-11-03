import { InternshipRole, Testimonial, StoryItem } from "@/types";

export const SITE_CONFIG = {
  name: "Vyom Foundation",
  tagline: "Sheltering every cause together",
  headline: "Creating opportunities. Empowering young minds. Building a brighter future.",
  shortDescription:
    "A youth-led organization committed to making quality foundational educational support more accessible to underserved learners through community participation.",
  fullDescription:
    "Vyom Foundation is a youth-led organization committed to making quality educational support more accessible. Through Project Samarth, its flagship educational initiative, Vyom brings together volunteer teachers and communities to help students strengthen their academic foundations, develop confidence, and become empowered learners.",
  foundedYear: 2026,
  foundedMonth: "March 2026",
  location: "Mathura, Uttar Pradesh, India",
  email: "vyomfoundationofficial@gmail.com",
  flagship: "Project Samarth",
};

export const INTERNSHIP_ROLES: InternshipRole[] = [
  {
    id: "founders-office",
    title: "Founder's Office Intern",
    department: "Executive & Strategy",
    status: "Actively Recruiting",
    type: "Remote",
    commitment: "12-15 hours / week",
    duration: "3-6 Months",
    stipendOrCertificate: "Experience Certificate & Letter of Recommendation",
    summary:
      "Work directly with the founding team on program expansion, community outreach, volunteer coordination, and strategic partnerships for Project Samarth.",
    responsibilities: [
      "Assist leadership in streamlining daily academic operations and volunteer schedules",
      "Draft official communications, institutional partnership proposals, and progress briefs",
      "Coordinate cross-functional tasks between academic volunteers, design, and outreach teams",
      "Analyze batch attendance, session continuity, and qualitative feedback from students",
    ],
    skills: [
      "Strong written and verbal communication",
      "Organizational agility and proactive ownership",
      "Familiarity with Google Workspace (Docs, Sheets, Slides, Meet)",
      "High empathy and passion for grassroots educational equity",
    ],
    learningOpportunities: [
      "High-level exposure to social venture management and educational leadership",
      "Direct mentorship from youth founders",
      "First-hand experience managing non-profit operations from the ground up",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Designing Intern",
    department: "Creative & Media",
    status: "Actively Recruiting",
    type: "Remote",
    commitment: "8-10 hours / week",
    duration: "3 Months",
    stipendOrCertificate: "Experience Certificate & Portfolio Showcase",
    summary:
      "Craft visually compelling graphics, educational worksheets, event posters, and digital campaigns that reflect Vyom Foundation's warm, dignified, and youth-led ethos.",
    responsibilities: [
      "Design clean social media carousels, event announcements, and volunteer recruitment creatives",
      "Develop engaging visual study materials, activity sheets, and certificates for Project Samarth learners",
      "Maintain brand consistency using Vyom Foundation's color system and typography",
      "Collaborate with the content writing team to translate educational messages into visual stories",
    ],
    skills: [
      "Proficiency in Canva, Figma, Adobe Photoshop, or Illustrator",
      "Eye for clean typography, accessible color contrast, and balanced layouts",
      "Ability to handle design turnarounds for scheduled educational campaigns",
      "Respectful visual representation of community learners and educational dignity",
    ],
    learningOpportunities: [
      "Build a polished portfolio of real-world published social impact design assets",
      "Hands-on experience in nonprofit branding and mission-first design systems",
      "Recognition across Vyom's public channels",
    ],
  },
  {
    id: "content-writer",
    title: "Content Writer Intern",
    department: "Editorial & Communications",
    status: "Actively Recruiting",
    type: "Remote",
    commitment: "8-10 hours / week",
    duration: "3 Months",
    stipendOrCertificate: "Experience Certificate & Bylined Articles",
    summary:
      "Give voice to our mission through authentic storytelling, educational articles, student and volunteer profiles, and clear communication materials.",
    responsibilities: [
      "Interview volunteer teachers and learners to document authentic learning journeys and progress stories",
      "Write engaging social media copy, website updates, newsletters, and quarterly impact summaries",
      "Ensure all written pieces respect learner privacy while conveying the heart of Project Samarth",
      "Assist in writing collaborative proposals and letters to educational partners",
    ],
    skills: [
      "Fluent written English with clear, empathetic, and grammatically precise prose",
      "Ability to write for diverse audiences: students, volunteers, donors, and academic partners",
      "Research skills and adherence to ethical storytelling guidelines",
      "Consistency with deadlines and team feedback",
    ],
    learningOpportunities: [
      "Develop strong published narrative writing samples for resumes and portfolios",
      "Deep understanding of developmental education journalism and grassroots communication",
      "Direct editorial guidance and recommendation letter upon successful tenure",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Intern",
    department: "Growth & Outreach",
    status: "Actively Recruiting",
    type: "Remote",
    commitment: "10-12 hours / week",
    duration: "3 Months",
    stipendOrCertificate: "Experience Certificate & Campaign Verification",
    summary:
      "Drive outreach for volunteer recruitment and community awareness through strategic digital distribution, community groups, and campus outreach.",
    responsibilities: [
      "Execute organic outreach strategies to connect with university student communities and educators",
      "Manage posting schedules across LinkedIn, Instagram, and community forums",
      "Track engagement metrics, form conversion rates, and recommend improvements for volunteer sign-ups",
      "Coordinate promotional drives for Project Samarth seasonal camps and interactive workshops",
    ],
    skills: [
      "Understanding of social media algorithms, community groups, and campus outreach channels",
      "Basic analytics literacy (measuring reach, engagement, and conversion)",
      "Creativity in presenting educational initiatives respectfully",
      "Strong coordination and follow-through",
    ],
    learningOpportunities: [
      "Practical experience running targeted social impact awareness campaigns",
      "Ownership over specific recruitment drives and digital engagement goals",
      "Valuable credential in nonprofit digital marketing",
    ],
  },
  {
    id: "research-executive",
    title: "Research Executive Intern",
    department: "Impact & Curriculum",
    status: "Actively Recruiting",
    type: "Remote",
    commitment: "10-12 hours / week",
    duration: "3-6 Months",
    stipendOrCertificate: "Experience Certificate & Research Citation",
    summary:
      "Investigate foundational learning gaps, pedagogical frameworks for classes 5–12, and evaluation methodologies to continuously strengthen Project Samarth.",
    responsibilities: [
      "Conduct desk research on state curricula, learning loss trends, and effective remedial teaching techniques",
      "Draft structured assessment rubrics and diagnostic tests for onboarding new student batches",
      "Analyze qualitative and quantitative academic progress data from ongoing batches",
      "Prepare benchmark reports on peer non-profit models and educational innovations in India",
    ],
    skills: [
      "Strong analytical mindset and academic rigor",
      "Familiarity with foundational literacy, numeracy, and STEM education concepts",
      "Proficiency in spreadsheet data structuring and qualitative synthesis",
      "Commitment to evidence-based community development",
    ],
    learningOpportunities: [
      "Opportunity to contribute to real-world educational program design and assessment protocols",
      "Co-authorship on internal whitepapers and public educational briefs",
      "Mentorship from experienced educators and researchers",
    ],
  },
  {
    id: "pride-inclusion",
    title: "Pride & Inclusion Intern",
    department: "Inclusion & Social Equity",
    status: "Upcoming",
    type: "Remote",
    commitment: "8-10 hours / week",
    duration: "3 Months",
    stipendOrCertificate: "Experience Certificate & Impact Commendation",
    summary:
      "Support our commitment to creating safe, inclusive, welcoming, and empowering learning spaces for every child, volunteer, and community member regardless of background.",
    responsibilities: [
      "Review learning materials, session plans, and volunteer guidelines through an inclusion and empathy lens",
      "Help design inclusive awareness sessions, peer-learning circle prompts, and anti-bullying guidelines",
      "Research best practices for supportive, gender-sensitive, and neurodiverse-friendly learning environments",
      "Support community sensitization initiatives in upcoming offline and online activities",
    ],
    skills: [
      "Deep understanding of diversity, equity, inclusion, and child protection principles",
      "High emotional intelligence, empathy, and active listening skills",
      "Research skills in inclusive educational practices and safe space facilitation",
      "Constructive, collaborative communication style",
    ],
    learningOpportunities: [
      "Direct involvement in shaping the inclusive culture of an emerging educational foundation",
      "Practical experience designing inclusion guidelines for volunteers and educators",
      "Meaningful contribution to accessible education for underrepresented youth",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aakanksha Sharma",
    role: "Volunteer Teacher (Mathematics)",
    location: "Teaching Grade 7 & 8 Batch",
    quote:
      "Teaching with Project Samarth made me realize how a single concept explained patiently can change how a student looks at school. When one of my students finally cracked fractions with confidence after weeks of hesitating, it was the most rewarding hour of my week.",
    category: "Teacher",
    avatarInitials: "AS",
    badge: "Volunteer Educator",
  },
  {
    id: "test-2",
    name: "Rohan Verma",
    role: "Content & Strategy Intern",
    location: "Founder's Office Associate",
    quote:
      "Vyom Foundation doesn't treat interns as observers. From day one, I was entrusted with speaking to volunteer teachers, gathering feedback, and helping build structured progress sheets. It is rare to find a youth-led initiative this sincere about genuine education.",
    category: "Intern",
    avatarInitials: "RV",
    badge: "Former Intern",
  },
  {
    id: "test-3",
    name: "Pooja B.",
    role: "Parent of Class 6 Learner",
    location: "Delhi Online Cohort",
    quote:
      "My daughter used to feel shy and scared to ask doubts in her large school classroom. In Vyom's small batch, the volunteer didi listens to every question patiently. Her test marks in school have visibly improved, but her confidence has grown even more.",
    category: "Student",
    avatarInitials: "PB",
    badge: "Learner Family",
  },
  {
    id: "test-4",
    name: "Devendra K.",
    role: "Volunteer Teacher (Science)",
    location: "Teaching Grade 9 Cohort",
    quote:
      "The 3-days-a-week schedule is well structured, allowing working professionals and college students to contribute consistently without burnout. The students come eager to learn, and their curiosity keeps me inspired every evening.",
    category: "Teacher",
    avatarInitials: "DK",
    badge: "Volunteer Educator",
  },
];

export const STORIES_AND_EVENTS: StoryItem[] = [
  {
    id: "event-camp-mathura",
    title: "Foundational Learning & Art Camp",
    category: "Events & Camps",
    date: "Summer 2026",
    summary:
      "A hands-on workshop combining arithmetic puzzle solving with drawing and creative storytelling for primary and middle school students.",
    details:
      "During this interactive camp, our volunteers introduced conceptual mathematics through paper origami and real-life story problems. Over 35 students participated, creating colorful fraction wheels and illustrating their personal goals.",
    tags: ["Experiential Learning", "Art & Craft", "Math Fun"],
    imageCaption: "Students collaborating on geometry paper models during the creative learning session.",
    aspectColor: "from-blue-600 to-indigo-900",
  },
  {
    id: "story-batch-odisha",
    title: "Bridging the English Phonics Gap in Rural Odisha",
    category: "Student Stories",
    date: "Recent Milestone",
    summary:
      "How structured Google Meet sessions helped a batch of Grade 6 students gain reading fluency and pronounce difficult consonants with confidence.",
    details:
      "Online volunteers connected three evenings a week with a community learning pod in Odisha. Over 10 weeks of phonics drills, interactive reading circles, and vocabulary flashcards, student reading comprehension scores improved by 42%.",
    tags: ["Project Samarth", "Digital Learning", "Reading Fluency"],
    imageCaption: "A student proudly reading an English short story aloud during their evening Google Meet cohort.",
    aspectColor: "from-amber-600 to-amber-900",
  },
  {
    id: "volunteer-spotlight",
    title: "100+ Hours of Dedicated Peer Teaching",
    category: "Volunteer Experiences",
    date: "Community Spotlight",
    summary:
      "Meet our dedicated university volunteers from Mathura and Delhi who commit their evenings to teaching mathematics and science fundamentals.",
    details:
      "Our volunteer cohort includes undergraduates in engineering, humanities, and sciences who balance university tests while consistently showing up for their batches every Tuesday, Thursday, and Saturday.",
    tags: ["Youth Volunteers", "Grassroots", "Consistency"],
    imageCaption: "Volunteer teachers debriefing after their weekly batch evaluations.",
    aspectColor: "from-emerald-700 to-teal-950",
  },
  {
    id: "creative-storytelling",
    title: "Beyond Books: The Power of Storytelling & Theatre",
    category: "Photo Gallery",
    date: "Monthly Activity",
    summary:
      "Weekend sessions where children enact folk tales, write their own poems, and discover civic values through drama and dialogue.",
    details:
      "Education at Vyom Foundation is not confined to textbook rote learning. Our Beyond Academics module integrates theater games, moral discussions, and civic awareness games that nurture empathy and self-expression.",
    tags: ["Extracurricular", "Confidence Building", "Civic Sense"],
    imageCaption: "Children staging a mini play on teamwork and environmental awareness.",
    aspectColor: "from-rose-700 to-amber-900",
  },
  {
    id: "curriculum-update",
    title: "Standardized Foundational Diagnostic Framework Released",
    category: "Updates",
    date: "Academic Roadmap",
    summary:
      "Our curriculum research team finalized an open diagnostic test designed to assess fundamental gaps for students entering Classes 5 through 8.",
    details:
      "The diagnostic test assesses conceptual mastery rather than rote memorization, helping volunteer teachers immediately identify whether a Grade 7 child requires remedial revision on fractions, decimals, or basic grammar.",
    tags: ["Curriculum", "Pedagogy", "Diagnostic Testing"],
    imageCaption: "Visual diagnostic rubric developed by Vyom Foundation research contributors.",
    aspectColor: "from-slate-700 to-slate-900",
  },
];

export const VALUES_LIST = [
  {
    title: "Inclusivity",
    description: "Every learner, regardless of economic circumstance or academic history, deserves a patient, respectful, and nurturing educational space.",
    iconName: "HeartHandshake",
  },
  {
    title: "Collaboration",
    description: "Real change emerges when youth, parents, volunteers, schools, and local communities work together towards a shared vision.",
    iconName: "Users2",
  },
  {
    title: "Continuous Learning",
    description: "We are an organization of learners. We measure, listen, adapt, and refine our teaching methods based on what truly works for each child.",
    iconName: "BookOpenCheck",
  },
  {
    title: "Empowerment",
    description: "Our goal is not temporary dependency but long-term self-reliance, intellectual curiosity, and lasting confidence for students and youth volunteers alike.",
    iconName: "Sparkles",
  },
  {
    title: "Accountability",
    description: "We uphold rigorous honesty about what we currently do, what is planned, how time is invested, and how learning outcomes are evaluated.",
    iconName: "ShieldCheck",
  },
  {
    title: "Community Participation",
    description: "Grassroots transformation cannot be delivered from the outside; it must be co-created with families, local educators, and community anchors.",
    iconName: "Home",
  },
  {
    title: "Sustainable Impact",
    description: "We prioritize consistent, high-retention weekly commitments over one-day photo-ops, ensuring deep, lasting educational transformation.",
    iconName: "TrendingUp",
  },
];

export const SAMARTH_STEPS = [
  {
    step: "01",
    title: "Learner Identification & Connection",
    description: "Partnering with community champions and families in underserved neighborhoods to identify students who struggle with grade-level concepts.",
  },
  {
    step: "02",
    title: "Foundational Diagnostic & Batch Formation",
    description: "Conducting simple, stress-free baseline assessments to group learners into small, peer-aligned cohorts of 4 to 8 students.",
  },
  {
    step: "03",
    title: "Volunteer Teacher Matching",
    description: "Pairing dedicated college students and working professionals with batches matching their subject expertise and schedule.",
  },
  {
    step: "04",
    title: "Structured Online Interactive Classes",
    description: "Conducting 3 sessions per week via Google Meet focusing on conceptual fundamentals, doubt clearance, and active participation.",
  },
  {
    step: "05",
    title: "Bite-sized Homework & Formative Checkpoints",
    description: "Reviewing weekly exercises with positive reinforcement, identifying lingering doubts before moving forward in the syllabus.",
  },
  {
    step: "06",
    title: "Progress Tracking & Holistic Activities",
    description: "Evaluating qualitative confidence growth alongside regular weekend creative camps, storytelling, and civic awareness sessions.",
  },
];

export const SAMARTH_OBJECTIVES = [
  {
    title: "Strengthen Academic Fundamentals",
    description: "Address learning gaps carried over from earlier years in mathematics, science, and languages to ensure current grade success.",
  },
  {
    title: "Dedicated Support for Classes 5–12",
    description: "Tailor learning pacing and concept clarity specifically for middle, high school, and senior secondary students.",
  },
  {
    title: "Build Conceptual Understanding",
    description: "Shift away from rote memorization toward real-world application, intuitive problem solving, and analytical thinking.",
  },
  {
    title: "Encourage Confidence & Independent Thinking",
    description: "Create an emotionally safe environment where asking doubts is celebrated and intellectual curiosity thrives.",
  },
  {
    title: "Promote Civic Sense & Life Values",
    description: "Foster environmental responsibility, mutual respect, civic duties, hygiene awareness, and positive peer engagement.",
  },
  {
    title: "Creative & Extracurricular Flourishing",
    description: "Nurture holistic expression through drawing, music, theater, craft, and seasonal camps alongside academic lessons.",
  },
];

export const BEYOND_ACADEMICS = [
  {
    title: "Art & Craft",
    description: "Hands-on origami, recycled craft, poster making, and visual arts that develop fine motor skills and spatial imagination.",
  },
  {
    title: "Dance & Singing",
    description: "Joyful group rhythm, cultural songs, and movement exercises that relieve school pressure and build self-esteem.",
  },
  {
    title: "Storytelling & Dialogue",
    description: "Narrative circles where students recount tales, discuss moral dilemmas, and practice public speaking in a warm circle.",
  },
  {
    title: "Drawing & Visual Arts",
    description: "Freehand sketching, coloring, and emotion expression through illustration, providing a creative release.",
  },
  {
    title: "Festivals & Cultural Gatherings",
    description: "Celebrating Indian cultural diversity, togetherness, and community bonds through inclusive holiday celebrations.",
  },
  {
    title: "Seasonal Learning Camps",
    description: "Intensive summer and winter workshops combining fun experiments, leadership games, and special guest interactions.",
  },
];

// ============================================================
// Site-wide config. Edit this file to personalize the whole site.
// TODO(gavin): replace the placeholder values below with your real info.
// ============================================================

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  /** Your name — shown in the header, hero, and page titles. */
  name: 'Gavin Hsia',

  /** Short handle / role shown under your name. */
  role: 'Software Engineer',

  /** One-line pitch for the hero. Keep it punchy. */
  tagline: 'Building reliable software — this is the in-depth home for my internship and personal work.',

  /** Longer bio for the About page (a few sentences). TODO: replace. */
  bio: [
    "TODO: Write a short intro paragraph about yourself — what you focus on, what excites you technically, and where you're headed.",
    'TODO: Add a second paragraph with a bit more detail: relevant coursework, the kinds of problems you like solving, or what you are currently learning.',
  ],

  /** Contact email. */
  email: 'gavin.h.hsia@gmail.com',

  /** Path to your resume PDF in /public. Replace public/resume.pdf with your real one. */
  resumePath: '/resume.pdf',

  /** Social / profile links. Remove any you don't use. TODO: fill in real URLs. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/Gavin-Hsia' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/TODO' },
    { label: 'Email', href: 'mailto:gavin.h.hsia@gmail.com' },
  ] as SocialLink[],

  /** Skills grouped for the Resume/About pages. TODO: adjust to your stack. */
  skills: [
    { group: 'Languages', items: ['TODO', 'TODO', 'TODO'] },
    { group: 'Frameworks', items: ['TODO', 'TODO'] },
    { group: 'Tools & Infra', items: ['TODO', 'TODO'] },
  ],

  /** Education for the Resume page. TODO: replace with your real education. */
  education: [
    {
      school: 'TODO: University Name',
      credential: 'B.S. in Computer Engineering', // TODO
      detail: 'TODO: GPA, honors, relevant coursework, or activities',
      dates: 'Expected 2027', // TODO
    },
  ],
} as const;

/** Primary nav links. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
] as const;

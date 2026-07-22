// ============================================================
// Site-wide config. Edit this file to personalize the whole site.
// Factual data below is filled in from Gavin's resume.
// Prose fields left as placeholders are marked TODO(gavin) — fill those in.
// ============================================================

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  /** Your name — shown in the header, hero, and page titles. */
  name: 'Gavin Hsia',

  /** Short handle / role shown under your name. */
  role: 'Electrical & Computer Engineer',

  /** One-line pitch for the hero. Keep it punchy. */
  tagline:
    'Hardware & embedded engineer — PCB design, signal integrity, and microcontroller bring-up. This is the in-depth home for my internship and personal work.',

  /**
   * Longer bio. bio[0] shows on the home intro; bio[1] shows on the contact page.
   * TODO(gavin): these are starter drafts from your resume — rewrite in your own voice.
   */
  bio: [
    'I’m an Electrical & Computer Engineering student at Santa Clara University focused on hardware and embedded systems — PCB design, signal integrity, and taking boards from schematic through bring-up. I like the point where analog reality meets digital design: chasing down an off-isolation failure on a vector network analyzer, or trimming part count on an ESP32 board until the power rails are clean.',
    'I’m currently a Networking R&D Hardware Design Intern at Hewlett Packard Enterprise, and I build and validate hardware for SCU Formula SAE on the side. I’m always happy to talk hardware, embedded, or signal integrity — reach out.',
  ],

  /** Contact email. */
  // NOTE(gavin): your resume lists gavin.hsia5@gmail.com — confirm which you want public.
  email: 'gavin.h.hsia@gmail.com',

  /** Path to your resume PDF in /public. */
  resumePath: '/resume.pdf',

  /** Social / profile links. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/Gavin-Hsia' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gavinhsia/' },
    { label: 'Email', href: 'mailto:gavin.h.hsia@gmail.com' },
  ] as SocialLink[],

  /** Skills grouped for the Resume page. From resume. */
  skills: [
    { group: 'Languages', items: ['C', 'C++', 'Python', 'SystemVerilog', 'ARM Assembly'] },
    {
      group: 'Design Tools',
      items: ['KiCad', 'Cadence Allegro', 'Cadence SKILL', 'Altium', 'Sigrity', 'LTspice', 'MATLAB'],
    },
    {
      group: 'Lab Equipment',
      items: ['Vector Network Analyzer', 'Oscilloscope', 'Logic Analyzer', 'Soldering'],
    },
    {
      group: 'Technologies',
      items: [
        'PCB Design',
        'Signal Integrity',
        'S-Parameters',
        'Crosstalk Analysis',
        'Clock Distribution',
        'ITU-T G.703',
        'Controlled Impedance',
        'Microcontroller Bring-Up',
        'I2C',
        'SPI',
        'Git',
        'Linux',
        'Jira',
      ],
    },
  ],

  /** Education for the Resume page. From resume. */
  education: [
    {
      school: 'Santa Clara University',
      credential: 'B.S. in Electrical and Computer Engineering',
      detail: 'TODO(gavin): add GPA, honors, or relevant coursework if you’d like.',
      dates: 'Expected June 2027',
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

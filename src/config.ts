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
    'Hardware & networking engineer — PCB design, signal integrity, and board bring-up. This is the in-depth home for my internship and personal work.',

  /**
   * Longer bio. bio[0] shows on the home intro; bio[1] shows on the contact page.
   * TODO(gavin): these are starter drafts from your resume — rewrite in your own voice.
   */
  bio: [
    'I’m an Electrical & Computer Engineering student at Santa Clara University, currently a Networking R&D Hardware Design Intern at Hewlett Packard Enterprise. I work across the hardware stack — PCB design, signal integrity, and board bring-up — and just as comfortably on the embedded side, writing firmware and bringing up microcontrollers. What I enjoy most is owning a design end to end: laying out the hardware, then writing the firmware that runs on it.',
    'I’m currently a Networking R&D Hardware Design Intern at Hewlett Packard Enterprise, and I build and validate hardware for SCU Formula SAE on the side. I’m always happy to talk hardware, embedded, or signal integrity — reach out.',
  ],

  /** Contact email. */
  email: 'gavin.hsia5@gmail.com',

  /** Path to your resume PDF in /public. */
  resumePath: '/resume.pdf',

  /** Social / profile links. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/Gavin-Hsia' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gavinhsia/' },
    { label: 'Email', href: 'mailto:gavin.hsia5@gmail.com' },
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
      detail:
        'Relevant coursework: Real-Time Embedded Systems, Electronic Circuits, Computer Architecture, Logic Design, Advanced Programming, Microprocessor System Design, Electric Circuits, Abstract Data Types & Architecture, Theory of Algorithms, Physics Electromagnetism, Operating Systems, Communications & Networks, Electromagnetics, Digital Signal Processing, Electronics Prototyping.',
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

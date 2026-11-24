export const SKILL_ICON_VIEW_BOX = '0 0 32 32';

export const SKILLS = [
  {
    id: 'hubspot',
    name: 'HubSpot',
    svgMarkup: `
      <circle cx="19" cy="19" r="6" fill="none" stroke="#FF7A59" stroke-width="3" />
      <path d="M19 13V7M14.5 16.5L8.5 13" stroke="#FF7A59" stroke-width="3" fill="none" />
      <circle cx="19" cy="5" r="3" fill="#FF7A59" />
      <circle cx="6.5" cy="12" r="3" fill="#FF7A59" />
      <circle cx="25" cy="25" r="2" fill="#FF7A59" />
    `,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    svgMarkup: `
      <rect width="32" height="32" rx="3" fill="#F7DF1E" />
      <text x="29" y="28" text-anchor="end" font-size="15" font-weight="700"
            font-family="Arial, sans-serif" fill="#000">JS</text>
    `,
  },
  {
    id: 'css',
    name: 'CSS',
    svgMarkup: `
      <path d="M4 2h24l-2.2 24.5L16 30 6.2 26.5z" fill="#1572B6" />
      <path d="M16 27.2l7.9-2.2 1.9-21.1H16z" fill="#33A9DC" />
      <text x="16" y="19" text-anchor="middle" font-size="8" font-weight="700"
            font-family="Arial, sans-serif" fill="#fff">CSS</text>
    `,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    svgMarkup: `
      <rect width="32" height="32" rx="7" fill="#635BFF" />
      <text x="16" y="23" text-anchor="middle" font-size="20" font-weight="700"
            font-family="Arial, sans-serif" fill="#fff">S</text>
    `,
  },
  {
    id: 'google-maps',
    name: 'Google Maps',
    svgMarkup: `
      <path d="M16 2a9 9 0 0 0-9 9c0 7 9 19 9 19s9-12 9-19a9 9 0 0 0-9-9z" fill="#EA4335" />
      <circle cx="16" cy="11" r="3.5" fill="#fff" />
    `,
  },
  {
    id: 'astro',
    name: 'Astro',
    svgMarkup: `
      <path d="M16 3L6 27h5l5-12 5 12h5z" fill="#14213D" />
      <path d="M12 27l4-6 4 6z" fill="#FCA311" />
    `,
  },
];
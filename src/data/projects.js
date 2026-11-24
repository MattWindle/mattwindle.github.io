export const MAX_PROJECTS = 4;

export const SHAPE_VARIANTS = {
  CIRCLE: 'circle',
  ROUNDED_SQUARE: 'rounded-square',
  RING: 'ring',
  TRIANGLE: 'triangle',
};

export const PROJECTS = [
  {
    slug: 'course-basket',
    hashtag: '#hubspot',
    title: 'Course basket',
    description:
      'Checkout built on HubSpot Deals and line items, with live places remaining.',
    tags: ['HubSpot', 'JavaScript'],
    shapeVariant: SHAPE_VARIANTS.CIRCLE,
    href: '#projects', // placeholder until project pages exist
  },
  {
    slug: 'memberships-sso',
    hashtag: '#sso',
    title: 'Memberships SSO',
    description:
      'Single sign-on from HubSpot Memberships into a learning platform.',
    tags: ['SSO', 'Serverless'],
    shapeVariant: SHAPE_VARIANTS.ROUNDED_SQUARE,
    href: '#projects',
  },
  {
    slug: 'lighthouse-monitor',
    hashtag: '#performance',
    title: 'Lighthouse monitor',
    description:
      'A dashboard tracking PageSpeed scores on key client pages.',
    tags: ['Performance', 'API'],
    shapeVariant: SHAPE_VARIANTS.RING,
    href: '#projects',
  },
  {
    slug: 'project-four',
    hashtag: '#new',
    title: '[PROJECT TITLE]',
    description: '[Short description of a fourth project.]',
    tags: ['[Tag]', '[Tag]'],
    shapeVariant: SHAPE_VARIANTS.TRIANGLE,
    href: '#projects',
  },
].slice(0, MAX_PROJECTS);
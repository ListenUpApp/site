export interface NavLink {
  title: string
  href: string
}

export interface NavGroup {
  title: string
  links: NavLink[]
}

export const docsNavigation = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', href: '/docs' },
    ],
  },
] as const satisfies readonly NavGroup[]

export const apiNavigation = [
  {
    title: 'Overview',
    links: [
      { title: 'Introduction', href: '/api' },
    ],
  },
] as const satisfies readonly NavGroup[]

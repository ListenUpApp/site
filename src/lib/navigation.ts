export interface NavLink {
  title: string
  href: string
}

export interface NavGroup {
  title: string
  links: NavLink[]
}

export const docsNavigation: NavGroup[] = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', href: '/docs' },
    ],
  },
]

export const apiNavigation: NavGroup[] = [
  {
    title: 'Overview',
    links: [
      { title: 'Introduction', href: '/api' },
    ],
  },
]

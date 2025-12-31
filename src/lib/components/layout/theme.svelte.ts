import { createContext } from 'svelte'

export type Theme = 'light' | 'dark'

export interface ThemeContext {
  readonly theme: Theme
  toggle: () => void
}

export const [getThemeContext, setThemeContext] = createContext<ThemeContext>()

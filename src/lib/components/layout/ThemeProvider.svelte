<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { Theme } from './theme.svelte'
  import { onMount } from 'svelte'
  import { setThemeContext } from './theme.svelte'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()

  let theme = $state<Theme>('light')

  function getSystemTheme(): Theme {
    if (typeof window === 'undefined')
      return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function applyTheme(t: Theme) {
    document.documentElement.classList.toggle('dark', t === 'dark')
  }

  function toggle() {
    theme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    applyTheme(theme)
  }

  setThemeContext({
    get theme() {
      return theme
    },
    toggle,
  })

  onMount(() => {
    // Use stored preference, or fall back to system preference
    const stored = localStorage.getItem('theme') as Theme | null
    theme = stored ?? getSystemTheme()
    applyTheme(theme)

    // Listen for system preference changes (only affects initial load if no stored preference)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      // Only react to system changes if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        theme = getSystemTheme()
        applyTheme(theme)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  })
</script>

{@render children()}

<script lang='ts'>
  import { Button } from '$lib/components/ui/button'
  import { Moon, Sun } from '@lucide/svelte'
  import { getThemeContext } from './theme.svelte'

  const ctx = getThemeContext()
</script>

<Button variant='ghost' size='icon' onclick={ctx.toggle} aria-label='Toggle theme'>
  {#if ctx.theme === 'light'}
    <Sun class='size-5' />
  {:else}
    <Moon class='size-5' />
  {/if}
</Button>

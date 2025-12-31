<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { cn } from '$lib/utils'

  interface Props {
    sticky?: boolean
    children: Snippet
  }

  const { sticky = false, children }: Props = $props()
</script>

<div class={cn(sticky && 'xl:sticky xl:top-24')}>
  {@render children()}
</div>

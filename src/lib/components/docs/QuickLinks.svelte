<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<div class='
  not-prose my-8 grid grid-cols-1 gap-4
  sm:grid-cols-2
'>
  {@render children()}
</div>

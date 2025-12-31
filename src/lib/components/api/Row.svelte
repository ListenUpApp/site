<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<div class='
  grid grid-cols-1 items-start gap-x-16 gap-y-10
  xl:grid-cols-2
'>
  {@render children()}
</div>

<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<ul class='not-prose divide-y divide-border'>
  {@render children()}
</ul>

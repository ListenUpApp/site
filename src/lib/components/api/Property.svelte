<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface Props {
    name: string
    type: string
    required?: boolean
    children: Snippet
  }

  const { name, type, required = false, children }: Props = $props()
</script>

<li class='py-4'>
  <div class='flex items-center gap-x-3'>
    <code class='text-sm font-semibold text-foreground'>{name}</code>
    <span class='
      rounded-lg bg-muted px-1.5 py-0.5 text-xs text-muted-foreground
    '>
      {type}
    </span>
    {#if required}
      <span class='text-xs text-rose-500'>required</span>
    {/if}
  </div>
  <div class='mt-2 text-sm text-muted-foreground'>
    {@render children()}
  </div>
</li>

<script lang='ts'>
  import type { Component } from 'svelte'
  import { cn } from '$lib/utils'

  interface Props {
    title: string
    description: string
    href: string
    icon?: Component
  }

  const { title, description, href, icon: Icon }: Props = $props()
</script>

<a
  {href}
  class={cn(
    'group relative rounded-xl border border-border p-6',
    `
      transition-colors
      hover:border-primary/50 hover:bg-muted/50
    `,
  )}
>
  {#if Icon}
    <Icon class='size-8 text-primary' />
  {/if}
  <h3 class='
    mt-4 font-semibold text-foreground
    group-hover:text-primary
  '>
    {title}
  </h3>
  <p class='mt-1 text-sm text-muted-foreground'>
    {description}
  </p>
</a>

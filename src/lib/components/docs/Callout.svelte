<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { cn } from '$lib/utils'
  import { AlertTriangle, Info, Lightbulb } from '@lucide/svelte'

  interface Props {
    type?: 'note' | 'warning' | 'tip'
    title?: string
    children: Snippet
  }

  const { type = 'note', title, children }: Props = $props()

  const styles = {
    note: {
      container: 'bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800',
      icon: 'text-sky-600 dark:text-sky-400',
      title: 'text-sky-900 dark:text-sky-200',
    },
    warning: {
      container: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800',
      icon: 'text-amber-600 dark:text-amber-400',
      title: 'text-amber-900 dark:text-amber-200',
    },
    tip: {
      container: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800',
      icon: 'text-emerald-600 dark:text-emerald-400',
      title: 'text-emerald-900 dark:text-emerald-200',
    },
  }

  const icons = {
    note: Info,
    warning: AlertTriangle,
    tip: Lightbulb,
  }

  const Icon = $derived(icons[type])
  const style = $derived(styles[type])
</script>

<div class={cn('not-prose my-6 flex gap-4 rounded-lg border p-4', style.container)}>
  <Icon class={cn('mt-0.5 size-5 flex-none', style.icon)} />
  <div class='flex-1'>
    {#if title}
      <p class={cn('mb-1 font-semibold', style.title)}>{title}</p>
    {/if}
    <div class='
      text-sm text-muted-foreground
      [&>p]:m-0
    '>
      {@render children()}
    </div>
  </div>
</div>

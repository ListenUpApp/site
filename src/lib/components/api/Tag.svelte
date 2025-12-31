<script lang='ts'>
  import { cn } from '$lib/utils'

  interface Props {
    value: string
    variant?: 'small' | 'medium'
  }

  const { value, variant = 'medium' }: Props = $props()

  const colorMap: Record<string, string> = {
    GET: 'text-emerald-500 bg-emerald-500/10 ring-emerald-500/20',
    POST: 'text-sky-500 bg-sky-500/10 ring-sky-500/20',
    PUT: 'text-amber-500 bg-amber-500/10 ring-amber-500/20',
    DELETE: 'text-rose-500 bg-rose-500/10 ring-rose-500/20',
    PATCH: 'text-purple-500 bg-purple-500/10 ring-purple-500/20',
  }

  const color = $derived(colorMap[value] ?? 'text-zinc-500 bg-zinc-500/10 ring-zinc-500/20')
</script>

<span
  class={cn(
    'font-mono font-semibold',
    variant === 'small' && 'text-[0.625rem]',
    variant === 'medium' && 'rounded-lg px-1.5 py-0.5 text-xs ring-1 ring-inset',
    color,
  )}
>
  {value}
</span>

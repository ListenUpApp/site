<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Tag } from '$lib/components/api'
  import { cn } from '$lib/utils'
  import { Check, Copy } from '@lucide/svelte'

  interface Props {
    title?: string
    tag?: string
    label?: string
    children: Snippet
  }

  const { title, tag, label, children }: Props = $props()

  let copied = $state(false)
  let codeElement: HTMLElement | undefined = $state()

  async function copyCode() {
    const code = codeElement?.textContent ?? ''
    await navigator.clipboard.writeText(code)
    copied = true
    setTimeout(() => (copied = false), 1500)
  }
</script>

<div class='
  not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md ring-1
  ring-white/10
'>
  {#if title || tag || label}
    <div class='
      flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-3
    '>
      {#if tag}
        <Tag variant='small' value={tag} />
      {/if}
      {#if tag && label}
        <span class='size-1 rounded-full bg-zinc-500'></span>
      {/if}
      {#if label}
        <span class='font-mono text-xs text-zinc-400'>{label}</span>
      {/if}
      {#if title}
        <span class='ml-auto text-xs font-semibold text-white'>{title}</span>
      {/if}
    </div>
  {/if}
  <div class='group relative'>
    <div bind:this={codeElement} class='
      overflow-x-auto p-4 text-sm text-zinc-300
      [&>pre]:m-0 [&>pre]:bg-transparent [&>pre]:p-0
    '>
      {@render children()}
    </div>
    <button
      type='button'
      onclick={copyCode}
      class={cn(
        'absolute top-3 right-3 rounded-lg p-2 opacity-0 transition',
        `
          group-hover:opacity-100
          focus:opacity-100
        `,
        copied
          ? 'bg-emerald-500/20 text-emerald-400'
          : `
            bg-white/5 text-zinc-400
            hover:bg-white/10 hover:text-zinc-300
          `,
      )}
    >
      {#if copied}
        <Check class='size-4' />
      {:else}
        <Copy class='size-4' />
      {/if}
    </button>
  </div>
</div>

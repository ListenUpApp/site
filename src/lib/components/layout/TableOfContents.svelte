<script lang='ts'>
  import { cn } from '$lib/utils'
  import { onMount } from 'svelte'

  interface TocItem {
    id: string
    text: string
    level: number
  }

  let items = $state<TocItem[]>([])
  let activeId = $state<string | null>(null)

  onMount(() => {
    const headings = document.querySelectorAll('article h2, article h3')
    items = Array.from(headings).map(heading => ({
      id: heading.id,
      text: heading.textContent ?? '',
      level: Number.parseInt(heading.tagName[1]),
    }))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id
            break
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' },
    )

    headings.forEach(heading => observer.observe(heading))

    return () => observer.disconnect()
  })
</script>

{#if items.length > 0}
  <nav class='space-y-1'>
    <p class='mb-3 text-sm font-semibold text-foreground'>On this page</p>
    {#each items as item}
      <a
        href={`#${item.id}`}
        class={cn(
          'block text-sm transition-colors',
          item.level === 3 && 'pl-3',
          activeId === item.id
            ? 'font-medium text-primary'
            : `
              text-muted-foreground
              hover:text-foreground
            `,
        )}
      >
        {item.text}
      </a>
    {/each}
  </nav>
{/if}

<script lang='ts'>
  import type { NavGroup } from '$lib/navigation'
  import { page } from '$app/stores'
  import { cn } from '$lib/utils'

  interface Props {
    navigation: NavGroup[]
  }

  const { navigation }: Props = $props()
</script>

<nav class='space-y-6'>
  {#each navigation as group}
    <div>
      <h3 class='mb-2 text-sm font-semibold text-foreground'>
        {group.title}
      </h3>
      <ul class='space-y-1'>
        {#each group.links as link}
          {@const isActive = $page.url.pathname === link.href}
          <li>
            <a
              href={link.href}
              class={cn(
                'block rounded-md px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-primary/10 font-medium text-primary'
                  : `
                    text-muted-foreground
                    hover:bg-muted hover:text-foreground
                  `,
              )}
            >
              {link.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</nav>

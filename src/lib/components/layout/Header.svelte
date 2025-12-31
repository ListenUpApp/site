<script lang='ts'>
  import { Logo, ThemeToggle } from '$lib/components/layout'
  import { Button } from '$lib/components/ui/button'
  import { Menu } from '@lucide/svelte'

  interface Props {
    onMenuClick?: () => void
  }

  const { onMenuClick }: Props = $props()
</script>

<header class='
  sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur
  supports-[backdrop-filter]:bg-background/60
'>
  <div class='
    mx-auto flex h-14 max-w-7xl items-center justify-between px-4
    sm:px-6
    lg:px-8
  '>
    <div class='flex items-center gap-4'>
      {#if onMenuClick}
        <Button variant='ghost' size='icon' class='lg:hidden' onclick={onMenuClick}>
          <Menu class='size-5' />
          <span class='sr-only'>Open menu</span>
        </Button>
      {/if}
      <a href='/docs' class='flex items-center gap-2'>
        <Logo class='h-8 w-10' />
        <span class='font-semibold'>ListenUp</span>
      </a>
    </div>

    <nav class='
      hidden items-center gap-6
      md:flex
    '>
      <a href='/docs' class='
        text-sm font-medium text-muted-foreground transition-colors
        hover:text-foreground
      '>
        Docs
      </a>
      <a href='/api' class='
        text-sm font-medium text-muted-foreground transition-colors
        hover:text-foreground
      '>
        API
      </a>
      <a
        href='https://github.com/listenup/listenup'
        target='_blank'
        rel='noopener noreferrer'
        class='
          text-sm font-medium text-muted-foreground transition-colors
          hover:text-foreground
        '
      >
        GitHub
      </a>
    </nav>

    <div class='flex items-center gap-2'>
      <ThemeToggle />
    </div>
  </div>
</header>

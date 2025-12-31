<script lang='ts'>
  import { Sidebar } from '$lib/components/layout'
  import { Button } from '$lib/components/ui/button'
  import { apiNavigation } from '$lib/navigation'
  import { Menu } from '@lucide/svelte'

  const { children } = $props()

  let sidebarOpen = $state(false)
</script>

<!-- Mobile header -->
<div class='
  sticky top-0 z-50 flex items-center gap-4 border-b border-border
  bg-background/95 px-4 py-3 backdrop-blur
  lg:hidden
'>
  <Button variant='ghost' size='icon' onclick={() => (sidebarOpen = !sidebarOpen)}>
    <Menu class='size-5' />
    <span class='sr-only'>Toggle menu</span>
  </Button>
  <a href='/api' class='font-semibold'>ListenUp API</a>
</div>

<div class='
  mx-auto max-w-7xl px-4
  sm:px-6
  lg:px-8
'>
  <div class='lg:grid lg:grid-cols-[240px_1fr] lg:gap-8'>
    <!-- Sidebar -->
    <aside class={sidebarOpen
      ? `
        fixed inset-0 z-40 bg-background pt-16
        lg:relative lg:pt-0
      `
      : `
        hidden
        lg:block
      `}>
      <div class='
        sticky top-20 overflow-y-auto py-8
        lg:max-h-[calc(100vh-5rem)]
      '>
        {#if sidebarOpen}
          <div class='
            mb-4 flex justify-end px-4
            lg:hidden
          '>
            <Button variant='ghost' size='sm' onclick={() => (sidebarOpen = false)}>
              Close
            </Button>
          </div>
        {/if}
        <Sidebar navigation={apiNavigation} />
      </div>
    </aside>

    <!-- Main content -->
    <div class='py-8'>
      {@render children()}
    </div>
  </div>
</div>

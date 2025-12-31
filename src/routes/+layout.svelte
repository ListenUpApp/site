<script lang='ts'>
  import { page } from '$app/stores'
  import { Footer, Header, ThemeProvider } from '$lib/components/layout'
  import './layout.css'

  const { children } = $props()

  // Docs and API pages handle their own header for mobile menu
  const isDocsOrApi = $derived(
    $page.url.pathname.startsWith('/docs') || $page.url.pathname.startsWith('/api'),
  )
</script>

<svelte:head>
  <link rel='icon' href='/favicon.svg' />
</svelte:head>

<ThemeProvider>
  <div class='flex min-h-screen flex-col'>
    {#if !isDocsOrApi}
      <Header />
    {:else}
      <div class='
        hidden
        lg:block
      '>
        <Header />
      </div>
    {/if}
    <main class='flex-1'>
      {@render children()}
    </main>
    <Footer />
  </div>
</ThemeProvider>

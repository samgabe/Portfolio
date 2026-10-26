<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Global components -->
    <ClientOnly>
      <ThemeToggle />
      <ScrollToTop />
    </ClientOnly>
  </div>
</template>

<script setup>
// SEO and meta
useHead({
  titleTemplate: '%s - Sam Dev Builds',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0f172a' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

// Theme initialization
onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <TheNavbar />
    
    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
// Layout meta
definePageMeta({
  title: 'Home'
})
</script>

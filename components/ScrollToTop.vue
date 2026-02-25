<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
  >
    <button
      v-if="show"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 bg-gradient-primary text-white rounded-full shadow-lg hover:shadow-glow transform hover:-translate-y-1 transition-all duration-200 focus-ring z-40"
      title="Scroll to top"
    >
      <Icon name="i-heroicons-chevron-up" class="w-5 h-5" />
    </button>
  </Transition>
</template>

<script setup>
// Show/hide state
const show = ref(false)

// Check scroll position
const checkScroll = () => {
  if (process.client) {
    show.value = window.scrollY > 300
  }
}

// Scroll to top
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// Add scroll listener
onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', checkScroll)
    checkScroll()
  }
})

// Cleanup
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', checkScroll)
  }
})
</script>

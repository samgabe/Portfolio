<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors focus-ring"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 transform rotate-180"
      enter-to-class="opacity-100 transform rotate-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform rotate-0"
      leave-to-class="opacity-0 transform rotate-180"
    >
      <Icon
        :key="isDark ? 'dark' : 'light'"
        :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
        class="w-5 h-5"
      />
    </Transition>
  </button>
</template>

<script setup>
// Theme state
const isDark = ref(false)

// Initialize theme
onMounted(() => {
  if (process.client) {
    isDark.value = document.documentElement.classList.contains('dark')
  }
})

// Toggle theme
const toggleTheme = () => {
  if (process.client) {
    isDark.value = !isDark.value
    
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
}

// Listen for system theme changes
if (process.client) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      document.documentElement.classList.toggle('dark', e.matches)
    }
  })
}
</script>

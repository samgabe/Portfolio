<template>
  <nav class="fixed top-0 w-full glass z-50 safe-top">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
            <Icon name="i-heroicons-code-bracket" class="w-6 h-6 text-white" />
          </div>
          <span class="font-bold text-xl gradient-text">Sam Dev Builds</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="nav-link"
            :class="{ 'text-primary-500': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
          
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <!-- CTA Button -->
          <NuxtLink to="#contact" class="btn-primary">
            Get In Touch
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
        >
          <Icon
            :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="w-6 h-6"
          />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-gray-200 dark:border-dark-300"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="nav-link px-2 py-1"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
            
            <div class="flex items-center justify-between px-2">
              <ThemeToggle />
              <NuxtLink to="#contact" class="btn-primary text-sm">
                Get In Touch
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
// Mobile menu state
const mobileMenuOpen = ref(false)

// Navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

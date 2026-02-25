<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <!-- Modal Content -->
        <div
          class="relative bg-white dark:bg-dark-100 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors z-10"
          >
            <Icon name="i-heroicons-x-mark" class="w-6 h-6" />
          </button>

          <!-- Project Header -->
          <div class="relative h-64 overflow-hidden">
            <img
              v-if="project.image && !imageError"
              :src="project.image"
              :alt="`${project.name} preview`"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <div 
              v-else
              class="absolute inset-0 bg-gradient-to-br flex items-center justify-center"
              :class="project.gradient"
            >
              <Icon :name="project.icon" class="w-24 h-24 text-white" />
            </div>
            
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-white/90 dark:bg-dark-100/90 rounded-full text-xs font-medium backdrop-blur-xs">
                {{ project.status }}
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-8">
            <div class="mb-6">
              <h2 class="heading-xl mb-2">{{ project.name }}</h2>
              <p class="text-body">{{ project.description }}</p>
            </div>

            <!-- Project Details Grid -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <!-- Technologies -->
              <div>
                <h3 class="font-semibold mb-4">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="tech-badge"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Project Info -->
              <div>
                <h3 class="font-semibold mb-4">Project Details</h3>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-dark-600">Industry:</span>
                    <span class="font-medium">{{ project.industry }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-dark-600">Duration:</span>
                    <span class="font-medium">{{ project.duration }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-dark-600">Status:</span>
                    <span class="font-medium text-green-500">{{ project.status }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Features -->
            <div class="mb-8">
              <h3 class="font-semibold mb-4">Key Features</h3>
              <ul class="grid md:grid-cols-2 gap-3">
                <li 
                  v-for="feature in project.features" 
                  :key="feature"
                  class="flex items-center space-x-2"
                >
                  <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Impact -->
            <div class="mb-8">
              <h3 class="font-semibold mb-4">Impact & Results</h3>
              <div class="card p-6">
                <p class="text-body">{{ project.impact }}</p>
              </div>
            </div>

            <!-- Project Links -->
            <div class="flex flex-wrap gap-4">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
              >
                <Icon name="i-simple-icons-github" class="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
              >
                <Icon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5 mr-2" />
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// Props
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Emits
const emit = defineEmits(['close'])

// State
const imageError = ref(false)

// Computed
const show = computed(() => !!props.project)

// Methods
const closeModal = () => {
  emit('close')
}

// Handle image loading error
const handleImageError = () => {
  imageError.value = true
  console.warn(`Failed to load image for ${props.project.name}`)
}

// Reset error when project changes
watch(() => props.project, () => {
  imageError.value = false
})

// Close on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

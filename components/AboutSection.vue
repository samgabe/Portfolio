<template>
  <section id="about" class="section-padding bg-white dark:bg-dark-100">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg gradient-text mb-4">About Me</h2>
        <p class="text-body max-w-2xl mx-auto">
          Passionate developer with a track record of delivering exceptional solutions across diverse industries
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              I'm a full-stack developer and cybersecurity consultant based in Kenya, with a passion for 
              building innovative, scalable solutions that solve real-world problems. My journey in tech 
              has been driven by curiosity and a desire to create impactful applications that make a difference.
            </p>
            
            <p>
              With extensive experience across multiple industries including Agriculture, FinTech, HR Management, 
              and Church Administration, I've developed a deep understanding of diverse business needs and 
              how technology can address them effectively.
            </p>
          </div>

          <!-- Key Attributes -->
          <div class="grid grid-cols-2 gap-6">
            <div v-for="attribute in attributes" :key="attribute.title" class="text-center p-6 card">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon :name="attribute.icon" class="w-8 h-8 text-white" />
              </div>
              <h3 class="font-semibold mb-2">{{ attribute.title }}</h3>
              <p class="text-caption">{{ attribute.description }}</p>
            </div>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div class="space-y-8">
          <!-- Experience Card -->
          <div class="card p-8">
            <h3 class="heading-md mb-6 text-center">Experience Overview</h3>
            <div class="space-y-6">
              <div v-for="stat in experienceStats" :key="stat.label" class="flex items-center justify-between">
                <span class="font-medium">{{ stat.label }}</span>
                <div class="flex items-center space-x-2">
                  <div class="w-32 bg-gray-200 dark:bg-dark-300 rounded-full h-2">
                    <div 
                      class="h-2 bg-gradient-primary rounded-full transition-all duration-1000"
                      :style="{ width: stat.percentage + '%' }"
                    ></div>
                  </div>
                  <span class="text-sm font-semibold text-primary-500">{{ stat.value }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Location & Availability -->
          <div class="card p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <Icon name="i-heroicons-map-pin" class="w-5 h-5 text-primary-500" />
                <span>Kenya 🇰🇪</span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="i-heroicons-globe" class="w-5 h-5 text-accent-500" />
                <span>Remote Available</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-dark-300">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600 dark:text-dark-600">Response Time</span>
                <span class="text-sm font-semibold">Within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies I Love -->
      <div class="mt-16">
        <h3 class="heading-md text-center mb-8">Technologies I Work With</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="tech in favoriteTech" 
            :key="tech.name"
            class="card p-4 text-center hover:shadow-glow transition-all duration-300 group"
          >
            <Icon :name="tech.icon" class="w-8 h-8 mx-auto mb-2 text-primary-500 group-hover:scale-110 transition-transform" />
            <span class="text-sm font-medium">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Key attributes
const attributes = [
  {
    title: 'Problem Solver',
    icon: 'i-heroicons-light-bulb',
    description: 'Creative solutions to complex challenges'
  },
  {
    title: 'Detail Oriented',
    icon: 'i-heroicons-magnifying-glass',
    description: 'Precision in every line of code'
  },
  {
    title: 'Fast Learner',
    icon: 'i-heroicons-academic-cap',
    description: 'Quickly adapt to new technologies'
  },
  {
    title: 'Team Player',
    icon: 'i-heroicons-users',
    description: 'Collaborative approach to development'
  }
]

// Experience stats
const experienceStats = [
  { label: 'Full-Stack Development', value: 'Expert', percentage: 95 },
  { label: 'Mobile Development', value: 'Advanced', percentage: 85 },
  { label: 'API Development', value: 'Expert', percentage: 90 },
  { label: 'Machine Learning', value: 'Intermediate', percentage: 70 },
  { label: 'Cybersecurity', value: 'Advanced', percentage: 80 }
]

// Favorite technologies
const favoriteTech = [
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Flutter', icon: 'i-simple-icons-flutter' },
  { name: 'Go', icon: 'i-simple-icons-golang' },
  { name: 'Python', icon: 'i-simple-icons-python' },
  { name: 'TailwindCSS', icon: 'i-simple-icons-tailwindcss' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs' }
]
</script>

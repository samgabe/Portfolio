<template>
  <section id="projects" class="section-padding bg-white dark:bg-dark-100">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg gradient-text mb-4">Featured Projects</h2>
        <p class="text-body max-w-2xl mx-auto">
          A selection of my best work showcasing diverse technologies and real-world impact
        </p>
      </div>

      <!-- Project Filter -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg border border-gray-200 dark:border-dark-300 p-1">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            :class="activeFilter === filter 
              ? 'bg-primary-500 text-white' 
              : 'text-gray-600 dark:text-dark-600 hover:text-primary-500'"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.name"
          class="card hover:shadow-glow transition-all duration-300 group cursor-pointer"
          @click="selectedProject = project"
        >
          <!-- Project Header -->
          <div class="relative h-48 overflow-hidden group">
            <img
              v-if="project.image && !imageErrors[project.name]"
              :src="project.image"
              :alt="`${project.name} preview`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              @error="handleImageError"
            />
            <div 
              v-if="!project.image || imageErrors[project.name]"
              class="absolute inset-0 bg-gradient-to-br flex items-center justify-center"
              :class="project.gradient"
            >
              <Icon :name="project.icon" class="w-16 h-16 text-white" />
            </div>
            
            <!-- Overlay with icon when image is loaded successfully -->
            <div 
              v-if="project.image && !imageErrors[project.name]"
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <Icon :name="project.icon" class="w-12 h-12 text-white" />
            </div>
            
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-white/90 dark:bg-dark-100/90 rounded-full text-xs font-medium backdrop-blur-xs">
                {{ project.status }}
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="heading-sm mb-2 group-hover:text-primary-500 transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-caption mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-badge text-xs"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex space-x-4">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 dark:text-dark-600 hover:text-primary-500 transition-colors text-sm"
                @click.stop
              >
                <Icon name="i-simple-icons-github" class="w-4 h-4 inline mr-1" />
                Code
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 dark:text-dark-600 hover:text-primary-500 transition-colors text-sm"
                @click.stop
              >
                <Icon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 inline mr-1" />
                Live Demo
              </a>
            </div>

            <!-- Project Stats -->
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-dark-300 flex justify-between text-xs text-gray-500">
              <span>{{ project.industry }}</span>
              <span>{{ project.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects -->
      <div class="text-center mt-12">
        <a
          href="https://github.com/samgabe?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
        >
          View All Projects on GitHub
          <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal 
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<script setup>
// State
const activeFilter = ref('All')
const selectedProject = ref(null)
const imageErrors = ref({})

// Handle image loading errors
const handleImageError = (event) => {
  const projectName = event.target.alt.replace(' preview', '')
  imageErrors.value[projectName] = true
  console.warn(`Failed to load image for ${projectName}`)
}

// Filters
const filters = ['All', 'Web', 'Mobile', 'Backend', 'ML/AI']

// Projects data
const projects = [
  {
    name: 'Farm Pro Suite',
    description: 'Complete agricultural management system with ML integration for crop predictions and farm optimization.',
    technologies: ['Flutter', 'Vue 3', 'Go', 'FastAPI', 'TailwindCSS'],
    category: 'All',
    status: 'Production',
    industry: 'Agriculture Tech',
    duration: '3 months',
    gradient: 'from-green-400 to-green-600',
    icon: 'i-heroicons-leaf',
    github: 'https://github.com/samgabe/Farm-Pro-Mobile',
    live: 'https://farmpro-pi.vercel.app/',
    image: '/images/projects/FarmPro.png',
    features: [
      'Real-time crop monitoring',
      'ML-powered yield predictions',
      'Mobile-first design',
      'Offline functionality'
    ],
    impact: 'Increased farm productivity by 40% for early adopters'
  },
  {
    name: 'Churchrly Platform',
    description: 'Church administration and community management system with mobile app and web dashboard.',
    technologies: ['Kotlin', 'Vue 3', 'Go', 'Jetpack Compose'],
    category: 'Mobile',
    status: 'Production',
    industry: 'Community Management',
    duration: '2 months',
    gradient: 'from-blue-400 to-blue-600',
    icon: 'i-heroicons-building-church',
    github: 'https://github.com/samgabe/Churchrly-Mobile-App',
    live: 'https://churchrly.vercel.app/',
    image: '/images/projects/Churchrly.png',
    features: [
      'Member management',
      'Event scheduling',
      'Donation tracking',
      'Mobile-first approach'
    ],
    impact: 'Serving 10+ churches across Kenya'
  },
  {
    name: 'Machine Learning Service',
    description: 'ML service providing crop predictions and farming recommendations using advanced algorithms.',
    technologies: ['FastAPI', 'Python', 'TensorFlow', 'Docker'],
    category: 'ML/AI',
    status: 'Production',
    industry: 'Agriculture Tech',
    duration: '1 month',
    gradient: 'from-red-400 to-red-600',
    icon: 'i-heroicons-cpu-chip',
    github: 'https://github.com/samgabe/Machine-Learning-Service-for-Farm-Pro',
    live: '#',
    image: '/images/projects/ML-Service.png',
    features: [
      'Real-time predictions',
      'Model training pipeline',
      'RESTful API',
      'Docker deployment'
    ],
    impact: '95% accuracy in crop disease detection'
  },
  {
    name: 'Staffpoint System',
    description: 'Modern HR and staff management solution with intuitive interface and robust backend.',
    technologies: ['Vue 3', 'Go', 'TailwindCSS', 'PostgreSQL'],
    category: 'Web',
    status: 'Production',
    industry: 'HR Management',
    duration: '2.5 months',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: 'i-heroicons-users',
    github: 'https://github.com/samgabe/Staffpoint-Frontend',
    live: 'https://staffpoint.vercel.app/',
    image: '/images/projects/Staffpoint.png',
    features: [
      'Employee management',
      'Payroll system',
      'Performance tracking',
      'Real-time analytics'
    ],
    impact: 'Streamlined HR processes for 5+ companies'
  },
  {
    name: 'Credit Score System',
    description: 'ML-powered financial scoring system with advanced analytics and accurate credit assessments.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Redis'],
    category: 'Backend',
    status: 'Production',
    industry: 'FinTech',
    duration: '1.5 months',
    gradient: 'from-yellow-400 to-yellow-600',
    icon: 'i-heroicons-chart-bar',
    github: 'https://github.com/samgabe/Credit-Score-System',
    live: '#',
    image: '/images/projects/Credit-Score.png',
    features: [
      'Credit scoring algorithm',
      'Risk assessment',
      'Analytics dashboard',
      'API integration'
    ],
    impact: 'Processing 1000+ loan applications monthly'
  },
  {
    name: 'Luna Interiors',
    description: 'Interior design management platform with role-based access control and modern UI/UX.',
    technologies: ['Vue 3', 'Go', 'TailwindCSS', 'RBAC'],
    category: 'Web',
    status: 'Production',
    industry: 'Interior Design',
    duration: '2 months',
    gradient: 'from-purple-400 to-purple-600',
    icon: 'i-heroicons-home',
    github: 'https://github.com/samgabe/LunaInterior-Frontend',
    live: 'https://lunainteriors.vercel.app/',
    image: '/images/projects/LunaInteriors.png',
    features: [
      'Design portfolio',
      'Client management',
      'Role-based access',
      'E-commerce integration'
    ],
    impact: 'Helped 20+ designers grow their business'
  }
]

// Filtered projects
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value || 
    (activeFilter.value === 'Web' && project.technologies.includes('Vue 3')) ||
    (activeFilter.value === 'Mobile' && (project.technologies.includes('Flutter') || project.technologies.includes('Kotlin'))) ||
    (activeFilter.value === 'Backend' && (project.technologies.includes('Go') || project.technologies.includes('FastAPI'))) ||
    (activeFilter.value === 'ML/AI' && project.technologies.includes('TensorFlow'))
  )
})
</script>

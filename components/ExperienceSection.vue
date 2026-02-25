<template>
  <section id="experience" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg gradient-text mb-4">Industry Experience</h2>
        <p class="text-body max-w-2xl mx-auto">
          Successfully delivered solutions across multiple sectors with real-world impact
        </p>
      </div>

      <!-- Industries Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="industry in industries" 
          :key="industry.name"
          class="card p-6 text-center hover:shadow-glow transition-all duration-300 group"
        >
          <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon :name="industry.icon" class="w-8 h-8 text-white" />
          </div>
          <h3 class="font-bold mb-2">{{ industry.name }}</h3>
          <p class="text-caption mb-4">{{ industry.description }}</p>
          <div class="flex flex-wrap gap-2 justify-center">
            <span v-for="tech in industry.technologies" :key="tech" class="tech-badge text-xs">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Client Success Stories -->
      <div class="mb-16">
        <h3 class="heading-md text-center mb-8">Client Success Stories</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="story in successStories" 
            :key="story.client"
            class="card p-6 hover:shadow-glow transition-all duration-300"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon :name="story.icon" class="w-6 h-6 text-white" />
              </div>
              <div class="flex-grow">
                <h4 class="font-semibold mb-2">{{ story.client }}</h4>
                <p class="text-caption mb-3">{{ story.challenge }}</p>
                <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <p class="text-sm text-green-700 dark:text-green-300">
                    <strong>Solution:</strong> {{ story.solution }}
                  </p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-1">
                    <strong>Result:</strong> {{ story.result }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Development Approach -->
      <div class="mb-16">
        <h3 class="heading-md text-center mb-8">Development Approach</h3>
        <div class="grid md:grid-cols-4 gap-6">
          <div 
            v-for="step in developmentSteps" 
            :key="step.title"
            class="text-center"
          >
            <div class="relative mb-4">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span class="text-white font-bold text-xl">{{ step.number }}</span>
              </div>
              <div v-if="step.number < 4" class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 -translate-x-8"></div>
            </div>
            <h4 class="font-semibold mb-2">{{ step.title }}</h4>
            <p class="text-caption">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Professional Services -->
      <div>
        <h3 class="heading-md text-center mb-8">Professional Services</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="service in services" 
            :key="service.name"
            class="card p-6 hover:shadow-glow transition-all duration-300"
          >
            <div class="flex items-center space-x-3 mb-4">
              <Icon :name="service.icon" class="w-6 h-6 text-primary-500" />
              <h4 class="font-semibold">{{ service.name }}</h4>
            </div>
            <p class="text-caption mb-4">{{ service.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in service.tags" :key="tag" class="tech-badge text-xs">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Industries
const industries = [
  {
    name: 'Agriculture Tech',
    icon: 'i-heroicons-leaf',
    description: 'Farm management systems with ML-powered crop predictions and optimization',
    technologies: ['Flutter', 'FastAPI', 'TensorFlow', 'Go']
  },
  {
    name: 'Church Management',
    icon: 'i-heroicons-building-church',
    description: 'Community administration platforms with mobile and web solutions',
    technologies: ['Kotlin', 'Vue 3', 'Go', 'TailwindCSS']
  },
  {
    name: 'Interior Design',
    icon: 'i-heroicons-home',
    description: 'Design management platforms with e-commerce capabilities',
    technologies: ['Vue 3', 'Go', 'RBAC', 'PostgreSQL']
  },
  {
    name: 'HR Management',
    icon: 'i-heroicons-users',
    description: 'Staff management systems with real-time data processing',
    technologies: ['Vue 3', 'Go', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Financial Tech',
    icon: 'i-heroicons-chart-bar',
    description: 'Credit scoring systems with advanced ML algorithms',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Cybersecurity',
    icon: 'i-heroicons-shield-check',
    description: 'Security consulting and implementation for robust applications',
    technologies: ['Go', 'Python', 'Docker', 'Security Audits']
  }
]

// Success stories
const successStories = [
  {
    client: 'FarmTech Solutions Ltd',
    icon: 'i-heroicons-leaf',
    challenge: 'Manual farm management leading to low productivity and resource waste.',
    solution: 'Developed comprehensive farm management system with ML predictions and mobile app.',
    result: '40% increase in crop yield, 30% reduction in resource usage.'
  },
  {
    client: 'Unity Church Network',
    icon: 'i-heroicons-building-church',
    challenge: 'Difficulty managing 10+ church locations with disconnected systems.',
    solution: 'Created unified church management platform with mobile apps for members.',
    result: 'Centralized management, 60% improvement in member engagement.'
  },
  {
    client: 'Luna Interior Designs',
    icon: 'i-heroicons-home',
    challenge: 'Manual client management and portfolio tracking across multiple designers.',
    solution: 'Built design management platform with role-based access and e-commerce.',
    result: 'Streamlined operations, 50% increase in client acquisition.'
  },
  {
    client: 'StaffPoint HR Agency',
    icon: 'i-heroicons-users',
    challenge: 'Paper-based employee management and payroll processing.',
    solution: 'Implemented digital HR system with automated payroll and analytics.',
    result: '80% reduction in processing time, real-time insights.'
  }
]

// Development steps
const developmentSteps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Understanding requirements and business objectives'
  },
  {
    number: 2,
    title: 'Design',
    description: 'Creating architecture and user experience designs'
  },
  {
    number: 3,
    title: 'Development',
    description: 'Building clean, scalable, and maintainable code'
  },
  {
    number: 4,
    title: 'Deployment',
    description: 'Launching and maintaining production applications'
  }
]

// Professional services
const services = [
  {
    name: 'Full-Stack Development',
    icon: 'i-heroicons-code-bracket',
    description: 'End-to-end application development from frontend to backend',
    tags: ['Vue.js', 'Flutter', 'Go', 'API Design']
  },
  {
    name: 'Mobile App Development',
    icon: 'i-heroicons-device-phone-mobile',
    description: 'Native and cross-platform mobile applications',
    tags: ['Flutter', 'Kotlin', 'React Native', 'PWA']
  },
  {
    name: 'API Development',
    icon: 'i-heroicons-server',
    description: 'RESTful APIs and microservices architecture',
    tags: ['Go', 'FastAPI', 'GraphQL', 'Docker']
  },
  {
    name: 'Machine Learning Integration',
    icon: 'i-heroicons-cpu-chip',
    description: 'ML model integration and deployment',
    tags: ['TensorFlow', 'FastAPI', 'Python', 'MLOps']
  },
  {
    name: 'Cybersecurity Consulting',
    icon: 'i-heroicons-shield-check',
    description: 'Security audits and implementation',
    tags: ['Security Audits', 'Penetration Testing', 'Compliance']
  },
  {
    name: 'Technical Consulting',
    icon: 'i-heroicons-light-bulb',
    description: 'Architecture design and technology strategy',
    tags: ['System Design', 'Tech Stack', 'Best Practices']
  }
]
</script>

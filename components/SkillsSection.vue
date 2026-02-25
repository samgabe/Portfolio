<template>
  <section id="skills" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg gradient-text mb-4">Technical Skills</h2>
        <p class="text-body max-w-2xl mx-auto">
          Comprehensive expertise across modern development technologies and frameworks
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="category in skillCategories" 
          :key="category.name"
          class="text-center group"
        >
          <div class="card p-6 hover:shadow-glow transition-all duration-300">
            <div class="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon :name="category.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="font-bold mb-4">{{ category.name }}</h3>
            <ul class="space-y-2">
              <li v-for="skill in category.skills" :key="skill" class="text-sm text-gray-600 dark:text-dark-600">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Advanced Skills Showcase -->
      <div class="mb-16">
        <h3 class="heading-md text-center mb-8">Advanced Expertise</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="skill in advancedSkills" 
            :key="skill.name"
            class="card p-6 hover:shadow-glow transition-all duration-300"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon :name="skill.icon" class="w-6 h-6 text-white" />
              </div>
              <div class="flex-grow">
                <h4 class="font-semibold mb-2">{{ skill.name }}</h4>
                <p class="text-caption mb-3">{{ skill.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in skill.tags" :key="tag" class="tech-badge text-xs">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Platforms -->
      <div>
        <h3 class="heading-md text-center mb-8">Tools & Platforms</h3>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div 
            v-for="tool in tools" 
            :key="tool.name"
            class="card p-4 text-center hover:shadow-glow transition-all duration-300 group"
          >
            <Icon :name="tool.icon" class="w-8 h-8 mx-auto mb-2 text-primary-500 group-hover:scale-110 transition-transform" />
            <span class="text-sm font-medium">{{ tool.name }}</span>
          </div>
        </div>
      </div>

      <!-- Learning Path -->
      <div class="mt-16 text-center">
        <div class="card p-8 max-w-4xl mx-auto">
          <h3 class="heading-md mb-4">Currently Learning</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <span v-for="learning in currentlyLearning" :key="learning" class="tech-badge">
              {{ learning }}
            </span>
          </div>
          <p class="text-caption mt-6">
            Always expanding my knowledge to stay current with emerging technologies
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Skill categories
const skillCategories = [
  {
    name: 'Frontend',
    icon: 'i-heroicons-device-phone-mobile',
    skills: ['Vue.js 3', 'Flutter', 'Kotlin', 'TailwindCSS', 'Responsive Design', 'PWA']
  },
  {
    name: 'Backend',
    icon: 'i-heroicons-server',
    skills: ['Go (Golang)', 'Python/FastAPI', 'Node.js', 'REST APIs', 'Microservices', 'GraphQL']
  },
  {
    name: 'Mobile',
    icon: 'i-heroicons-device-phone-mobile',
    skills: ['Flutter', 'Kotlin', 'React Native', 'Progressive Web Apps', 'Cross-Platform']
  },
  {
    name: 'ML/AI',
    icon: 'i-heroicons-cpu-chip',
    skills: ['FastAPI', 'TensorFlow', 'Data Processing', 'Model Integration', 'NLP']
  }
]

// Advanced skills
const advancedSkills = [
  {
    name: 'Full-Stack Architecture',
    icon: 'i-heroicons-building-office',
    description: 'Designing scalable, maintainable full-stack applications with modern architectures',
    tags: ['Microservices', 'Serverless', 'API Design', 'Database Design']
  },
  {
    name: 'Performance Optimization',
    icon: 'i-heroicons-rocket-launch',
    description: 'Optimizing applications for maximum performance and user experience',
    tags: ['Code Splitting', 'Caching', 'Lazy Loading', 'CDN']
  },
  {
    name: 'Security Implementation',
    icon: 'i-heroicons-shield-check',
    description: 'Implementing robust security measures and best practices',
    tags: ['Authentication', 'Authorization', 'Encryption', 'Security Audits']
  },
  {
    name: 'DevOps & CI/CD',
    icon: 'i-heroicons-cog',
    description: 'Setting up automated deployment pipelines and infrastructure',
    tags: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify']
  },
  {
    name: 'Machine Learning Integration',
    icon: 'i-heroicons-sparkles',
    description: 'Integrating ML models into production applications',
    tags: ['TensorFlow', 'FastAPI', 'Model Deployment', 'Data Pipelines']
  },
  {
    name: 'Database Design',
    icon: 'i-heroicons-circle-stack',
    description: 'Designing efficient database schemas and optimization strategies',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization']
  }
]

// Tools and platforms
const tools = [
  { name: 'Git', icon: 'i-simple-icons-git' },
  { name: 'Docker', icon: 'i-simple-icons-docker' },
  { name: 'VS Code', icon: 'i-simple-icons-visualstudiocode' },
  { name: 'GitHub', icon: 'i-simple-icons-github' },
  { name: 'Vercel', icon: 'i-simple-icons-vercel' },
  { name: 'Netlify', icon: 'i-simple-icons-netlify' },
  { name: 'Postman', icon: 'i-simple-icons-postman' },
  { name: 'Figma', icon: 'i-simple-icons-figma' },
  { name: 'Linux', icon: 'i-simple-icons-linux' },
  { name: 'AWS', icon: 'i-simple-icons-amazonaws' },
  { name: 'MongoDB', icon: 'i-simple-icons-mongodb' },
  { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' }
]

// Currently learning
const currentlyLearning = [
  'Advanced TypeScript',
  'Kubernetes',
  'WebAssembly',
  'Blockchain Development',
  'Advanced ML Techniques'
]
</script>

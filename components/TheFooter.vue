<template>
  <footer class="bg-gray-900 text-white section-padding">
    <div class="container-custom">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Icon name="i-heroicons-code-bracket" class="w-6 h-6 text-white" />
            </div>
            <span class="font-bold text-xl">Sam Dev Builds</span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            Building tomorrow's solutions, today! Exceptional full-stack development with modern technologies and innovative approaches.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.url"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-semibold mb-4">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service" class="text-gray-300">
              {{ service }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Sam Dev Builds. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Current year
const currentYear = new Date().getFullYear()

// Social links
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'i-simple-icons-github',
    url: 'https://github.com/samgabe'
  },
  {
    name: 'Portfolio',
    icon: 'i-heroicons-globe-alt',
    url: 'https://samkkamauportfolio.netlify.app'
  },
  {
    name: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    url: '#'
  },
  {
    name: 'Twitter',
    icon: 'i-simple-icons-x',
    url: '#'
  }
]

// Quick links
const quickLinks = [
  { name: 'About', url: '#about' },
  { name: 'Skills', url: '#skills' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' }
]

// Services
const services = [
  'Full-Stack Development',
  'Mobile App Development',
  'API Development',
  'Machine Learning Integration',
  'Cybersecurity Consulting'
]
</script>

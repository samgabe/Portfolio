<template>
  <section id="contact" class="section-padding bg-white dark:bg-dark-100">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg gradient-text mb-4">Get In Touch</h2>
        <p class="text-body max-w-2xl mx-auto">
          Available for freelance projects, consulting, and collaboration opportunities
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="heading-md mb-6">Let's Work Together</h3>
            <p class="text-body mb-6">
              Whether you need a full-stack application, mobile development, or cybersecurity consulting, 
              I'm here to help bring your vision to life with exceptional quality and innovative solutions.
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-4">
            <div 
              v-for="contact in contactInfo" 
              :key="contact.label"
              class="flex items-center space-x-4 p-4 card"
            >
              <div class="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon :name="contact.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold">{{ contact.label }}</h4>
                <p class="text-caption">{{ contact.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-semibold mb-4">Connect With Me</h4>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                :title="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-gray-100 dark:bg-dark-200 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors group"
              >
                <Icon :name="social.icon" class="w-6 h-6 text-gray-600 dark:text-dark-600 group-hover:text-primary-500" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card p-8">
          <h3 class="heading-md mb-6">Send Me a Message</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-200 transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-200 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium mb-2">Subject *</label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-200 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="full-stack">Full-Stack Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="api">API Development</option>
                <option value="ml">Machine Learning Integration</option>
                <option value="security">Cybersecurity Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-200 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary flex items-center justify-center"
            >
              <Icon v-if="isSubmitting" name="i-heroicons-arrow-path" class="w-5 h-5 mr-2 animate-spin" />
              <Icon v-else name="i-heroicons-paper-airplane" class="w-5 h-5 mr-2" />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div class="flex items-center space-x-2">
              <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500" />
              <p class="text-green-700 dark:text-green-300">Message sent successfully! I'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Overview -->
      <div class="mt-16">
        <h3 class="heading-md text-center mb-8">What I Can Help With</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="service in services" 
            :key="service"
            class="text-center p-6 card hover:shadow-glow transition-all duration-300"
          >
            <div class="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="i-heroicons-check" class="w-6 h-6 text-white" />
            </div>
            <p class="font-medium">{{ service }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Contact information
const contactInfo = [
  {
    label: 'Email',
    value: 'Available upon request',
    icon: 'i-heroicons-envelope'
  },
  {
    label: 'Location',
    value: 'Kenya (Remote work available globally)',
    icon: 'i-heroicons-map-pin'
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    icon: 'i-heroicons-clock'
  }
]

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

// Services
const services = [
  'Full-stack application development',
  'Mobile app development',
  'API and backend services',
  'Machine learning integration',
  'Cybersecurity consulting',
  'Technical architecture design'
]

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: 4s;"></div>
    </div>

    <div class="container-custom">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4 animate-slide-in-left">
            <div class="flex items-center space-x-2">
              <span class="tech-badge">Available for Hire</span>
              <span class="flex items-center text-green-500">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Open to opportunities
              </span>
            </div>
            
            <h1 class="heading-xl">
              Hi, I'm <span class="gradient-text">Sam Dev Builds</span>
            </h1>
            
            <h2 class="heading-lg text-gray-600 dark:text-dark-600">
              Full-Stack Developer & Cybersecurity Consultant
            </h2>
          </div>

          <div class="space-y-6 animate-slide-in-left" style="animation-delay: 0.2s;">
            <p class="text-body max-w-2xl">
              A tech enthusiast passionate about building innovative, scalable solutions that solve real-world problems. 
              Based in Kenya, I specialize in modern web technologies and have extensive experience delivering 
              production-ready applications for clients across various industries.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink to="#contact" class="btn-primary">
                <Icon name="i-heroicons-paper-airplane" class="w-5 h-5 mr-2" />
                Get In Touch
              </NuxtLink>
              <NuxtLink to="#projects" class="btn-secondary">
                <Icon name="i-heroicons-briefcase" class="w-5 h-5 mr-2" />
                View Projects
              </NuxtLink>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-6 animate-slide-in-left" style="animation-delay: 0.4s;">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-dark-600 hover:text-primary-500 transition-colors duration-200"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative animate-slide-in-right">
          <div class="relative">
            <!-- Main Card -->
            <div class="card p-8 text-center space-y-6">
              <div class="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                <Icon name="i-heroicons-code-bracket" class="w-16 h-16 text-white" />
              </div>
              
              <div class="space-y-2">
                <h3 class="heading-md gradient-text">Building Tomorrow's Solutions</h3>
                <p class="text-caption">Today!</p>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-dark-300">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-500">38+</div>
                  <div class="text-caption">Projects</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-accent-500">5+</div>
                  <div class="text-caption">Industries</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-500">15+</div>
                  <div class="text-caption">Clients</div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-bounce-slow"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-bounce-slow" style="animation-delay: 1s;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <Icon name="i-heroicons-chevron-down" class="w-6 h-6 text-gray-400" />
    </div>
  </section>
</template>

<script setup>
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
  }
]
</script>

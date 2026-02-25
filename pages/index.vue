<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Experience Section -->
    <ExperienceSection />
    
    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup>
// Page meta
definePageMeta({
  title: 'Home',
  description: 'Full-stack developer specializing in Vue.js, Flutter, Go, and modern web technologies'
})

// SEO
useSeoMeta({
  title: 'Sam Dev Builds - Full-Stack Developer & Cybersecurity Consultant',
  description: 'Exceptional full-stack developer specializing in Vue.js, Flutter, Go, and modern web technologies. Building innovative solutions for clients across Agriculture, FinTech, HR, and more.',
  ogTitle: 'Sam Dev Builds - Full-Stack Developer',
  ogDescription: 'Building innovative solutions with modern technologies',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sam Dev Builds - Full-Stack Developer',
  twitterDescription: 'Building innovative solutions with modern technologies'
})
</script>

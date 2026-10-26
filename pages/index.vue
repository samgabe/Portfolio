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
  title: 'Sam Dev Builds - Full-Stack Developer & Product Builder',
  description: 'Full-stack developer and cybersecurity consultant building scalable web, mobile, and business systems for agriculture, fintech, community, and digital transformation projects.',
  ogTitle: 'Sam Dev Builds - Full-Stack Developer & Product Builder',
  ogDescription: 'I build digital products that help businesses solve real problems with practical technology.',
  ogImage: '/og-image.svg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sam Dev Builds - Full-Stack Developer & Product Builder',
  twitterDescription: 'I build digital products that help businesses solve real problems with practical technology.'
})
</script>

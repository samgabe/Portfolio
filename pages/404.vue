<template>
  <section class="section-padding min-h-[70vh] flex items-center justify-center">
    <div class="container-custom">
      <div class="max-w-2xl mx-auto text-center card p-10 md:p-14">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 shadow-glow">
          <Icon name="i-heroicons-exclamation-triangle" class="w-9 h-9 text-white" />
        </div>

        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">
          404 Error
        </p>

        <h1 class="heading-lg md:text-5xl mb-4">
          This page could not be found
        </h1>

        <p class="text-body mb-8">
          The link may be outdated, or the page may have moved. Let’s get you back to the important work.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/" class="btn-primary">
            <Icon name="i-heroicons-home" class="w-5 h-5 mr-2" />
            Back to home
          </NuxtLink>

          <NuxtLink to="#contact" class="btn-secondary">
            <Icon name="i-heroicons-envelope" class="w-5 h-5 mr-2" />
            Contact me
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.'
})
</script>

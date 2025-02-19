<template>
  <div>
    <NavbarSection />
    <AboutSection />
    <FooterSection />
  </div>
</template>

<script>
  import NavbarSection from '@/components/NavbarSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import FooterSection from '@/components/FooterSection.vue';

  export default {
    name: 'AboutView',
    components: {
      NavbarSection,
      AboutSection,
      FooterSection,
    },
  };
</script>

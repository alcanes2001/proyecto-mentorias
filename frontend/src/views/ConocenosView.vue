<template>
  <div>
    <NavbarSection />
    <ConocenosSection />
    <FooterSection />
  </div>
</template>

<script>
  import NavbarSection from '@/components/NavbarSection.vue';
  import ConocenosSection from '@/components/ConocenosSection.vue';
  import FooterSection from '@/components/FooterSection.vue';

  export default {
    name: 'ConocenosView',
    components: {
      NavbarSection,
      ConocenosSection,
      FooterSection,
    },
  };
</script>

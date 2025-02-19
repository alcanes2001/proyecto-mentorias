<template>
  <div>
    <NavbarSection />
    <ContactosSection />
    <FooterSection />
  </div>
</template>

<script>
  import NavbarSection from '@/components/NavbarSection.vue';
  import ContactosSection from '@/components/ContactosSection.vue';
  import FooterSection from '@/components/FooterSection.vue';

  export default {
    name: 'ConocenosView',
    components: {
      NavbarSection,
      ContactosSection,
      FooterSection,
    },
  };
</script>

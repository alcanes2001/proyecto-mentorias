<template>
  <div>
    <NavbarSection />
    <MentoriasCardsSection />
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue';
import MentoriasCardsSection from '@/components/MentoriasCardsSection.vue';
import FooterSection from '@/components/FooterSection.vue';



export default {
  name: 'MentoriasView',
  components: {
    NavbarSection,
    MentoriasCardsSection,
    FooterSection,
  },
};
</script>

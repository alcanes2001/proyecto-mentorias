<template>
  <div>
    <HeaderSection />
    <MentoriasSection />
    <AboutSection />
    <ConocenosSection />
    <TeamSection />
    <ContactosSection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import MentoriasSection from '@/components/MentoriasSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ConocenosSection from '@/components/ConocenosSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import ContactosSection from '@/components/ContactosSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    FooterSection,
    MentoriasSection,
    AboutSection,
    ConocenosSection,
    TeamSection,
    ContactosSection,
  },
};
</script>

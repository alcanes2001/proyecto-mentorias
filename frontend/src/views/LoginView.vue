<template>
  <div>
    <NavbarSection />
    <LoginSection />
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue';
import LoginSection from '@/components/LoginSection.vue';
import FooterSection from '@/components/FooterSection.vue';



export default {
  name: 'LoginView',
  components: {
    NavbarSection,
    LoginSection,
    FooterSection,

  },
};
</script>

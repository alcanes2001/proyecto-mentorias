<template>
    <div>
      <NavbarSection />
      <TeamSection />
      <FooterSection />
    </div>
</template>
  
<script>
  import NavbarSection from '@/components/NavbarSection.vue';
  import TeamSection from '@/components/TeamSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  
  export default {
  name: 'TeamView',
    components: {
        NavbarSection,
        TeamSection,
        FooterSection,
      },
    };
</script>
  
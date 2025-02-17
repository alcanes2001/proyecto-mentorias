<template>
  <div class="hero_area">
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/images/iconMentorNest-Photoroom.png" alt="" width="210">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/mentorias">Mentorias</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Acerca de</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/conocenos">Conocenos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/team">Equipo</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contactos">Contactanos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <i class="fa fa-user" aria-hidden="true"></i> Login
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  </div>
</template>

<script>
export default {
  name: 'NavbarSection',
};
</script>

<style scoped>

</style>

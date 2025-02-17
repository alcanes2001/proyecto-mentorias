<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="../assets/images/hero-bg.png" alt="" />
      </div>
    </div>
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

  <section class="slider_section">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Mentornest <br />
                    </h1>
                    <p>
                      Accede a gran cantidad de mentorías y recursos formativos para impulsar
                      tus habilidades personales, técnicas y académicas.
                    </p>
                    <div class="btn-box">
                      <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="img-box">
                    <img src="../assets/images/imagenMentorias3.webp" alt="" width="40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Beneficios
                    </h1>
                    <p>
                      Accede a conocimientos y experiencias reales, mejora tus habilidades
                      y alcanza tus objetivos con la guia de expertos.
                    </p>
                    <div class="btn-box">
                      <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="img-box">
                    <img src="../assets/images/imagenMentorias2.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Recursos <br />
                      Centralizados
                    </h1>
                    <p>
                      Materiales y herramientas en un solo lugar.
                    </p>
                    <p>
                      Explora cursos, guías, videos y más, todo organizado para facilitar
                      tu aprendizaje.
                    </p>
                    <div class="btn-box">
                      <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="img-box">
                    <img src="../assets/images/imagenMentorias1.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Comunidad
                    </h1>
                    <p>
                      Únete a una comunidad de aprendizaje.
                    </p>
                    <p>
                      Conectate con personas que comparten tus intereses y crece profesionalmente
                      con material de mentorías.
                    </p>
                    <div class="btn-box">
                      <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="../assets/images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
          <li data-target="#customCarousel1" data-slide-to="3"></li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
};
</script>

<style scoped>
/* Estilos personalizados para el navbar */
</style>

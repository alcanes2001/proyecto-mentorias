<template>
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Nuestras distintas <span>mentorías</span></h2>
          <p>
            Ofrecemos mentorías especializadas en habilidades personales, técnicas y académicas para ayudarte a alcanzar tus metas.
          </p>
        </div>
        <div class="row">
          <!-- Mentoría de Habilidades Personales -->
          <div class="col-md-4">
            <div class="box">
              <div class="img-box">
                <img src="../assets/images/s1.png" alt="Habilidades Personales" />
              </div>
              <div class="detail-box">
                <h5>Habilidades Personales</h5>
                <p>
                  Desarrolla habilidades como comunicación efectiva, liderazgo, gestión del tiempo y trabajo en equipo. Ideal para crecer tanto personal como profesionalmente.
                </p>
                <button class="btn btn-primary btn-lg mt-3">
                  <router-link class="nav-link" to="/mentorias">Saber Más</router-link>
                </button>
              </div>
            </div>
          </div>

          <!-- Mentoría de Habilidades Técnicas -->
          <div class="col-md-4">
            <div class="box">
              <div class="img-box">
                <img src="../assets/images/s2.png" alt="Habilidades Técnicas" />
              </div>
              <div class="detail-box">
                <h5>Habilidades Técnicas</h5>
                <p>
                  Aprende habilidades técnicas como programación, análisis de datos, diseño gráfico y más. Perfecto para impulsar tu carrera en el mundo tecnológico.
                </p>
                <button class="btn btn-primary btn-lg mt-3">
                  <router-link class="nav-link" to="/mentorias">Saber Más</router-link>
                </button>
              </div>
            </div>
          </div>

          <!-- Mentoría de Habilidades Académicas -->
          <div class="col-md-4">
            <div class="box">
              <div class="img-box">
                <img src="../assets/images/s3.png" alt="Habilidades Académicas" />
              </div>
              <div class="detail-box">
                <h5>Habilidades Académicas</h5>
                <p>
                  Mejora tus habilidades académicas con mentorías en redacción de ensayos, métodos de estudio, preparación para exámenes y más. Ideal para estudiantes.
                </p>
                <button class="btn btn-primary btn-lg mt-3">
                  <router-link class="nav-link" to="/mentorias">Saber Más</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MentoriasSection',
  data() {
    return {
      mentorias: [
        { id: 1, nombre: 'Mentoría 1', descripcion: 'Descripción de la mentoría 1' },
        { id: 2, nombre: 'Mentoría 2', descripcion: 'Descripción de la mentoría 2' },
        // Agrega más mentorías aquí
      ]
    };
  }
};
</script>

<style scoped>
.mentorias-section {
  padding: 20px;
}

.mentorias-section h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.mentorias-section ul {
  list-style-type: none;
  padding: 0;
}

.mentorias-section li {
  margin-bottom: 5px;
}

.mentorias-section a {
  color: white;
}

</style>

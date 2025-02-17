<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-dark mb-3">Programas de Mentoría</h1>
        <p class="lead text-muted">
          Desarrolla tus habilidades con programas personalizados y mentores expertos
        </p>
      </div>

      <!-- Search and Filter -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Buscar mentorías..."
              v-model="searchTerm"
            />
          </div>
        </div>
        <div class="col-md-6 col-lg-2">
          <button class="btn btn-outline-success w-100">
            <i class="bi bi-filter"></i> Filtrar
          </button>
        </div>
      </div>

      <!-- Tabs for Categories -->
      <ul class="nav nav-tabs justify-content-center mb-4" id="mentoriasTab" role="tablist">
        <li class="nav-item" v-for="(category, key) in categories" :key="key">
          <a
            class="nav-link"
            :class="{ active: activeTab === key }"
            @click="activeTab = key"
          >
            <i :class="category.icon"></i> {{ category.title }}
          </a>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content">
        <div
          v-for="(category, key) in categories"
          :key="key"
          class="tab-pane fade"
          :class="{ 'show active': activeTab === key }"
        >
          <div class="text-center mb-5">
            <h2 class="h3 fw-bold">{{ category.title }}</h2>
            <p class="text-muted">{{ category.description }}</p>
          </div>

          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="(mentoria, index) in category.mentories" :key="index">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ mentoria.title }}</h5>
                  <p class="card-text text-muted">{{ mentoria.description }}</p>
                  <div class="mb-3">
                    <h6 class="fw-bold">Habilidades clave:</h6>
                    <div class="d-flex flex-wrap gap-2">
                      <span
                        v-for="(skill, idx) in mentoria.skills"
                        :key="idx"
                        class="badge bg-primary"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">Duración: {{ mentoria.duration }}</small>
                    <button class="btn btn-outline-primary btn-sm">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchTerm = ref('');
const activeTab = ref('tecnicas');

const categories = {
  tecnicas: {
    icon: 'bi bi-code-slash',
    title: 'Habilidades Técnicas',
    description: 'Desarrollo de competencias profesionales y específicas del campo',
    mentories: [
      {
        title: 'Desarrollo Web Full-Stack',
        description: 'Aprende las tecnologías más demandadas en desarrollo web',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
        duration: '12 semanas',
      },
      {
        title: 'Ciencia de Datos',
        description: 'Domina el análisis de datos y machine learning',
        skills: ['Python', 'SQL', 'Estadística', 'ML'],
        duration: '16 semanas',
      },
      {
        title: 'DevOps & Cloud',
        description: 'Automatización y gestión de infraestructura cloud',
        skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
        duration: '10 semanas',
      },
    ],
  },
  academicas: {
    icon: 'bi bi-book',
    title: 'Habilidades Académicas',
    description: 'Mejora tu rendimiento académico y métodos de estudio',
    mentories: [
      {
        title: 'Metodología de Estudio',
        description: 'Técnicas efectivas de estudio y organización',
        skills: ['Planificación', 'Toma de notas', 'Memorización', 'Concentración'],
        duration: '8 semanas',
      },
      {
        title: 'Investigación Académica',
        description: 'Aprende a realizar investigaciones de calidad',
        skills: ['Metodología', 'Análisis', 'Redacción', 'Referencias'],
        duration: '12 semanas',
      },
      {
        title: 'Presentaciones Efectivas',
        description: 'Mejora tus habilidades de presentación académica',
        skills: ['Oratoria', 'Diseño visual', 'Storytelling', 'Comunicación'],
        duration: '6 semanas',
      },
    ],
  },
  personales: {
    icon: 'bi bi-lightbulb',
    title: 'Habilidades Personales',
    description: 'Desarrollo personal y habilidades blandas',
    mentories: [
      {
        title: 'Liderazgo y Trabajo en Equipo',
        description: 'Desarrolla habilidades de liderazgo efectivo',
        skills: ['Comunicación', 'Delegación', 'Motivación', 'Resolución de conflictos'],
        duration: '10 semanas',
      },
      {
        title: 'Inteligencia Emocional',
        description: 'Mejora tu autoconocimiento y relaciones interpersonales',
        skills: ['Autoconciencia', 'Empatía', 'Gestión emocional', 'Resiliencia'],
        duration: '8 semanas',
      },
      {
        title: 'Productividad Personal',
        description: 'Optimiza tu tiempo y alcanza tus objetivos',
        skills: ['Gestión del tiempo', 'Priorización', 'Hábitos', 'Planificación'],
        duration: '6 semanas',
      },
    ],
  },
};
</script>

<style scoped>
.nav-tabs .nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.nav-tabs .nav-link.active {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
  cursor: pointer;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

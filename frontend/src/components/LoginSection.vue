<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          {{ isLogin ? 'Iniciar Sesión' : 'Crear Cuenta' }}
        </h2>
        <p class="text-muted">
          {{ isLogin ? 'Ingresa a tu cuenta para continuar' : 'Selecciona el tipo de cuenta que deseas crear' }}
        </p>
      </div>

      <div class="card-body">
        <div class="nav-container">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <button
                class="nav-link"
                :class="{ active: loginType === 'user' }"
                @click="loginType = 'user'"
              >
                <i class="bi bi-person me-2"></i>
                Usuario
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                :class="{ active: loginType === 'mentor' }"
                @click="loginType = 'mentor'"
              >
                <i class="bi bi-briefcase me-2"></i>
                Mentor
              </button>
            </li>
          </ul>
        </div>

        <form @submit.prevent="handleSubmit">
          <div v-if="!isLogin && loginType === 'mentor'" class="alert alert-info">
            <i class="bi bi-info-circle me-2"></i>
            Los mentores pasan por un proceso de verificación antes de ser aprobados.
          </div>

          <template v-if="!isLogin">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Nombre</label>
                <input v-model="form.firstName" type="text" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Apellido</label>
                <input v-model="form.lastName" type="text" class="form-control" required>
              </div>
            </div>

            <template v-if="loginType === 'mentor'">
              <div class="mb-3">
                <label class="form-label">Especialidad</label>
                <input v-model="form.specialty" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Años de experiencia</label>
                <input v-model="form.experience" type="number" class="form-control" required>
              </div>
            </template>
          </template>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-envelope"></i>
              </span>
              <input v-model="form.email" type="email" class="form-control" placeholder="tu@email.com" required>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-lock"></i>
              </span>
              <input v-model="form.password" :type="showPassword ? 'text' : 'password'" class="form-control" required>
              <button class="btn btn-outline-secondary" type="button" @click="showPassword = !showPassword">
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100 mb-4 my-3">
            {{ isLogin ? 'Iniciar Sesión' : 'Crear Cuenta' }}
          </button>

          <div class="text-center">
            <p class="mb-2">
              {{ isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?' }}
              <a href="#" @click.prevent="isLogin = !isLogin" class="text-decoration-none">
                {{ isLogin ? 'Regístrate' : 'Inicia sesión' }}
              </a>
            </p>
            <p v-if="isLogin">
              <a href="#" @click.prevent="handleForgotPassword" class="text-decoration-none">
                ¿Olvidaste tu contraseña?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isLogin = ref(true)
const loginType = ref('user')
const showPassword = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  specialty: '',
  experience: null
})

const handleSubmit = () => {
  console.log('Form submitted:', {
    type: loginType.value,
    isLogin: isLogin.value,
    data: form
  })
}

const handleForgotPassword = () => {
  console.log('Forgot password')
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: var(--bs-light);
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 1rem;
}

.card {
  max-width: 600px;
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.card-header {
  text-align: center;
  border: none;
  background-color: white;
  padding: 2rem 1rem;
}

.card-title {
  font-weight: bold;
  font-size: 2.2rem;
}

.card-body {
  padding: 0.2rem 2rem 2rem 2rem;
}

.nav-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.nav-pills {
  text-align: center;
}

.nav-pills .nav-link.active {
  background-color: var(--bs-success);
  color:aliceblue;
}

.nav-pills .nav-link {
  color: var(--bs-body-color);
}

.nav-pills .nav-link:not(.active):hover {
  background-color: var(--bs-light);
}


</style>

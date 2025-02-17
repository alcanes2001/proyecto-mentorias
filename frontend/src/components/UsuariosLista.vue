<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const usuarios = ref([]);

const obtenerUsuarios = async () => {
  try {
    const response = await axios.get('http://localhost:5174/usuarios');
    usuarios.value = response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
};

onMounted(obtenerUsuarios);
</script>

<template>
  <div>
    <h1>Usuarios</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">{{ usuario.nombre }}</li>
    </ul>
  </div>
</template>

<style scoped>
/* Estilos opcionales */
</style>

<template>
  <label class="file-select">
    <div :class="(!value) ? 'd-flex center btn btn-outline-primary btn-block' : 'btn btn-outline-primary btn-block'">
      <icon feather="file-text"></icon>
      <span v-if="value">Archivo seleccionado: {{value.name}}</span>
      <span v-else> Seleccione el excel que desea subir</span>
    </div>
    <input type="file" @change="handleFileChange"/>
  </label>
</template>

<script>
export default {
  props: {
    value: File
  },

  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0])
    }
  }
}
</script>

<style scoped>
/* .file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
} */

.file-select > input[type="file"] {
  display: none;
}
</style>
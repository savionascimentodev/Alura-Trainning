<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="foto of fotos" :key="foto.id">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "AluraPic",
      fotos: []
    };
  },
  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise
      .then(response => response.json())
      .then(fotos => (this.fotos = fotos));
  }
};
</script>

<style>
img {
  height: 260px;
  width: 220px;
}
</style>

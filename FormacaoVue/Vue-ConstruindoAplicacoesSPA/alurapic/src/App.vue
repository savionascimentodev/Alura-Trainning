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
      fotos: [
        {
          foto1: {
            id: 1,
            url: "http://vortexcultural.com.br/images/2021/05/jujutsu_capa.png",
            titulo: "jujutsu"
          }
        },
        {
          foto2: {
            id: 1,
            url: "https://geeksaw.com.br/wp-content/uploads/2021/02/image2.png",
            titulo: "onePiece"
          }
        }
      ]
    };
  }
};
</script>

<style>
img {
  height: 260px;
  width: 220px;
}
</style>

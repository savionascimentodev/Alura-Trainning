<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <ul class="list-fotos">
      <li class="fotos-item" v-for="foto of fotos" :key="foto.id">
        <Painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </Painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/Painel.vue";

export default {
  components: { Painel },
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
.header {
  font-family: Helvetica;
  width: 96%;
  margin: 0 auto;
}
.title {
  text-align: center;
}
.list-fotos {
  list-style: none;
}
.list-fotos .fotos-item {
  display: inline-block;
}
.imagem-responsiva {
  width: 100%;
}
</style>

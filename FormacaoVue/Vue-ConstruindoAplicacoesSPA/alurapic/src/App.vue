<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <input
      v-model="filtro"
      type="search"
      class="filtro"
      placeholder="Filtrar pelo titulo"
    />
    <ul class="list-fotos">
      <li class="fotos-item" v-for="foto of fotosComFitro" :key="foto.id">
        <Painel :titulo="foto.titulo">
          <ImagemResponsiva :url="foto.url" :titulo="foto.titulo" />
        </Painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/Painel.vue";
import ImagemResponsiva from "./components/ImagemResponsiva.vue";

export default {
  components: { Painel, ImagemResponsiva },
  data() {
    return {
      title: "AluraPic",
      fotos: [],
      filtro: ""
    };
  },
  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise
      .then(response => response.json())
      .then(fotos => (this.fotos = fotos));
  },
  computed: {
    fotosComFitro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
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
.filtro {
  display: block;
  width: 100%;
}
</style>

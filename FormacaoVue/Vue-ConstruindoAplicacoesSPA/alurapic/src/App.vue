<template>
  <div class="header">
    <Menu :routes="routes" />

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import { routes } from "./routes";

export default {
  components: { Menu },
  data() {
    return {
      routes
    };
  }
};
</script>
<style>
.header {
  font-family: Helvetica;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>

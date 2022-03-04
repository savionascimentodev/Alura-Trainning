<template>
  <button :class="estiloBotao" :type="type" @click="disparaAção()">
    {{ rotulo }}
  </button>
</template>
<script>
export default {
  props: {
    rotulo: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    confirmacao: {
      type: Boolean,
      required: true
    },
    style: {
      type: String,
      required: true
    }
  },
  computed: {
    estiloBotao() {
      if (this.style === "padrao" || !this.style) return "btn btn-padrao";
      if (this.style === "danger") return "btn btn-danger";
    }
  },
  methods: {
    disparaAção() {
      if (this.confirmacao) {
        if (confirm("Confirma a Operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    }
  }
};
</script>
<style scoped>
.btn {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.btn-danger {
  background: firebrick;
  color: white;
}

.btn-padrao {
  background: darkcyan;
  color: white;
}
</style>

<template>
  <button class="btn btn-danger" :type="type">
    {{ rotulo }}
  </button>
</template>
<script>
export default {
  props: {
    rotulo: {
      type: Array,
      required: true
    },
    type: {
      type: Array,
      required: true
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

import Vue from 'vue';

Vue.directive('transform', {

  // Primeiro argumento el, é uma referencia associada a algum elemento do DOM;
  // Segundo elemento binding, serve para  atribuímos algum à nossa diretiva no template, para ter acesso a este valor, usamos o binding.value
  // Quando é um . é um modificador.modifier, quando é dois pontos seria um argumento:
  bind(el, binding, vnode) {

    let current = 0;

    el.addEventListener('dblclick', function () {

      let incremento = binding.value || 0;

      let efeito;

      if (!binding.arg || binding.arg == 'rotate') {

        if (binding.modifiers.reverse) {
          current -= incremento;
        } else {
          current += incremento;
        }
        efeito = `rotate(${current}deg)`;

      } else if (binding.arg == 'scale') {

        efeito = `scale(${incremento})`;
      }

      this.style.transform = efeito;

      if (binding.modifiers.animate) this.style.transition = "transform 0.5s";



    });
  }

});
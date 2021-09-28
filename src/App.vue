<template>
  <div>
    <h2>Usando computed</h2>
    <p>mensagem invertida: {{ msgIvertida10 }}</p>
    <hr />
    Valor atual: {{ valor }} <br />
    <button v-on:click="addi()">Adicionar</button>
    <button @click="diminuir">Diminuir</button>
    <Binding />
    <Listas />
  </div>
</template>

<script>
import Binding from './components/Binding.vue'
import Listas from './components/Listas.vue'

export default {
  components: {
    Binding,
    Listas

  },
  data() {
    return {
      titulo: "Olá Mundo vuejs",
      msg: "mundo vue okkkk",
      valor: 18,
    };
  },
  methods: {
    addi() {
      this.valor++;
    },
    diminuir() {
      this.valor--;
    },
  },
  computed: {
    msgIvertida10() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
  },
};
</script>

<style></style>

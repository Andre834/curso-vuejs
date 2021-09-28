<template>
  <div>
    <br> <br> <br> <br><br><br>
    <h1>Binding method</h1>
   {{ menssagem }}
   <hr>
   <input v-bind:value="menssagem" type="text" @keyup="alterarMenssagem">
   <input :value="menssagem" type="text" @keyup.enter="alterarMenssagem">
   <hr>
   <a target="blank" :href="url">Link</a> para o site do vue
   <hr>
   <button :disabled="disabled">Disebled</button>
  </div>
</template>

<script>
export default {
  name: 'Binding',

 data() {
    return {
      titulo: "Olá Mundo vuejs",
      menssagem: "O mundo pertence a Deus",
      valor: 18,
      url: "https://br.vuejs.org",
      disabled: true
    };
  },
  methods: {
    addi() {
      this.valor++;
    },
    diminuir() {
      this.valor--;
    },
    alterarMenssagem(event){
      this.menssagem = event.target.value
    }
  },
  computed: {
    msgIvertida10() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

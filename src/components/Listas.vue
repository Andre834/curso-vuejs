<template>
  <div>
    <h2>Listagem de Livros</h2>
    <hr/>
      <div v-for="(livro, index) in livros" :key="index">{{ livro}}</div>
      <br><br><br><br><br>

      <ul>
      <li v-for="(valor, chave, index,) in livro" :key="index">
        ({{ index + 1 }}){{ chave }}: {{ valor }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Binding",

  data() {
    return {
      livros: [
        {
          titulo: "O pequeno principe",
          autor: "Santiago",
          publicado: "1943",
        },
        {
          titulo: "Senhor dos aneis",
          autor: "Santiago",
          publicado: "1983",
        },
        {
          titulo: "O poder de Deus",
          autor: "Santiago",
          publicado: "1963",
        },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

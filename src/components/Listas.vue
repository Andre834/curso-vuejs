<template>
  <div>
      <h1>{{titulo}}</h1>
      <hr>
      <h2>Listagem de frutas</h2>
      <ul>
          <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
       <h2>Listagem de frutas com índice</h2>
      <ul>
          <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
    <br> <br> <br> <br><br><br>
   <hr>
   
  </div>
</template>

<script>
export default {
  name: 'Binding',

 data() {
    return {
      titulo: "Trabalhando com listas no vuejs",
      frutas: ['laranja', 'Maçã', 'melão']
    };
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

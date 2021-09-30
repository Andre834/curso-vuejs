<template>
  <div>
      <h1>{{titulo}}</h1>
      <hr>
      <h2>Listagem de frutas { em objetos}</h2>
      <ul>
          <li v-for="fruta in frutas" :key="fruta.nome">
            <strong>{{ fruta.nome }}</strong> 
           fruta rico em vitamina {{ fruta.vitamina}}
          </li>
      </ul>

       <h2>Listagem de frutas com índice</h2>
      <ul>
          <li v-for="(fruta, index) in frutas" :key="fruta">{{ index+1 }} - <strong>{{ fruta.nome }}</strong> 
          fruta  rico em vitamina {{ fruta.vitamina }}
          </li>
      </ul>

        <h2>Listagem de frutas (com objetos e índice)</h2>
      <ul>
          <li v-for="(fruta, index) in frutas" :key="index">{{ index}} - <strong>{{ fruta.nome }}</strong> 
          fruta  rico em vitamina {{ fruta.vitamina }}
          </li>
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
      frutas: [
        { nome:'laranja:', vitamina: 'C...'},
        { nome: 'Maçã:', vitamina: 'B...'},
        { nome: 'melão:', vitamina: 'A...'}
      ]
    };
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

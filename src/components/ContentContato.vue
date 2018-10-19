<template>
  <div class="content"> 
     <h1>{{msg}}</h1>
     <form id="form" name="form" class="form" action="#">
         <input type="text" id="name" placeholder="Nome"v-model="name">
         <br> <br>
         <input type="text" id="email" placeholder="E-mail"v-model="email">
         <br> <br>
         <button>ENVIAR</button>
     </form>
  </div>
</template>

<script>
export default {
  name: 'ContantContent',
  data () {
    return {
      msg: 'Contatos'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/css/form';
</style>

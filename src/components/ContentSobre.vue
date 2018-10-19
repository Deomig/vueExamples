<template>
  <div class="sobre">
    <img src="../assets/logo.png" alt="Logo">
    <h1>{{msg}}</h1>
    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
  </div>
</template>

<script>
export default {
  name: 'SobreNosContent',
  data () {
    return {
      msg: 'Sobre Nós'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sobre {
  text-align: center;
  color: #fff;
  padding: 20px;
}

h1, h2 {
  font-weight: normal;
}

</style>

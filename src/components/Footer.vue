<template>
  <footer>
    <div class="main">
      <div class="main__item">
        <router-link tag="a" to="/">Home</router-link>
      </div>
      <div class="main__item">
        <router-link tag="a" to="/">Sobre nós</router-link>
      </div>
      <div class="main__item">
        <router-link tag="a" to="/">Contatos</router-link>
      </div>
      <div class="main__copy">
        Todos os direitos reservados pra você. | 2018
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/footer';
</style>

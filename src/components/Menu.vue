<template>
<header>
  <div class="main">
    <img class="main__logo" src="../assets/logo.png" alt="Logo">
    <div class="main__item">
      <router-link tag="a" to="/">{{home}}</router-link>
    </div>
    <div class="main__item">
      <router-link tag="a" to="/sobre">{{sobre}}</router-link>
    </div>
    <div class="main__item">
      <router-link tag="a" to="/contatos">{{contatos}}</router-link>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'MENU',
  data() {
    return {
      home: 'Home',
      sobre: 'Sobre Nós',
      contatos: 'Contatos'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/css/menu';
</style>

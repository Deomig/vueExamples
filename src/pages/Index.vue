<template>
<div>
  <header-menu />

  <content-index />

  <footer-principal />
</div>
</template>

<script>

import Menu from '@/components/Menu'
import ContentIndex from '@/components/ContentIndex'
import Footer from '@/components/Footer'

export default {
  name: "Index",
  components: {
    'header-menu': Menu,
    'content-index': ContentIndex,
    'footer-principal': Footer,
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

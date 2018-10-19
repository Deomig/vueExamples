<template>
<div>
  <header-menu />

  <content-contato />

  <footer-principal />
</div>
</template>

<script> 
import Menu from '@/components/Menu'
import ContentContato from '@/components/ContentContato'
import Footer from '@/components/Footer'

export default {
  name: "Contatos",
  components: {
    'header-menu': Menu,
    'content-contato': ContentContato,
    'footer-principal': Footer,
  },
  data() {
    return {
      language: '',
    }
  },
  mounted: function() {

  },
  methods: {


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

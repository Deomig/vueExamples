<template>
<div>
  <header-menu />

  <content-sobre />

  <footer-principal />
</div>
</template>

<script>
import Menu from '@/components/Menu'
import ContentSobre from '@/components/ContentSobre'
import Footer from '@/components/Footer'

export default {
  name: "SobreNos",
  components: {
    'header-menu': Menu,
    'content-sobre': ContentSobre,
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

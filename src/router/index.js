import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Sobre from '@/pages/Sobre'
import Contatos from '@/pages/Contato'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sobre',
      name: 'SobreNos',
      component: Sobre
    },
    {
      path: '/contatos',
      name: 'Contatos',
      component: Contatos
    }
  ]
})

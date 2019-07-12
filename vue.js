const Home = { template: '<div class="text-center shadow font-weight-bold" style="padding:15px;user-select:none">Início</div>' }
const Sobre = { template: '<div class="text-center shadow font-weight-bold" style="padding:15px;user-select:none">Sobre</div>' }
const Contato = { template: '<div class="text-center shadow font-weight-bold" style="padding:15px;user-select:none">Contato</div>' }
const routes = [
  { path: '/', component: Home},
  { path: '/sobre', component: Sobre },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
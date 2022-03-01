import Cadastro from './components/Cadastro.vue'
import Home from './components/Home.vue'

export const routes = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/cadastro', component: Cadastro, title: 'Cadasto' }
]
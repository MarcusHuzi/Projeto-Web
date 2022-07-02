import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../components/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/LoginView.vue')
    },

    {
        path: '/cadastro',
        name: 'Cadastro',
        component: () => import('../components/CadastroView.vue')
    },

    {
        path: '/perfil',
        name: 'Perfil',
        component: () => import('../components/PerfilView.vue')
    },

    {
        path: '/carrinho',
        name: 'Carrinho',
        component: () => import('../components/CarrinhoView.vue')
    },

    {
        path: '/finalizarcompra',
        name: 'FinalizarCompra',
        component: () => import('../components/FinalizarCompraView.vue')
    },

    {
        path: '/listacompras',
        name: 'ListaCompras',
        component: () => import('../components/ListaComprasView.vue')
    },

    {
        path: '/listaprodutos',
        name: 'ListaProdutos',
        component: () => import('../components/ListaProdutosView.vue')
    },

    {
        path: '/:catchAll(.*)',
        name: 'PaginaNaoEncontrada',
        component: () => import('../components/NotFound.vue')
      },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
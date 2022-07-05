import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/ListaProdutosView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
    },

    {
        path: '/cadastro',
        name: 'Cadastro',
        component: () => import('../views/CadastroView.vue')
    },

    {
        path: '/perfil',
        name: 'Perfil',
        component: () => import('../views/PerfilView.vue')
    },

    {
        path: '/carrinho',
        name: 'Carrinho',
        component: () => import('../views/CarrinhoView.vue')
    },

    {
        path: '/finalizarcompra',
        name: 'FinalizarCompra',
        component: () => import('../views/FinalizarCompraView.vue')
    },

    {
        path: '/listacompras',
        name: 'ListaCompras',
        component: () => import('../views/ListaComprasView.vue')
    },

    {
        path: '/listaprodutos',
        name: 'ListaProdutos',
        component: () => import('../views/ListaProdutosView.vue')
    },

    {
        path: '/:catchAll(.*)',
        name: 'PaginaNaoEncontrada',
        component: () => import('../views/NotFound.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
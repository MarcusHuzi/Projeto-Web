<template>

    <div class="content_compras">
        <div class="titulo_compras">
            <h1>Listas de Compras</h1>
            <h2><router-link to="/">Home</router-link> > Listas de Compras</h2>
            <hr/>
        </div>
        
        <lista-compra></lista-compra>

    </div>

</template>

<script>

    import ListaCompra from "../components/ListaCompra.vue"

    export default {
        name: 'ListaComprasView',
        components: {
            ListaCompra
        },
        data() {
            return {

            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/listaCompras.css';
</style>
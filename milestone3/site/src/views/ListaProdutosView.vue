<template>
    <div class="content_produtos">
        <div class="titulo_produtos">
            <h1>Produtos de limpeza</h1>
            <h2>Home > Produtos de Limpeza</h2>
            <hr/>
        </div>

        <div class="listagem">
            <ul>
                <product-list></product-list>
            </ul>
        </div>

    </div>

    <modal-product v-show="isModalVisible" @close="closeModal()"></modal-product>
</template>

<script>

    import ProductList from "../components/ProductList.vue"
    import ModalProduct from "../components/ModalProduct.vue"

    export default {
        name: 'ListaProdutosView',
        components: {
            ProductList,
            ModalProduct
        },
        data() {
            return {
                isModalVisible: false,
                modalProduct: Object
            }
        },
        methods: {
            showModal(product) {
                this.modalProduct = product
                this.isModalVisible = true
            },
            closeModal() {
                this.isModalVisible = false
            }
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/listaProdutos.css';
</style>
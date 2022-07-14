<template>
    <div class="content_produtos">
        <div class="titulo_produtos">
            <h1>{{ getPageTitle() }}</h1>
            <h2><router-link to="/">Home</router-link> > {{ getPageTitle() }}</h2>
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
            },
            getPageTitle() {
                let cat = String(this.$route.params.category)
                if (cat === "bebidas")
                    return "Bebidas"
                else if (cat === "congelados")
                    return "Congelados"
                else if (cat === "higiene")
                    return "Produtos de Higiene"
                else if (cat === "hortifruti")
                    return "Hortifruti"
                else if (cat === "enlatados")
                    return "Enlatados"
                else if (cat === "limpeza")
                    return "Produtos de Limpeza"
                else if (cat === "laticinios")
                    return "Laticínios"
                else if (cat === "cereais")
                    return "Cereais"
            }
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/listaProdutos.css';
</style>
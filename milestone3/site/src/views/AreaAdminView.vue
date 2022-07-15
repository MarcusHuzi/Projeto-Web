<template>
    <div class="content-admin">
        <div class="sub-header">
            <h1 class="admin-title"><b>Área do Administrador</b></h1>
            <h2 class="admin-path"><b>Home > Área do Administrador</b></h2>
        </div>
        <div class="line top-line">
            <hr/>
        </div>
        <div class="sides">
            <div class="side products-side">
                <div class="side-title products-side-title">
                    <h1>Produtos</h1>
                </div>
                <div class="query-area products-query-area">
                    <div class="query-forms products-query-forms">
                        <input class="query-input products-query-input">
                        <button class="query-btn products-query-btn"></button>
                    </div>
                    <div class="response-area users-response-area">
                        <img class="product-img">
                        <input class="title">
                        <input class="description">
                        <input class="price">
                        <input class="category">
                        <input class="in_stock">
                    </div>
                    <div class="save-changes users-save-changes">
                        <button class="save-changes-btn users-save-changes-btn"></button>
                    </div>
                </div>

            </div>
            <div class="side users-side">
                <div class="side-title users-side-title">
                    <h1>Usuários</h1>
                </div>
                <div class="query-area users-query-area">
                    <div class="query-forms users-query-forms">
                        <input class="query-input user-query-input">
                        <button class="query-btn users-query-btn"></button>
                    </div>
                    <div class="response-area users-response-area">
                        <input class="nome">
                        <input class="cpf">
                        <input class="email">
                        <input class="tel">
                        <input class="nasc">
                        <input class="cep">
                        <input class="endereco">
                        <input class="isAdm">
                    </div>
                    <div class="save-changes users-save-changes">
                        <button class="save-changes-btn users-save-changes-btn"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import productsData from '../data/estoque.json'
    import clientsData from '../data/clients.json'

    export default {
        name: 'AreaAdminView',
        data() {
            return {
                estoque: productsData,
                clientes: clientsData,
            };
        },
        methods: {
            getImgUrl(url){
                try {
                    let str = require('@/assets/' + url)
                    return str
                }
                catch {
                    return ""
                }
            }
        }
    };
</script>

<style scoped>
    @import '/src/assets/css/areaAdmin.css';
</style>
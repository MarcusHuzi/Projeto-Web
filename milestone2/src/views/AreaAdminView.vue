<template>
    <div class="content-admin">
        <div class="sub-header">
            <h1 class="admin-title"><b>Área do Administrador</b></h1>
            <h2 class="admin-path"><b>Home > Área do Administrador</b></h2>
        </div>
        <div class="line top-line">
            <hr/>
        </div>
        <div class="admin-opt">
            <div class="box estoque">
                <div class="layout">
                    <h1 class="box-title">Estoque</h1>
                    <button class="save-changes-btn">Salvar Mudanças</button>
                </div>
                <div class="items-list">
                    <ul>
                        <li v-for="produto in estoque" :key="produto.id" class="item">
                            <div class="prod-imagem-box">
                                <img :src="getImgUrl(produto.foto)" class="img-produto">
                            </div>
                            <input v-model="produto.nome" type="text">
                            <input v-model="produto.preco"  type="float">
                            <input v-model="produto.quantidade" type="float">
                        </li>
                    </ul>   
                </div>
            </div>
            <div class="box clientes">
                <div class="layout">
                    <h1 class="box-title">Clientes</h1>
                    <button class="save-changes-btn">Salvar Mudanças</button>
                </div>
                <div class="items-list">
                    <ul>
                        <li v-for="usuario in clientes" :key="usuario.id" class="item">
                            <input v-model="usuario.nome" type="text">
                            <input v-model="usuario.email" type="email">
                            <input v-model="usuario.cpf" type="float">
                            <input v-model="usuario.telefone" type="float">
                        </li>
                    </ul>   
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
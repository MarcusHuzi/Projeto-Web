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
                        <div class="query-label products-query-label">
                            <label class="query-input-label products-query-input-label">Slug do Produto</label>
                        </div>
                        <div class="query-input-area products-query-input-area">
                            <input class="query-input products-query-input" placeholder="Slug do produto aqui">
                            <button class="query-btn products-query-btn" @click="query()">Consultar</button>
                        </div>
                    </div>
                    <div class="response-area users-response-area">
                        <img class="product-img">
                        <label>Nome do produto</label><input class="title">
                        <label>Descrição</label><input class="description" >
                        <label>Preço</label><input class="price">
                        <label>Categoria</label>
                        <select class="category">
                            <option value="bebidas">Bebidas</option>
                            <option value="hortifruti" selected>Hortifruti</option>
                            <option value="laticinios">Laticinios</option>
                            <option value="congelados">Congelados</option>
                            <option value="enlatados">Enlatados</option>
                            <option value="cereais">Cereais</option>
                            <option value="higiene">Higiene</option>
                            <option value="limpeza">Limpeza</option>
                        </select>
                        <label>Quantidade no estoque</label><input class="in_stock">
                    </div>
                    <div class="save-changes users-save-changes">
                        <button class="save-changes-btn users-save-changes-btn">Salvar alterações</button>
                    </div>
                </div>

            </div>
            <div class="side users-side">
                <div class="side-title users-side-title">
                    <h1>Usuários</h1>
                </div>
                <div class="query-area users-query-area">
                    <div class="query-forms users-query-forms">
                        <div class="query-label users-query-label">
                            <label class="query-input-label users-query-input-label">CPF do usuário</label>
                        </div>
                        <div class="query-input-area users-query-input-area">
                            <input class="query-input users-query-input" placeholder="CPF do usuário aqui">
                            <button class="query-btn useres-query-btn">Consultar</button>
                        </div>
                    </div>
                    <div class="response-area users-response-area">
                        <label>Nome</label><input class="nome">
                        <label>CPF</label><input class="cpf">
                        <label>Email</label><input class="email">
                        <label>Telefone</label><input class="tel">
                        <label>Data de nascimento</label><input class="nasc">
                        <label>CEP</label><input class="cep">
                        <label>Endereço</label><input class="endereco">
                        <label>É administrador</label><input class="isAdm" type="checkbox">
                    </div>
                    <div class="save-changes users-save-changes">
                        <button class="save-changes-btn users-save-changes-btn">Salvar alterações</button>
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
            },
            query() {
                alert("PORRA")
            }
        }
    };
</script>

<style scoped>
    @import '/src/assets/css/areaAdmin.css';
</style>
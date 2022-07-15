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
                <div class="response-area products-response-area">
                    <div class="field">
                        <label>Nome do produto</label><input class="title" placeholder="Nome do produto aqui">
                    </div>
                    <div class="field">
                        <label>Descrição</label>
                        <textarea class="description" placeholder="Descrição do produto aqui" rows="11" cols="0"></textarea>    
                    </div>
                    <div class="field">
                        <label>Preço</label><input class="price" placeholder="Preço do produto aqui">
                    </div>
                    <div class="field">
                        <label>Categoria</label>
                        <select class="category" aria-placeholder="Selecione a categoria">
                            <option value="bebidas">Bebidas</option>
                            <option value="hortifruti" selected>Hortifruti</option>
                            <option value="laticinios">Laticinios</option>
                            <option value="congelados">Congelados</option>
                            <option value="enlatados">Enlatados</option>
                            <option value="cereais">Cereais</option>
                            <option value="higiene">Higiene</option>
                            <option value="limpeza">Limpeza</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Quantidade no estoque</label><input class="in_stock" placeholder="Quantidade de itens no estoque aqui">
                    </div>
                </div>
                <div class="save-changes users-save-changes">
                    <button class="save-changes-btn users-save-changes-btn">Salvar alterações</button>
                </div>
            </div>
            <div class="side users-side">
                <div class="side-title users-side-title">
                    <h1>Usuários</h1>
                </div>
                <div class="response-area users-response-area">
                    <div class="field">
                        <label>Nome do Usuário</label><input class="nome" placeholder="Nome de usuário aqui">
                    </div>
                    <div class="field">
                        <label>CPF</label><input class="cpf" placeholder="CPF aqui">
                    </div>
                    <div class="field">
                        <label>Email</label><input class="email" placeholder="Email aqui">
                    </div>
                    <div class="field">
                        <label>Telefone</label><input class="tel" placeholder="Telefone aqui">
                    </div>
                    <div class="field">
                        <label>Data de nascimento</label><input class="nasc" placeholder="Data de nascimento aqui">
                    </div>
                    <div class="field">
                        <label>CEP</label><input class="cep" placeholder="CEP aqui">
                    </div>
                    <div class="field">
                        <label>Endereço</label><input class="endereco" placeholder="Endereço aqui">
                    </div>
                    <div class="field adm-checkbox">
                        <label class="isAdm-lavel">É administrador:</label>
                        <input class="isAdm" type="checkbox">
                    </div>
                </div>
                <div class="save-changes users-save-changes">
                    <button class="save-changes-btn users-save-changes-btn">Salvar alterações</button>
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
                mostrarCampos: false
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
                this.mostrarCampos = true;
            }
        }
    };
</script>

<style scoped>
    @import '/src/assets/css/areaAdmin.css';
</style>
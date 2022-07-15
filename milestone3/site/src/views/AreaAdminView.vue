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
                    <div class="field" v-if="this.productExist == false">
                        <label>Selug do produto</label><input class="title" placeholder="Slug do produto aqui" v-model="slug">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Nome do produto</label><input class="title" placeholder="Nome do produto aqui" v-model="nome_produto">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Descrição</label>
                        <textarea class="description" placeholder="Descrição do produto aqui" rows="11" cols="0" v-model="descricao"></textarea>    
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Preço</label><input class="price" placeholder="Preço do produto aqui" v-model="preco">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Categoria</label>
                        <select class="category" aria-placeholder="Selecione a categoria" v-model="categoria">
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
                    <div class="field" v-if="this.productExist == true">
                        <label>Quantidade no estoque</label><input class="in_stock" placeholder="Quantidade de itens no estoque aqui" v-model="qntEstoque">
                    </div>
                </div>
                <div class="save-changes product-save-changes" v-if="this.productExist == true">
                    <button class="save-changes-btn product-save-changes-btn" @click="saveProductChanges()">Salvar alterações</button>
                </div>
                <div class="delete-product" v-if="this.productExist == true">
                    <button class="delete-product-btn" @click="deleteProduct()">Deletar produto</button>
                </div>
                <div class="load-user"  v-if="this.productExist == false">
                    <button class="load-product-btn load-btn" @click="loadProduct()">Buscar produto</button>
                </div>
            </div>
            <div class="side users-side">
                <div class="side-title users-side-title">
                    <h1>Usuários</h1>
                </div>
                <div class="response-area users-response-area">
                    <div class="field" v-if="this.userExist == true">
                        <label>Nome do Usuário</label><input required class="nome" placeholder="Nome de usuário aqui" type="text" v-model="nome">
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>CPF</label><input required class="cpf" placeholder="CPF aqui" type="text" v-model="cpf">
                    </div>
                    <div class="field" v-if="this.userExist == false">
                        <label>Email</label><input required class="email" placeholder="Email aqui" type="email" v-model="email">
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>Telefone</label><input required class="tel" placeholder="Telefone aqui" type="tel" v-model="celular">
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>Data de nascimento</label><input required class="nasc" placeholder="Data de nascimento aqui" type="date" v-model="nasc">
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>CEP</label><input class="cep" required placeholder="CEP aqui" type="text" v-model="cep">
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>Endereço</label><input required class="endereco" placeholder="Endereço aqui" type="text" v-model="end">
                    </div>
                   <div class="field" v-if="this.userExist == true">
                        <label>Senha</label><input required class="senha" placeholder="Senha aqui" type="text" v-model="senha">
                    </div>
                    <div class="field adm-checkbox" v-if="this.userExist == true">
                        <label class="isAdm-lavel">É administrador:</label>
                        <input required class="isAdm" type="checkbox" v-model="isAdm">
                    </div>
                </div>
                <div class="save-changes users-save-changes" v-if="this.userExist == true">
                    <button class="save-changes-btn users-save-changes-btn" @click="saveUserChanges()">Salvar alterações</button>
                </div>
                <div class="delete-user" v-if="this.userExist == true">
                    <button class="delete-user-btn" @click="deleteUser()">Deletar usuário</button>
                </div>
                <div class="load-user"  v-if="this.userExist == false">
                    <button class="load-user-btn load.btn" @click="loadUser()">Buscar usuário</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AreaAdminView',
        data() {
            return {
				email:"",
				cpf:"",
				cep:"",
				end:"",
				celular:"",
				nome:"",
				nasc:"",
                senha:"",
                id:"",
                isAdm: false,
                userExist: false,

                slug:"",
                nome_produto:"",
                preco:"",
                descricao:"",
                categoria:"",
                qntEstoque:"",
                productExist: false
            };
        },
        methods: {
            loadUser: async function() {
                try{
                    const d = new Date();
                    // fazendo um GET com o email passado
                    let resp = await fetch("http://localhost:3000/clients/ck_email/"+this.email);
                    let resp_json = await resp.json();

                    this.userExist = true;
                    this.nome = resp_json.nome;
                    this.cpf = resp_json.cpf;
                    this.nasc = d.getDate(resp_json.nasc) + "-" + d.getMonth(resp_json.nasc) + "-" + d.getFullYear(resp_json.nasc);
                    this.cep = resp_json.cep;
                    this.email = resp_json.email;
                    this.senha = resp_json.senha
                    this.end = resp_json.endereco;
                    this.celular = resp_json.tel;	
                    this.isAdm = resp_json.isAdm;
                    this.id = resp_json._id;
                    console.log(this.id)
				} 
                catch(e) {
					alert('Usuario não cadastrado');
				}
            },
            deleteUser: async function() {
                try{
                    let resp = await fetch("http://localhost:3000/clients/"+this.id, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' }
                    });
                    console.log(resp.status);
                    alert("Usuario deletado com sucesso");
                    window.location.href = "/areaAdmin";
				} 
                catch(e) {
					alert('Falha ao deletar usuário');
				}
            },
            saveUserChanges: async function() {
                console.log(this.nome);
                console.log(this.email);
                console.log(this.cpf);
                console.log(this.cep);
                console.log(this.end);
                console.log(this.celular);
                console.log(this.nasc);
                console.log(this.senha);
                console.log(this.id);
                console.log(this.isAdm);

                try{
                    let resp = await fetch("http://localhost:3000/clients/"+this.id, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                nome: this.nome,
                                cpf: this.cpf
                            }
                        )
                        
                    });
                    let resp_json = await resp.json();

                    console.log(resp_json.message);
                    console.log(resp.status);
                    alert("Usuario atualizado com sucesso");
                    window.location.href = "/areaAdmin";
				} 
                catch(e) {
					alert('Falha ao atualizar usuário');
				}
            },
            loadProduct: async function() {
                try{
                    // fazendo um GET com o email passado
                    let resp = await fetch("http://localhost:3000/products/"+this.slug);
                    let resp_json = await resp.json();

                    this.productExist = true;
                    this.nome_produto = resp_json.title;
                    this.preco = resp_json.price;
                    this.descricao = resp_json.description;
                    this.categoria = resp_json.category;
                    this.qntEstoque = resp_json.in_stock;
                    this.id = resp_json._id;
				} 
                catch(e) {
					alert('Produto não cadastrado');
				}
            },
            deleteProduct: async function() {
                try{
                    let resp = await fetch("http://localhost:3000/products/"+this.id, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' }
                    });
                    console.log(resp.status);
                    alert("Produto deletado com sucesso");
                    window.location.href = "/areaAdmin";
				} 
                catch(e) {
					alert('Falha ao deletar produto');
				}
            },
            saveProductChanges: async function() {
                console.log(this.nome);
                console.log(this.email);
                console.log(this.cpf);
                console.log(this.cep);
                console.log(this.end);
                console.log(this.celular);
                console.log(this.nasc);
                console.log(this.senha);
                console.log(this.id);
                console.log(this.isAdm);

                try{
                    let resp = await fetch("http://localhost:3000/clients/"+this.id, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: {
                            "nome": this.nome,
                            "cpf": this.cpf
                        }
                    });
                    let resp_json = await resp.json();

                    console.log(resp_json.message);
                    console.log(resp.status);
                    alert("Usuario atualizado com sucesso");
                    window.location.href = "/areaAdmin";
				} 
                catch(e) {
					alert('Falha ao atualizar usuário');
				}
            }
        }
    };
</script>

<style scoped>
    @import '/src/assets/css/areaAdmin.css';
</style>
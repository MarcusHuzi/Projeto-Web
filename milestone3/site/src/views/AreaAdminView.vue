<template>
    <div class="content-admin">
        <div class="titulo_admin">
            <h1>Área do Administrador</h1>
            <h2><router-link to="/">Home</router-link> > Área do Administrador</h2>
            <hr/>
        </div>
        <div class="sides">
            <div class="side products-side">
                <div class="side-title products-side-title">
                    <h1>Produtos</h1>
                </div>
                <div class="response-area products-response-area">
                    <div class="field" v-if="this.productExist == false">
                        <label>Slug do produto</label>
                        <select v-model="slug">
                            <option v-for="name in this.productsNames" v-bind:key="name">{{name}}</option>;
                        </select>
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Slug do produto</label><input class="title" placeholder="Nome do produto aqui" v-model="slug_produto">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Titulo</label><input class="title" placeholder="Titulo do produto aqui" v-model="titulo_produto">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Imagem</label><input class="image" placeholder="Caminho da imagem do produto aqui" v-model="image_produto">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Imagem alt</label><input class="image_alt" placeholder="Imagem alt do produto aqui" v-model="imageAlt_produto">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label >Descrição</label>
                        <textarea class="description" placeholder="Descrição do produto aqui" rows="11" cols="0" v-model="descricao"></textarea>    
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Preço</label><input class="price" placeholder="Preço do produto aqui" v-model="preco">
                    </div>
                    <div class="field" v-if="this.productExist == true">
                        <label>Categoria</label>
                        <select class="category" placeholder="Selecione a categoria" v-model="categoria">
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
                <div class="save-changes product-save-changes" v-if="this.productExist == true && this.addprod==false">
                    <button class="save-changes-btn product-save-changes-btn" @click="saveProductChanges()">Salvar alterações</button>
                </div>
                <div class="delete-product" v-if="this.productExist == true && this.addprod==false">
                    <button class="delete-product-btn" @click="deleteProduct()">Deletar produto</button>
                </div>
                <div class="delete-product" v-if="this.productExist == true && this.addprod==true">
                    <button class="delete-product-btn" @click="addp()">Adicionar produto</button>
                </div>
                <div class="delete-product" v-if="this.productExist == true">
                    <button class="delete-product-btn" @click="rem()">Cancelar</button>
                </div>
                <div class="load-user"  v-if="this.productExist == false">
                    <button class="load-product-btn load-btn" @click="loadProduct()">Buscar produto</button>
                    <button class="load-product-btn load-btn" @click="addProduct()">Adicionar produto</button>
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
                        <label>Email</label>
                        <select v-model="email"><input required class="email" placeholder="Email aqui" type="email">
                            <option v-for="email in this.clientsEmails" v-bind:key="email">{{email}}</option>;
                        </select>
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>Telefone</label><input required class="tel" placeholder="Telefone aqui" type="tel" v-model="celular">
                    </div>
                    <div class="field" v-if="this.userExist == true">
                        <label>Email</label><input required class="email" placeholder="Email aqui" type="email" v-model="email">
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
                <div class="save-changes users-save-changes" v-if="this.userExist == true && this.adduser == false">
                    <button class="save-changes-btn users-save-changes-btn" @click="saveUserChanges()">Salvar alterações</button>
                </div>
                <div class="delete-user" v-if="this.userExist == true && this.adduser == false">
                    <button class="delete-user-btn" @click="deleteUser()">Deletar usuário</button>
                </div>
                <div class="delete-user" v-if="this.userExist == true  && this.adduser == true">
                    <button class="delete-user-btn" @click="addu()">Adicionar usuário</button>
                </div>
                 <div class="delete-user" v-if="this.userExist == true">
                    <button class="delete-user-btn" @click="rem2()">Cancelar</button>
                </div>
                <div class="load-user"  v-if="this.userExist == false">
                    <button class="load-user-btn" @click="loadUser()">Buscar usuário</button>
                    <button class="load-user-btn" @click="addUser()">Adicionar usuário</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

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
                adduser: false,


                slug:"",
                slug_produto:"",
                titulo_produto:"",
                image_produto:"",
                imageAlt_produto:"",
                preco:"",
                descricao:"",
                categoria:"",
                qntEstoque:"",
                productExist: false,
                addprod: false,
                productsNames: [],
                clientsEmails: []
            };
        },
        created() {
            this.getOptions()
        },
        methods: {
            
            addProduct(){
                this.productExist = true;
                this.addprod = true;
            },
            addUser(){
                this.userExist = true;
                this.adduser = true;
            },
            rem(){
                this.productExist=false;
                this.addprod=false;
            },
             rem2(){
                this.userExist=false;
                this.adduser = false;
            },
            addp: async function (){
                try{
                    let req = JSON.stringify({
							slug: this.slug_produto,
                            title: this.titulo_produto,
                            description: this.descricao,
                            price: this.preco,
                            category: this.categoria,
                            in_stock: this.qntEstoque,
                            sold: 0,
                            image_src: this.image_produto,
                            image_alt: this.imageAlt_produto
						});	

                    let resp = await fetch("http://localhost:3000/products", {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: req
						});		

                    let resp_json = await resp.json();
					alert(resp_json.message);

                    if(resp.status == 201){
                        window.location.href = "/areaAdmin";
                    }
				} 
                catch(e) {
					alert("Error:" + e);

				}
            },
            addu: async function(){
                try{
						
						let req = JSON.stringify({
							nome: this.nome,
							cpf: this.cpf,
							email: this.email,
							tel: this.celular,
							nasc: this.nasc,
							senha: this.senha,
							cep: this.cep,
							endereco: this.end,
                            isAdm: this.isAdm
						});				
			

						let resp = await fetch("http://localhost:3000/clients/cadastro", {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: req
						});
					

						let resp_json = await resp.json();
						alert(resp_json.message);

						if(resp.status == 201){
							this.$cookies.set("account_id", resp_json.id);
							window.location.href = "/areaAdmin";
						}

					} catch(e){
						alert('Error:' + e);
					}
	
            },

            formattedDate(date){
                return moment(date).format('dd-mm-yyyy')
            },
            loadUser: async function() {
                try{
                    // fazendo um GET com o email passado
                    let resp = await fetch("http://localhost:3000/clients/ck_email/"+this.email);
                    let resp_json = await resp.json();

                    this.userExist = true;
                    this.nome = resp_json.nome;
                    this.cpf = resp_json.cpf;
                    this.nasc = moment(resp_json.nasc).utc().format("YYYY-MM-DD")
                    this.cep = resp_json.cep;
                    this.email = resp_json.email;
                    this.senha = resp_json.senha
                    this.end = resp_json.endereco;
                    this.celular = resp_json.tel;	
                    this.isAdm = resp_json.isAdm;
                    this.id = resp_json._id;
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
                try{
                    let resp = await fetch("http://localhost:3000/clients/"+this.id, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                nome: this.nome,
                                cpf: this.cpf,
                                senha: this.senha,
                                tel: this.celular,
                                nasc: new Date(this.nasc),
                                cep: this.cep,
                                email:this.email,
                                endereco: this.end,
                                isAdm: this.isAdm
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
                    console.log(this.slug)
                    // fazendo um GET com o email passado
                    let resp = await fetch("http://localhost:3000/products/"+this.slug);
                    let resp_json = await resp.json();

                    if(resp_json.slug == null){
                        alert('produto inexistente');
                        return;
                    }

                    this.productExist = true;
                    this.slug_produto = resp_json.slug;
                    this.titulo_produto = resp_json.title;
                    this.preco = resp_json.price;
                    this.descricao = resp_json.description;
                    this.categoria = resp_json.category;
                    this.qntEstoque = resp_json.in_stock;
                    this.image_produto = resp_json.image_src;
                    this.imageAlt_produto = resp_json.image_alt;
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
                try{
                    let resp = await fetch("http://localhost:3000/products/"+this.id, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                slug: this.slug_produto,
                                title: this.titulo_produto,
                                image_src: this.image_produto,
                                image_alt: this.imageAlt_produto,
                                description: this.descricao,
                                price: this.preco,
                                category: this.categoria,
                                in_stock: this.qntEstoque
                            }
                        )
                    });
                    let resp_json = await resp.json();

                    console.log(resp_json.message);
                    console.log(resp.status);
                    alert("Produto atualizado com sucesso");
                    window.location.href = "/areaAdmin";
				} 
                catch(e) {
					alert('Falha ao atualizar produto');
				}
            },
            async getOptions(){
                try {
                    let resp = await fetch("http://localhost:3000/products");
                    let products = await resp.json();
  
                    for (let product of products) {
                        this.productsNames.push(product.slug);
                    }
                } catch (e) {
                    console.error("Erro ao listar produtos.");
                }

                try {
                    let resp = await fetch("http://localhost:3000/clients");
                    let clients = await resp.json();
  
                    for (let client of clients) {
                        this.clientsEmails.push(client.email);
                    }
                } catch (e) {
                    console.error("Erro ao listar usuarios.");
                }
            }
        }
    };
</script>

<style scoped>
    @import '/src/assets/css/areaAdmin.css';
</style>
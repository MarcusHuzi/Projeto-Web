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
                        <label>Nome do Usuário</label><input required class="nome" placeholder="Nome de usuário aqui" type="text" v-model="nome">
                    </div>
                    <div class="field">
                        <label>CPF</label><input required class="cpf" placeholder="CPF aqui" type="text" v-model="cpf">
                    </div>
                    <div class="field">
                        <label>Email</label><input required class="email" placeholder="Email aqui" type="email" v-model="email">
                    </div>
                    <div class="field">
                        <label>Telefone</label><input required class="tel" placeholder="Telefone aqui" type="tel" v-model="celular">
                    </div>
                    <div class="field">
                        <label>Data de nascimento</label><input required class="nasc" placeholder="Data de nascimento aqui" type="date" v-model="nasc">
                    </div>
                    <div class="field">
                        <label>CEP</label><input class="cep" required placeholder="CEP aqui" type="text" v-model="cep">
                    </div>
                    <div class="field">
                        <label>Endereço</label><input required class="endereco" placeholder="Endereço aqui" type="text" v-model="end">
                    </div>
                    <div class="field adm-checkbox">
                        <label class="isAdm-lavel">É administrador:</label>
                        <input required class="isAdm" type="checkbox" v-model="isAdm">
                    </div>
                </div>
                <div class="save-changes users-save-changes">
                    <button class="save-changes-btn users-save-changes-btn" @click="verificar()">Salvar alterações</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	let ano = new Date().getFullYear()
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
                isAdm: false,
				erro: [0,0,0,0,0,0,0,0,0,0] //vetor para marcar erros
            };
        },
        methods: {
            verificar: async function() {
                //verificar se o email esta no formato adequado
				if(this.email == "" ){
					document.getElementById("e_email").innerText = "Email inválido"
					this.erro[2] = 1;
				} else {
					document.getElementById("e_email").innerText = "";
					this.erro[2] = 0;
				}

				//verificar se o cpf ta no formato adequado
				if(this.cpf==""){
					document.getElementById("v_cpf").innerText = "CPF inválido"
					this.erro[3] = 1;
				} else {
					document.getElementById("v_cpf").innerText = "";
					this.erro[3] = 0;
				}

                //verificar se o cep ta no formato adequado
				if(this.cep==""){
					document.getElementById("v_cep").innerText = "CEP inválido"
					this.erro[4] = 1;
				} else{
					document.getElementById("v_cep").innerText = "";
					this.erro[4] = 0;
				}

                //verificar se nome foi inserido corretamente
				if(this.nome == ""){
					document.getElementById("v_nome").innerText = "Nome inválida"
					this.erro[6] = 1;
				} else{
					document.getElementById("v_nome").innerText = "";
					this.erro[6] = 0;
				}

                //verificar se celular foi inserido corretamente
				if(this.celular == ""){
					document.getElementById("v_celular").innerText = "Celular inválido"
					this.erro[7] = 1;
				} else{
					document.getElementById("v_celular").innerText = "";
					this.erro[7] = 0;
				}

                //verificar se o end foi inserido corretamente
				if(this.end == ""){
					document.getElementById("v_end").innerText = "Endereço inválido"
					this.erro[8] = 1;
				} else{
					document.getElementById("v_end").innerText = "";
					this.erro[8] = 0;
				}

                //verificar se a data de nascimento foi inserida corretamente
				if(this.nasc == ""){
					document.getElementById("v_nasc").innerText = "Data inválida"
					this.erro[9] = 1;

				} else if(ano - parseInt(this.nasc.substring(5,0)) < 14){
					document.getElementById("v_nasc").innerText = "Data inválida"
					this.erro[9] = 1;
		
				}else{
					document.getElementById("v_nasc").innerText = "";
					this.erro[9] = 0;
				}

                if(this.erro[0]==1 || this.erro[1]==1 || this.erro[2]==1 || this.erro[3]==1 || this.erro[4]==1 || this.erro[5]==1
					|| this.erro[6]==1 || this.erro[7]==1 || this.erro[8]==1 || this.erro[9]==1) {
					alert("Informações de usuário inválidas");
				} else {
					try{
						let req = JSON.stringify({
							nome: this.nome,
							cpf: this.cpf,
							email: this.email,
							tel: this.celular,
							nasc: this.nasc,
							senha: this.password,
							cep: this.cep,
							endereco: this.end,
						});				
						let resp = await fetch("http://localhost:3000/clients/cadastro", {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: req
						});
						let resp_json = await resp.json();
						alert(resp_json.message);

						if(resp.status == 200){
							this.$cookies.set("account_id", resp_json.id);
							this.$router.push('/areaAdmin')
						}
					}
                    catch(e){
						alert('Error:' + e);
					}
				}
            }
        }
    };
</script>

<style scoped>
    @import '/src/assets/css/areaAdmin.css';
</style>
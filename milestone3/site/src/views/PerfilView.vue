<template>
    <div class="content-perfil">
        <div class="sub-header">
            <h1 class="profile-title"><b>Perfil do Usuário</b></h1>
            <h2 class="profile-path"><b>Home > Meu Perfil</b></h2>
        </div>
        <div class="line top-line">
            <hr/>
        </div>
        
        <div class="nome">
            <div class="field field-nome">
                        <div class="label label-nome">
                            <h3>Nome</h3>
                        </div>
                        <div class="data data-nome">
                            <div class="dados"><span>{{nome}}</span></div>
                        </div>
            </div>
        </div>
        <div class="personal-info">
        
            <div class="left-column">
                 <div class="field field-cep">
                    <div class="label label-cep">
                        <h3>CEP</h3>
                    </div>
                    <div class="data data-cep">
                       <div class="dados"><span>{{cep}}</span></div>
                    </div>
                </div>
                <div class="field field-cpf">
                    <div class="label label-cpf">
                        <h3>CPF</h3>
                    </div>
                    <div class="data data-cpf">
                       <div class="dados"><span>{{cpf}}</span></div>
                    </div>
                </div>
                <div class="field field-telefone">
                    <div class="label label-telefone">
                        <h3>Telefone</h3>
                    </div>
                    <div class="data data-telefone">
                        <div class="dados"><span>{{tel}}</span></div>
                    </div>
                </div>
            </div>
            <div class="right-column">
                <div class="field field-endereco">
                    <div class="label label-endereco">
                        <h3>Endereço</h3>
                    </div>
                    <div class="data data-endereco">
                        <div class="dados"><span>{{end}}</span></div>
                    </div>
                </div>
                <div class="field field-email">
                    <div class="label label-email">
                        <h3>Email</h3>
                    </div>
                    <div class="data data-email">
                        <div class="dados"><span>{{email}}</span></div>
                    </div>
                </div>
                 <div class="field field-nasc">
                    <div class="label label-nasc">
                        <h3>Nascimento</h3>
                    </div>
                    <div class="data data-nasc">
                        <div class="dados"><span>{{nasc}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="saveChanges">
            <button class="saveChanges-btn" @click="openModal">Editar dados</button>
        </div>
        <div class="line bottom-line">
            <hr/>
        </div>
        
        

    </div>

    <div v-if="myModal">
            <transition name="modal"> 
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-container">
                                <div class="modal-header">

                                    <h4 class="modal-title" > Editar Dados Pessoais </h4>
                                </div>
                                <div class="modal-body">
                                        <div class="e_nome">
                                            <div class="field-modal field-nome">
                                                <div class="label-modal label-nome">
                                                    <h3>Nome</h3>
                                                </div>
                                                <div class="data data-nome">
                                                <input type="text" class="form-control" v-model="e_nome">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="left-column-modal">
                                            <div class="field-modal field-cep">
                                                <div class="label-modal label-cep">
                                                    <h3>CEP</h3>
                                                </div>
                                                <div class="data data-cep">
                                                    <input type="text" class="form-control" v-model="e_cep">
                                                </div>
                                            </div>
                                            <div class="field-modal field-senha">
                                                <div class="label-modal label-senha">
                                                    <h3>Senha</h3>
                                                </div>
                                                <div class="data data-senha">
                                                    <input type="password" class="form-control" v-model="e_senha">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="right-column-modal">
                                            <div class="field-modal field-telefone">
                                                <div class="label-modal label-telefone">
                                                    <h3>Telefone</h3>
                                                </div>
                                                <div class="data data-telefone">
                                                <input type="tel" class="form-control" v-model="e_tel">
                                                </div>
                                            </div>
                                            
                                            <div class="field-modal field-endereco">
                                                <div class="label-modal label-endereco">
                                                    <h3>Endereço</h3>
                                                </div>
                                                <div class="data data-endereco">
                                                    <input type="text" class="form-control" v-model="e_end">
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                    <div align="center">
                                        <button type="button" class="modal-default-button" @click="enviarDados"> Alterar Dados </button> 
                                        <button type="button" class="cancel" @click="cancelarAlt"> Cancelar </button>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
</template>

<script>
    export default {
        name: 'PerfilView',
        data() {
            return {
                nome:"",
                nasc:"",
                cpf:"",
                email:"",
                tel:"",
                end:"",
                senha:"",
                cep:"",
                e_tel:"",
                e_end:"",
                e_nome:"",
                e_senha:"",
                e_cep:"",
                myModal:""
            }
        },

        created() {
            this.getAccountInformation();
        },

        methods:{
            openModal(){
                this.myModal = true;
            },

            async enviarDados(){

                let accountId = this.$cookies.get("account_id");

                let req = JSON.stringify({
                    nome: this.e_nome,
                    senha: this.e_senha,
                    tel: this.e_tel,
                    endereco: this.e_end,
                    cep: this.e_cep,
                })

                try{
                    let resp = await fetch("http://localhost:3000/clients/" + accountId, {
							method: 'PUT',
							headers: { 'Content-Type': 'application/json' },
							body: req
						});

                    let resp_json = await resp.json();
                    alert(resp_json.message);
                } catch(e){
                    alert('Error:' + e);
                }

                this.getAccountInformation();
                this.myModal = false;
            },

            cancelarAlt(){
                this.e_nome = this.nome;
                this.e_end = this.endereco;
                this.e_tel = this.tel;	
                this.e_senha = this.senha;	
                this.e_cep = this.cep;
                this.myModal = false;
            },

            async getAccountInformation() {
                let accountId = this.$cookies.get("account_id");
                console.log(accountId);
                if (accountId == null) {
                    alert("Você precisa estar logado para acessar esta página.");
                    this.$router.push('/login')
                }
                else {
                    let resp = await fetch("http://localhost:3000/clients/"+accountId, { 
                        method: 'GET', 
                        headers: { 'Content-Type': 'application/json' }
                    });
                    let resp_json = await resp.json();

                    this.nome = resp_json.nome;
                    this.cpf = resp_json.cpf;
                    this.nasc = resp_json.nasc;
                    this.cep = resp_json.cep;
                    this.email = resp_json.email;
                    this.senha = resp_json.senha
                    this.end = resp_json.endereco;
                    this.tel = resp_json.tel;	
                    this.e_nome = resp_json.nome;
                    this.e_cep = resp_json.cep;
                    this.e_end = resp_json.endereco;
                    this.e_tel = resp_json.tel;	
                    this.e_senha = resp_json.senha;		
                }
            }
        }
    }
</script>


<style scoped>
    @import '/src/assets/css/perfil.css';
    @import '/src/assets/css/modal.css';
</style>

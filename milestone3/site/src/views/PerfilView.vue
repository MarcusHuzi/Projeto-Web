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
                                    <div class="form-group">
                                        <div class="left-column-modal">
                                            <div class="field-modal field-nome">
                                                <div class="label-modal label-nome">
                                                    <h3>Nome</h3>
                                                </div>
                                                <div class="data data-nome">
                                                    <input type="text" class="form-control" v-model="e_nome">
                                                </div>
                                            </div>
                                            <div class="field-modal field-senha">
                                                <div class="label-modal label-senha">
                                                    <h3>Senha</h3>
                                                </div>
                                                <div class="data data-senha">
                                                    <input type="text" class="form-control" v-model="e_senha">
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
                senha:"",
                cpf:"",
                email:"",
                tel:"",
                end:"",
                e_tel:"",
                e_end:"",
                e_nome:"",
                e_senha:"",
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

            enviarDados(){
                this.nome = this.e_nome;
                this.senha = this.e_senha;
                this.tel = this.e_tel;
                this.end = this.e_end;
                this.myModal = false;
                alert("Dados alterados");
            },

            cancelarAlt(){
                this.e_end = this.end;
                this.e_nome = this.nome;
                this.e_senha = this.senha;
                this.e_tel = this.tel;
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
                    this.email = resp_json.email;
                    this.end = resp_json.endereco;
                    this.tel = resp_json.tel;			
                }
            }
        }
    }
</script>


<style scoped>
    @import '/src/assets/css/perfil.css';
    @import '/src/assets/css/modal.css';
</style>

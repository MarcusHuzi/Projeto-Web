<template>
    <div class="content-perfil">
        <div class="sub-header">
            <h1 class="profile-title"><b>Perfil do Usuário</b></h1>
            <h2 class="profile-path"><b>Home > Meu Perfil</b></h2>
        </div>
        <div class="line top-line">
            <hr/>
        </div>
        <div class="personal-info">
            <div class="left-column">
                <div class="field field-nome">
                    <div class="label label-nome">
                        <h3>Nome</h3>
                    </div>
                    <div class="data data-nome">
                        <div class="dados"><span>{{nome}}</span></div>
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
                <div class="field field-sobrenome">
                    <div class="label label-sobrenome">
                        <h3>Sobrenome</h3>
                    </div>
                    <div class="data data-sobrenone">
                        <div class="dados"><span>{{sobrenome}}</span></div>
                    </div>
                </div>
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

        <div class="lista-pedidos">

            <h3> Pedidos </h3>
            <hr/>

            <ul class="pedidos">
                <li class="info-pedido">
                    <div class="id">
                        <label> ID: </label>
                        <span> 7798 </span>
                    </div>
                    <div class="data">
                        <label> Data: </label>
                        <span> 05/07/22 </span>
                    </div>
                    <div class="status">
                        <label>Status:</label>
                        <span> Entregue </span>
                    </div>

                </li>
            </ul>

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
                                            <div class="field-modal field-sobrenome">
                                                <div class="label-modal label-sobrenome">
                                                    <h3>Sobrenome</h3>
                                                </div>
                                                <div class="data data-sobrenome">
                                                    <input type="text" class="form-control" v-model="e_sobrenome">
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
            data(){
                return{
                    nome:"",
                    sobrenome:"",
                    cpf:"",
                    email:"",
                    tel:"",
                    end:"",
                    e_tel:"",
                    e_end:"",
                    e_nome:"",
                    e_sobrenome:"",
                    myModal:false,
                }
            },
            methods:{
                openModal(){
                    this.myModal = true;
                },

                enviarDados(){
                    this.nome = this.e_nome;
                    this.sobrenome = this.e_sobrenome;
                    this.tel = this.e_tel;
                    this.end = this.e_end;
                    this.myModal = false;
                    alert("Dados alterados");
                },

                cancelarAlt(){
                    this.e_end = this.end;
                    this.e_nome = this.nome;
                    this.e_sobrenome = this.sobrenome;
                    this.e_tel = this.tel;
                    this.myModal = false;
                }
            }
    }
</script>


<style scoped>
    @import '/src/assets/css/perfil.css';
    @import '/src/assets/css/modal.css';
</style>

<template>
    
    <div class="content_login">
        <div class="login-form">
            <h1 id="login-form-title">LOGIN</h1>

            <div class="email-field">
                <p id="email-label">Email</p>
                <input class="email-input" type="email" name="email" autocomplete="on" placeholder="Seu e-mail aqui" v-model="email">
            </div>
                    
            <div class="senha-field">
                <p id="senha-label">Senha</p>
                <input type="password" name="senha" maxlength="26" v-model="password" placeholder="Sua senha aqui">
            </div>

            <div class="entrar-field">
                <input id="entrar-btn" type="submit" value="Entrar" @click="login()">
            </div>

            <div class="create-account-field">
                <p id="create-account-text"> Não tem um cadastro? <router-link to="/cadastro">Crie uma conta</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginView',
        data() {
            return {
                email: "",
                password: ""
            }
        },

        methods: {
            login: async function() {
                if(this.email != "" && this.password != "") {
                    try {
						const req_body = JSON.stringify({
                            password: this.password,
							email: this.email
						});	

						let resp = await fetch("http://localhost:3000/clients/ck_email"+this.email, { 
                            method: 'POST', 
                            body: req_body,
                            headers: { 'Content-Type': 'application/json' }
                        });

                        if (resp.status === 201) {
                            alert("usuario valido");
                        }
                        else {
                            alert("usuario invalido");
                        }
                    }
                    catch(e) {
                        alert("Erro na verificação do login");
                    }
                }
                else {
                    alert("Preencha os campos de Email e Senha");
                }
            }
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/login.css';
</style>
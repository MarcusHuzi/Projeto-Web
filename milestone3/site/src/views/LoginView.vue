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

                // verifica se algum dos campos foi deixado em branco
                if(this.email != "" && this.password != "") {
                    try {

                        // get
						let resp = await fetch("http://localhost:3000/clients/ck_email/"+this.email, { 
                            method: 'GET', 
                            headers: { 'Content-Type': 'application/json' }
                        })
                        // pegando o body do request
                        console.log(resp.status);
                        console.log(resp);
                        let resp_json = await resp.json();


                        // logado com sucesso
                        if (this.password == resp_json.senha && this.email == resp_json.email) {
                            alert(`Bem vindo ${resp_json.nome}!`);
                            this.$cookies.set("account_id", resp_json._id);
                            window.location.href = "/";
                        }

                        // apenas o email inserido corretamente
                        else if (this.email == resp_json.email) {
                            alert("Senha incorreta");
                        }

                        // email nao existe
                        else {
                            alert("Conta inexistente");
                        }
                    }
                    catch(e) {
                        console.log(e);
                        alert("Erro durante o Login");
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
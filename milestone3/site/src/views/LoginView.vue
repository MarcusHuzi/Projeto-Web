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
                    // get
                    let resp = await fetch("http://localhost:3000/clients");   
                    let accounts = await resp.json();
                
                    let logged = false;
                    for (let account of accounts) {
                        console.log(account);
                        console.log(account.email);
                        console.log(account.senha);
                        console.log(this.email);
                        console.log(this.password);
                        if (account.email == this.email && account.senha == this.password) {
                            logged = true;
                            this.$cookies.set("account_id", account._id);
                            window.location.href = "/perfil-cliente";
                            break;
                        }
                    }

                    if (logged == false) {
                        this.password = "";
                        alert("Email ou senha incorreta!");
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
<template>
    
    <div class="content_login">
        <div class="login-form">
            <h1 id="login-form-title">LOGIN</h1>

            <div class="email-field">
                <p id="email-label">Email</p>
                <input class="email-input" type="email">
            </div>
                    
            <div class="senha-field">
                <p id="senha-label">Senha</p>
                <input type="password" name="username">
            </div>

            <div class="entrar-field">
                <input id="entrar-btn" type="submit" value="Entrar">
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
    }
</script>

<style scoped>
    @import '/src/assets/css/login.css';
</style>
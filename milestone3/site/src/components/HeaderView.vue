<template>
    <header>
        <div class="navbar">
            <router-link to="/">
                <img src="@/assets/image/navbar-icons/logo.png" class="logo">
            </router-link>


            <div class="navbar-icons">
                <ul>
                    <li>
                        <router-link to="/areaAdmin">
                            <span class="adm"> Adm </span>
                        </router-link>
                    </li> 
                    <li>
                        <router-link to="/cadastro">
                            <span class="signup"> Cadastro </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/carrinho">
                            <img src="@/assets/image/navbar-icons/kart.png" class="kart"> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/listacompras">
                            <img src="@/assets/image/navbar-icons/shop-list.png" class="shoplist">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/perfil">
                            <img src="@/assets/image/navbar-icons/profile.png" class="profile"> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/login">
                             <span class="adm" @click="logout()">{{this.$cookies.get("header_label")}} </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderView',
        methods: {
            async logout() {
                // caso usuario logado
                if (this.$cookies.get('account_id') != null) {
                    alert("Volte sempre!");
                    // limpando os cookies
                    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                }
                else {
                    this.$cookies.set("header_label", "Login");
                }
            }
        }
    }
</script>
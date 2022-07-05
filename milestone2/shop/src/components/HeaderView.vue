<template>
    <header>
        <div class="navbar">
                    <router-link to="/">
                        <img src="@/assets/image/navbar-icons/logo.png" class="logo">
                    </router-link>
        
                    <div class="searchbar">
                        <input type="text" placeholder="Busque por produtos aqui...">
                    </div>

                    <div class="navbar-icons">
                        <router-link to="/login">
                            <img src="@/assets/image/navbar-icons/login.png" class="login"> 
                        </router-link>
                        <router-link to="/carrinho">
                            <img src="@/assets/image/navbar-icons/kart.png" class="kart"> 
                        </router-link>
                        <router-link to="/listacompras">
                            <img src="@/assets/image/navbar-icons/shop-list.png" class="shoplist">
                        </router-link>
                        <router-link to="/perfil">
                            <img src="@/assets/image/navbar-icons/profile.png" class="profile"> 
                        </router-link>
                    </div>
                </div>
        </header>
</template>

<script>
    export default {
    name: 'HeaderView',
    }
</script>
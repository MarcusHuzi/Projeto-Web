<template>
    <header>
        <div class="navbar">
                    <a href="home.html">
                        <img src="@/assets/image/navbar-icons/logo.png" class="logo">
                    </a>
        
                    <div class="searchbar">
                        <input type="text" placeholder="Busque por produtos aqui...">
                    </div>

                    <div class="navbar-icons">
                        <a href="login.html">
                            <img src="@/assets/image/navbar-icons/login.png" class="login"> 
                        </a>
                        <a href="carrinho.html">
                            <img src="@/assets/image/navbar-icons/kart.png" class="kart"> 
                        </a>
                        <a href="listaCompras.html">
                            <img src="@/assets/image/navbar-icons/shop-list.png" class="shoplist">
                        </a>
                        <a href="perfil.html">
                            <img src="@/assets/image/navbar-icons/profile.png" class="profile"> 
                        </a>
                    </div>
                </div>
        </header>
</template>

<script>
export default {
  name: 'HeaderView',
}
</script>

<style>
    @import '/src/assets/css/style.css';
</style>
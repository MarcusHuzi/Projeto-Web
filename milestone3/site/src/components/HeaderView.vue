<template>
    <header>
        <div class="navbar">
            <router-link to="/">
                <img src="@/assets/image/navbar-icons/logo.png" class="logo">
            </router-link>


            <div class="navbar-icons">
                <ul>
                    <li v-if="!$store.state.user_authenticated">
                        <router-link to="/login">
                             <span class="adm"> Login </span>
                        </router-link>
                    </li>
                    <li v-if="!$store.state.user_authenticated">
                        <router-link to="/cadastro">
                            <span class="signup"> Sign up </span>
                        </router-link>
                    </li>
                    <li v-if="$store.state.user_authenticated && !$store.state.is_admin">
                        <router-link to="/carrinho">
                            <img src="@/assets/image/navbar-icons/kart.png" class="kart"> 
                        </router-link>
                    </li>
                    <li v-if="$store.state.user_authenticated && !$store.state.is_admin">
                        <router-link to="/listacompras">
                            <img src="@/assets/image/navbar-icons/shop-list.png" class="shoplist">
                        </router-link>
                    </li>
                    <li v-if="$store.state.user_authenticated">
                        <router-link to="/perfil">
                            <img src="@/assets/image/navbar-icons/profile.png" class="profile"> 
                        </router-link>
                    </li>
                    <li v-if="$store.state.is_admin">
                        <router-link to="/areaAdmin">
                            <span class="adm"> Adm </span>
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
    }
</script>
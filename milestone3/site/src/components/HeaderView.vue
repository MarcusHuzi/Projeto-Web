<template>
    <header>
        <div class="navbar">
            <router-link to="/">
                <img src="@/assets/image/navbar-icons/logo.png" class="logo">
            </router-link>


            <div class="navbar-icons">
                <ul>
                    <li  v-if="logged == false" >
                        <router-link to="/login">
                             <span class="login"> Login </span>
                        </router-link>
                    </li>
                    <li v-if="logged == false">
                        <router-link to="/cadastro">
                            <span class="signup"> Cadastro </span>
                        </router-link>
                    </li>
                    <li v-if="logged == true && isAdm == false">
                        <router-link to="/carrinho">
                            <img src="@/assets/image/navbar-icons/kart.png" class="kart"> 
                        </router-link>
                    </li>
                    <li v-if="logged == true && isAdm == false">
                        <router-link to="/listacompras">
                            <img src="@/assets/image/navbar-icons/shop-list.png" class="shoplist">
                        </router-link>
                    </li>
                    <li v-if="isAdm == true">
                        <router-link to="/areaAdmin">
                            <span class="adm"> Admin </span>
                        </router-link>
                    </li>
                    <li v-if="logged == true">
                        <router-link to="/perfil">
                            <img src="@/assets/image/navbar-icons/profile.png" class="profile"> 
                        </router-link>
                    </li>
                    <li  v-if="logged == true">
                        <a @click="logout()">
                             <span class="logout"> Sair </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderView',

    data() {
        return{
            logged: false,
			isAdm: false,
        };
    },
    created(){
        this.isLogged();
    },
    methods: {
        async isLogged(){
            let accountId = this.$cookies.get("account_id");
			this.logged = false;
			if (accountId != null) {
                this.logged = true;
                let response = await fetch("http://localhost:3000/clients/" + accountId);
				let account = await response.json();
				this.isAdm = account.isAdm;
            } 
        },
        logout() {
			this.$cookies.remove("account_id");
            this.$cookies.set("shopping_cart", null)
			window.location.href = "/";
		},
    }
}
</script>
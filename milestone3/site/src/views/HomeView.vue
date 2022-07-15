<template>
    <div class="content-home">
        <h1 class="homepage-title"><b>CATEGORIAS</b></h1>
        <div class="category-box">
            <div class="column left-column">
                <div class="category bebidas">
                    <router-link to="/listaprodutos/bebidas">
                        <img class="category-img" src="@/assets/image/homepage-categories/bebidas.png">
                    </router-link>
                    <h2 class="label">Bebidas</h2>
                </div>
                <div class="category congelados">
                    <router-link to="/listaprodutos/congelados">
                        <img class="category-img" src="@/assets/image/homepage-categories/congelados.png">
                    </router-link>
                    <h2 class="label">Congelados</h2>
                </div>
                <div class="category higiene">
                    <router-link to="/listaprodutos/higiene">
                        <img class="category-img" src="@/assets/image/homepage-categories/higiene.png">
                    </router-link>
                    <h2 class="label">Higiene</h2>
                </div>
            </div>
            <div class="column center-column">
                <div class="category hortifruti">
                    <router-link to="/listaprodutos/hortifruti">
                        <img class="category-img" src="@/assets/image/homepage-categories/hortifruti.png">
                    </router-link>
                    <h2 class="label">Hortifruti</h2>
                </div>
                <div class="category enlatados">
                    <router-link to="/listaprodutos/enlatados">
                        <img class="category-img" src="@/assets/image/homepage-categories/enlatados.png">
                    </router-link>
                    <h2 class="label">Enlatados</h2>
                </div>
                <div class="category limpeza">
                    <router-link to="/listaprodutos/limpeza">
                        <img class="category-img" src="@/assets/image/homepage-categories/limpeza.png">
                    </router-link>
                    <h2 class="label">Limpeza</h2>
                </div>
            </div>
            <div class="column center-column">
                <div class="category laticinios">
                    <router-link to="/listaprodutos/laticinios">
                        <img class="category-img" src="@/assets/image/homepage-categories/laticinios.png">
                    </router-link>
                    <h2 class="label">Laticínios</h2>
                </div>
                <div class="category cereais">
                    <router-link to="/listaprodutos/cereais">
                        <img class="category-img" src="@/assets/image/homepage-categories/cereais.png">
                    </router-link>
                    <h2 class="label">Cereais</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'HomeView',
    }
</script>

<style scoped>
    @import '/src/assets/css/home.css';
</style>
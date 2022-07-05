<template>
    <div class="content_home">
                <h1 class="titulo_home">Categorias</h1>
            
                <div class="first-row">
                    <ul class="categorias">
                        <li>
                            <img src="@/assets/image/homepage-categories/bebidas.png">
                        </li>
                        <li>
                            <img src="@/assets/image/homepage-categories/cereais.png">
                        </li>
                        <li>
                            <img src="@/assets/image/homepage-categories/congelados.png">
                        </li>
                    </ul>
                </div>

                <div class="first-row-titles">
                    <ul class="categorias">
                        <li>
                            <h2>Bebidas</h2>
                        </li>
                        <li>
                            <h2>Hortifruti</h2>
                        </li>
                        <li>
                            <h2>Laticínios</h2>
                        </li>
                    </ul>
                </div>

                <div class="second-row">
                    <ul>
                        <li>
                            <img src="@/assets/image/homepage-categories/enlatados.png">
                        </li>
                        <li>
                            <img src="@/assets/image/homepage-categories/higiene.png">
                        </li>
                        <li>
                            <img src="@/assets/image/homepage-categories/hortifruti.png">
                        </li>
                    </ul>

                </div>

                <div class="second-row-titles">
                    <ul class="categorias">
                        <li>
                            <h2>Congelados</h2>
                        </li>
                        <li>
                            <h2>Enlatados</h2>
                        </li>
                        <li>
                            <h2>Cereais</h2>
                        </li>
                    </ul>
                </div>


                <div class="third-row">
                    <ul>
                        <li>
                            <img src="@/assets/image/homepage-categories/laticinios.png">
                        </li>
                        <li>
                            <img src="@/assets/image/homepage-categories/limpeza.png">
                        </li>
                        <li>
                            <img src="@/assets/image/homepage-categories/promocao.png">
                        </li>
                    </ul>
                </div>

                <div class="third-row-titles">
                    <ul class="categorias">
                        <li>
                            <h2>Higiene</h2>
                        </li>
                        <li>
                            <h2>Limpeza</h2>
                        </li>
                        <li>
                            <h2>Promoções</h2>
                        </li>
                    </ul>
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
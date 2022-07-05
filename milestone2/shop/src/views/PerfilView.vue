<template>
    <div class="content_perfil">
                <div class="titulo_perfil">
                    <h1>Perfil do Usuário</h1>  
                    <h2>Home > Meu Perfil</h2>
                    <hr/>
                </div>


                <div id="info">

                    <img src="@/assets/image/icons/prof-pic.png" class="foto">

                    <div id="campos">

                        <div id="esq">
                            <div id="div_nome" class="form">
                                <h3> Nome </h3>
                                <div class="dados"><span></span></div>
                            </div>

                            <div id="div_cpf" class="form">
                                <h3> CPF </h3>
                                <div class="dados"><span></span></div>
                            </div>
                            
                            <div id="div_tel" class="form">
                                <h3> Telefone </h3>
                                <div class="dados"><span></span></div>
                            </div>

                        </div>
                        <div id="dir">
                            <div id="div_sobre" class="form">
                                <h3> Sobrenome </h3>
                                <div class="dados"><span></span></div>
                            </div>

                            <div id="div_email" class="form">
                                <h3> Email </h3>
                                <div class="dados"><span></span></div>
                            </div>

                            <div id="div_end" class="form">
                                <h3> Endereço </h3>
                                <div class="dados"><span></span></div>
                            </div>
                        </div>
                    </div>
                    
                    <button id="edit"> Editar perfil </button>
                    <hr/>
                </div>
            </div>
</template>

<script>
        export default {
        name: 'PerfilView',
    }
</script>


<style>
    @import '/src/assets/css/style.css';
    @import '/src/assets/css/reset.css';
    @import '/src/assets/css/perfil.css';
</style>

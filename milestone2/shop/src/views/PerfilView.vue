<template>
    <div class="content-perfil">
        <div class="sub-header">
            <h1 class="profile-title"><b>Perfil do Usuário</b></h1>
            <h2 class="profile-path"><b>Home > Meu Perfil</b></h2>
        </div>
        <div class="line top-line">
            <hr/>
        </div>
        <div class="personal-info">
            <div class="left-column">
                <div class="field field-nome">
                    <div class="label label-nome">
                        <h3>Nome</h3>
                    </div>
                    <div class="data data-nome">
                        <input type="text" value="teste">
                    </div>
                </div>
                <div class="field field-cpf">
                    <div class="label label-cpf">
                        <h3>CPF</h3>
                    </div>
                    <div class="data data-cpf">
                        <input type="text" value="teste">
                    </div>
                </div>
                <div class="field field-telefone">
                    <div class="label label-telefone">
                        <h3>Telefone</h3>
                    </div>
                    <div class="data data-telefone">
                        <input type="text" value="teste">
                    </div>
                </div>
            </div>
            <div class="right-column">
                <div class="field field-sobrenome">
                    <div class="label label-sobrenome">
                        <h3>Sobrenome</h3>
                    </div>
                    <div class="data data-sobrenone">
                        <input type="text" value="teste">
                    </div>
                </div>
                <div class="field field-endereco">
                    <div class="label label-endereco">
                        <h3>Endereco</h3>
                    </div>
                    <div class="data data-endereco">
                        <input type="text" value="teste">
                    </div>
                </div>
                <div class="field field-email">
                    <div class="label label-email">
                        <h3>Email</h3>
                    </div>
                    <div class="data data-email">
                        <input type="text" value="teste">
                    </div>
                </div>
            </div>
        </div>
        <div class="saveChanges">
            <button class="saveChanges-btn">Confirmar alterações</button>
        </div>
        <div class="line bottom-line">
            <hr/>
        </div>
    </div>
</template>

<script>
        export default {
        name: 'PerfilView',
    }
</script>


<style scoped>
    @import '/src/assets/css/perfil.css';
</style>

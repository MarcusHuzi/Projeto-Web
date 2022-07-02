<template>
     <div class="content">
                <div class="titulo">
                    <h1>Carrinho</h1>
                    <h2>Home > Carrinho</h2>
                    <hr/>
                </div>

                <div class="produtos">
                    <ul>
                        <prod-content @emit-price="updatePrice"></prod-content>
                    </ul>
                </div>

                <div class="botoes">
                    <button class="salvar-lista">
                        <h1>Salvar lista para compras futuras</h1>
                    </button>
                    <div class="botoes-compra">
                        <button class="finalizar-compra">
                            <h1>Finalizar compra</h1>
                        </button>
                        <div class="total-compra">
                            <h1>Preço Total</h1>
                            <div class="preco-box">
                                <h2>R$ {{ price.toFixed(2) }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        name: 'CarrinhoView',
    }
</script>

<style>
    @import '/src/assets/css/style.css';
    @import '/src/assets/css/reset.css';
    @import '/src/assets/css/carrinho.css';
</style>
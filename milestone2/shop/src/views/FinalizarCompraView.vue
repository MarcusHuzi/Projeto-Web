<template>
    <div class="content_finalizar">
        <div class="titulo_finalizar">
            <h1>Finalizar Compra</h1>
            <h2>Home > Carrinho > Finalizar Compra</h2>
            <hr/>
        </div>

        <div class="content">

            <div class="pagamento">
                <h2>Dados do Titular do Cartão</h2>
                <hr/>

                <div class="field field-num">
                    <div class="label label-num">
                        <h3>Número do Cartão</h3>
                    </div>
                    <div class="data data-num">
                        <input type="text" class="form-control"/>
                    </div>
                </div>

                <div class="field-val_cvv">
                    <div class="val">
                        <div class="label label-val">
                            <h3>Validade</h3>
                        </div>
                        <div class="data data-val">
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="cvv">
                        <div class="label label-cvv">
                            <h3>CVV</h3>
                        </div>
                        <div class="data data-cvv">
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                </div>


                <div class="field field-nome">
                    <div class="label label-nome">
                        <h3>Nome Completo</h3>
                    </div>
                    <div class="data data-nome">
                        <input type="text" class="form-control"/>
                    </div>
                </div>

                <div class="field field-cpf">
                    <div class="label label-cpf">
                        <h3>CPF</h3>
                    </div>
                    <div class="data data-cpf">
                        <input type="text" class="form-control"/>
                    </div>
                </div>

                <div class="field field-tel">
                    <div class="label label-tel">
                        <h3>Telefone</h3>
                    </div>
                    <div class="data data-tel">
                        <input type="text" class="form-control"/>
                    </div>
                </div>

                <div class="field field-nasc">
                    <div class="label label-nasc">
                        <h3>Data de Nascimento</h3>
                    </div>
                    <div class="data data-nasc">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
            
            </div>

            <div class="pedido">

                <h2> Resumo do Pedido</h2>
                <hr/>
                <h3> Itens do Pedido</h3>
                <ul class="itens">
                    <li class="item">
                        <span class="nome"> refrigerante </span>
                        <span class="quant"> 1 </span>
                        <span class="valor">10,00</span>
                    </li>
                    <li class="item">
                        <span class="nome"> dadasdasd </span>
                        <span class="quant"> 1 </span>
                        <span class="valor">10,00</span>
                    </li>
                    <li class="item">
                        <span class="nome"> zzzzzz </span>
                        <span class="quant"> 1 </span>
                        <span class="valor">10,00</span>
                    </li>
                    <li class="item">
                        <span class="nome"> rrrrrrr </span>
                        <span class="quant"> 1 </span>
                        <span class="valor">10,00</span>
                    </li>
                    
                </ul>

                <h3> Forma de Pagamento </h3>
                <hr/>

                <div class="select_pagamento">
                    <select name="form_pagamento" list="lista-pagamento" class="selecionar">
                        <optgroup id="lista-pagamento">
                            <option value="credito" selected class="option"> Crédito </option>
                            <option value="debito" class="option"> Débito </option>
                        </optgroup>
                    </select>


                    <div class="valor">
                    </div>

                </div>

                <button class="btn-pagar"> Pagar </button>
        
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FinalizarCompraView',
    }
</script>

<style scoped>
    @import '/src/assets/css/finalizarCompra.css';
</style>
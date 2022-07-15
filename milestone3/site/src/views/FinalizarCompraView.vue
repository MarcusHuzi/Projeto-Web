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
                            <input type="month" class="form-control"/>
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
                        <input type="date" class="form-control"/>
                    </div>
                </div>
            
            </div>

            <div class="pedido">

                <h2> Pedido</h2>
                <hr/>

                    <div class="valor-total">
                        <label>Valor Total:</label>
                         <span class="preco"> R$ {{valor}}</span>
                    </div>

                <h3> Forma de Pagamento </h3>
                <hr/>

                <div class="select_pagamento">
                    <select name="form_pagamento" list="lista-pagamento" class="selecionar">
                        <optgroup id="lista-pagamento">
                            <option value="credito" selected class="option"> Crédito </option>
                            <option value="debito" class="option"> Débito </option>
                        </optgroup>
                    </select>


                </div>

                <button type="button" class="btn-pagar" @click="validate()"> Pagar </button>
        
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FinalizarCompraView',

        data(){
            return{
                cpf:"",
                num:"",
                val:"",
                tel:"",
                valor: null,
                form:"",
                nasc:"",
                nome:""
            }
        },

        created(){
            this.calcPreco();
        },

        methods:{
            validate(){
                if(this.num ==""){
                    alert("Preencha o campo Número do Cartão");
                    return;
                }

                if(this.val == ""){
                   alert("Preencha o campo Validade");
                   return;
                }

                if(this.cvv == ""){
                   alert("Preencha o campo CVV");
                   return;
                }

                if(this.nome == ""){
                   alert("Preencha o campo Nome Completo");
                   return;
                }

                if(this.cpf == ""){
                   alert("Preencha o campo CPF");
                   return;
                }

                if(this.tel == ""){
                   alert("Preencha o campo Telefone");
                   return;
                }

                if(this.nasc == ""){
                   alert("Preencha o campo Data de Nascimento");
                   return;
                }

                alert("Compra realizada!!")

            },

            async calcPreco(){
                this.valor = 0;
                
                let cart = JSON.parse(this.$cookies.get("shopping_cart"));
                if (cart == null) cart = [];
            
                for (let item of cart) {
                    let response = await fetch(
                        "http://localhost:3000/products/" + item.id
                    );
                    let product = await response.json();
                    this.valor += item.quantity * product.price;
    
                }
            }
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/finalizarCompra.css';
</style>
<template>
    <div class="content_finalizar">
        <div class="titulo_finalizar">
            <h1>Finalizar Compra</h1>
            <h2><router-link to="/">Home</router-link> > <router-link to="/carrinho">Carrinho</router-link> > Finalizar Compra</h2>
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
                        <input type="text" class="form-control" v-model="num"/>
                    </div>
                </div>

                <div class="field-val_cvv">
                    <div class="val">
                        <div class="label label-val">
                            <h3>Validade</h3>
                        </div>
                        <div class="data data-val">
                            <input type="month" class="form-control" v-model="val"/>
                        </div>
                    </div>
                    <div class="cvv">
                        <div class="label label-cvv">
                            <h3>CVV</h3>
                        </div>
                        <div class="data data-cvv">
                            <input type="text" class="form-control" v-model="cvv"/>
                        </div>
                    </div>
                </div>


                <div class="field field-nome">
                    <div class="label label-nome">
                        <h3>Nome Completo</h3>
                    </div>
                    <div class="data data-nome">
                        <input type="text" class="form-control" v-model="nome"/>
                    </div>
                </div>

                <div class="field field-cpf">
                    <div class="label label-cpf">
                        <h3>CPF</h3>
                    </div>
                    <div class="data data-cpf">
                        <input type="text" class="form-control" v-model="cpf"/>
                    </div>
                </div>

                <div class="field field-tel">
                    <div class="label label-tel">
                        <h3>Telefone</h3>
                    </div>
                    <div class="data data-tel">
                        <input type="text" class="form-control" v-model="tel"/>
                    </div>
                </div>

                
            
            </div>

            <div class="pedido">

                <h2> Pedido</h2>
                <hr/>

                    <div class="valor-total">
                        <label>Valor Total:</label>
                         <span class="preco"> R$ {{valor.toFixed(2)}}</span>
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
                cvv:"",
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
            async validate(){
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

                let cart = JSON.parse(this.$cookies.get("shopping_cart"));
                if (cart == null) cart = [];

                for (let item of cart) {
                
                    let resp = await fetch(
                        "http://localhost:3000/products/" + item.slug
                    );
                    let resp_json = await resp.json();


                    let req = JSON.stringify({
                        in_stock: resp_json.in_stock - item.quantity,
                        sold: resp_json.sold + item.quantity
                    });
                    
                    try{
                        let update = await fetch("http://localhost:3000/products/" + resp_json._id,{
                            method: "PUT",
                            headers: { 'Content-Type': 'application/json' },
							body: req
                        });

                        let update_json = await update.json();
                        console.log(update_json.message);
                    } catch(e){
                        alert("Error:" + e)
                        return;
                    }
    
                }

                this.$cookies.set("shopping_cart", null)
                alert("Compra realizada!!")
                this.$router.push('/')

            },

            async calcPreco(){
                this.valor = 0;
                
                let cart = JSON.parse(this.$cookies.get("shopping_cart"));
                if (cart == null) cart = [];

                
                for (let item of cart) {

                
                    let resp = await fetch(
                        "http://localhost:3000/products/" + item.slug
                    );
                    let resp_json = await resp.json();
                    this.valor += item.quantity * resp_json.price;
    
                }
            }
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/finalizarCompra.css';
</style>
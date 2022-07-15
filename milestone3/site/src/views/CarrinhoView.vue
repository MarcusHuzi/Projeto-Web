<template>
     <div class="content_carrinho">
        <div class="titulo_carrinho">
            <h1>Carrinho</h1>
            <h2><router-link to="/">Home</router-link> > Carrinho</h2>
            <hr/>
        </div>

        <div class="produtos">
            <ul>
                <cart-products @emit-price="updatePrice"></cart-products>
            </ul>
        </div>

        <div class="botoes">
            <button v-on:click="saveCartToList()" class="salvar-lista">
                <h1>Salvar lista para compras futuras</h1>
            </button>
            <div class="botoes-compra">
                <router-link to="/finalizarcompra">
                    <button class="finalizar-compra">
                        <h1>Finalizar compra</h1>
                    </button>
                </router-link>
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

    import CartProducts from "../components/CartProducts.vue"

    export default {
        name: 'CarrinhoView',
        components: {
            CartProducts
        },
        data() {
            return {
                price: 0
            }
        },
        methods: {
            updatePrice(newValue) {
                this.price = newValue
            },
            async saveCartToList(){
                let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                if (cart == null || cart.length == 0) {
                    alert("Carrinho vazio")
                    return
                }

                // Pegando email do usuario
                let accountId = this.$cookies.get("account_id")
                let email
                try {
                    let resp = await fetch("http://localhost:3000/clients/" + accountId)
                    resp = await resp.json()
                    email = resp.email
                } catch(e) {
                    alert("Error " + e)
                }
                

                let products = []
                for (let item of cart) {
                    products.push({
                        slug: item.slug,
                        quant: item.quantity
                    })
                }

                let listName = prompt("Como deseja nomear sua lista?")

                let newList = {
                    user: email,
                    nome: listName,
                    products: products
                }

                try {
                    
                    await fetch("http://localhost:3000/lists", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newList)
                    })
                    alert("Lista salva com sucesso")
                } catch(e) {
                    alert("Error " + e)
                }
            }
        }
    }
</script>

<style scoped>
    @import '/src/assets/css/carrinho.css';
</style>
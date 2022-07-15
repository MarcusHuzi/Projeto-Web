<template id="product-box-template">
    <li v-for="(product, index) in products" :key="index">
        <div class="product-box">
            <div class="prod-details">
                <div class="prod-imagem-box">
                    <img :src="getImgUrl(product.image_src)" :alt="product.img_alt" class="prod-imagem">
                </div>
                <h2>{{ product.title }}</h2>
            </div>
            <div class="prod-quantity">
                <input type="number" v-model="product.quantity" v-on:input="validateInput(index)" min="0" max="999">
                <h2>R$ {{ (product.quantity * product.price).toFixed(2) }}</h2>
                <button v-on:click="removeFromCart(index)" class="removeItemButton"> 
                    <img src="@/assets/image/icons/delete.png">
                </button>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "CartProducts",
        data() {
            return {
                products: []
            }
        },
        created() {
            this.loadCart()
        },
        computed: {
            fullPrice() {
                let price = 0
                for (let product of this.products){
                    price += product.price * product.quantity
                }
                return price
            }
        },
        watch: {
            fullPrice(newValue) {
                this.$emit('emit-price', newValue)
            }
        },
        emits: ['emit-price'],
        methods: {
            getImgUrl(url){
                try {
                    let str = require('@/assets/' + url)
                    return str
                }
                catch {
                    return ""
                }
            },
            validateInput(index){
                let prod = this.products[index]
                if (prod.quantity <= 1){
                    prod.quantity = 1
                }
                else if (prod.quantity > prod.in_stock){
                    alert("Quantidade máxima em estoque atingida")
                    prod.quantity = prod.in_stock
                }

                this.updateCart(index)
            }, 
            removeFromCart(index) {
                let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                if (cart == null) cart = []

                let prod = this.products[index]
                for (let i = 0; i < cart.length; i++){
                    if (cart[i].slug == prod.slug){
                        cart.splice(i, 1)
                        break
                    }
                }

                this.$cookies.set("shopping_cart", JSON.stringify(cart))

                this.products.splice(index, 1)
            },
            async loadCart() {
                let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                if (cart == null) {
                    this.products = []
                    return  
                } 

                for (let item of cart) {
                    try {
                        let prod = await fetch("http://localhost:3000/products/" + item.slug);
                        prod = await prod.json()

                        this.products.push({
                            slug: prod.slug,
                            title: prod.title,
                            description: prod.description,
                            price: prod.price,
                            in_stock: prod.in_stock,
                            image_src: prod.image_src,
                            image_alt: prod.image_alt,
                            quantity: item.quantity
                        })
                    } catch(e) {
                        alert("Error: " + e);
                    }
                }
            },
            updateCart(index){
                let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                if (cart == null) cart = []
                
                let prod = this.products[index]
                for (let i = 0; i < cart.length; i++){
                    if (cart[i].slug == prod.slug){
                        cart[i].quantity = prod.quantity
                        break
                    }
                }

                this.$cookies.set("shopping_cart", JSON.stringify(cart))
            },
        }
    }

</script>

<style scoped>

    .product-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 800px;
        height: 120px;
        background-color: var(--cinza);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 0px 20px 0px 20px;
    }

    .prod-imagem-box {
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
    }

    .prod-imagem-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .prod-imagem {
        height: 100px;
    }

    .prod-details {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
    }

    .prod-details h2 {
        max-width: 400px;
    }

    .prod-quantity {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
    }

    .prod-quantity input {
        width: 70px;
    }

    .prod-quantity h2 {
        width: 70px;
    }

    .removeItemButton img {
        width: 20px
    }

</style>
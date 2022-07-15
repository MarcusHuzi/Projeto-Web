<template id="product-template">
    <li  v-for="(product, index) in products" class="produto" :key="product">
        <div class="prod-imagem-box" @click="this.$parent.showModal(product)">
            <img :src="getImgUrl(product.image_src)" :alt="product.image_alt">
            <button v-on:click.stop="addProduct(index)" 
                v-show="product.quantity == 0" type="button" class="btn-add-product">+</button>
            <input v-on:click.stop v-on:input="validateInput(index)" 
                v-show="product.quantity >= 1" v-model="product.quantity" type="number" class="input-add-product">
        </div>
        <h3>R$ {{ product.price.toFixed(2) }}</h3>
        <h4>{{ product.title }}</h4>
    </li>
</template>

<script>
    export default {
        name: "ProductList",
        data() {
            return {
                products: []
            }
        },
        created() {
            this.getProducts()
        },
        methods: {
            addProduct(index) {
                this.products[index].quantity += 1

                this.updateCart(index)
            },
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
                if (prod.quantity <= 0){
                    prod.quantity = 0
                }
                else if (prod.quantity > prod.in_stock){
                    alert("Quantidade máxima em estoque atingida")
                    prod.quantity = prod.in_stock
                }

                this.updateCart(index)
            },  
            updateCart(index){
                let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                if (cart == null) cart = []
                
                let prod = this.products[index]
                let added = false
                for (let i = 0; i < cart.length; i++){
                    if (cart[i].slug == prod.slug){
                        added = true
                        if (prod.quantity == 0){
                            cart.splice(i,1)
                        }
                        else {
                            cart[i].quantity = prod.quantity
                        }
                        break
                    }
                }
                if (added == false) {
                    cart.push({
                        slug: prod.slug,
                        quantity: prod.quantity
                    })
                }

                this.$cookies.set("shopping_cart", JSON.stringify(cart))
            },
            async getProducts(){
                try {
                    let resp = await fetch("http://localhost:3000/products/cat/" + this.$route.params.category);
                    resp = await resp.json();
                    
                    let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                    if (cart == null) cart = [] 

                    for (let prod of resp){
                        if (prod.in_stock === 0)
                            continue

                        // checar carrinho    
                        let qte = 0
                        for (let item of cart){
                            if (item.slug == prod.slug)
                                qte = item.quantity
                        }

                        this.products.push({
                            slug: prod.slug,
                            title: prod.title,
                            description: prod.description,
                            price: prod.price,
                            in_stock: prod.in_stock,
                            image_src: prod.image_src,
                            image_alt: prod.image_alt,
                            quantity: qte
                        })
                    }
                } catch (e) {
                    console.error("Erro ao listar produtos.");
                }
            }
        }
    }

</script>

<style scoped>
    .produto {
        width: 130px;
    }

    .prod-imagem-box {
        background-color: var(--cinza);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        width: 130px;
        height: 130px;
    }

    .prod-imagem-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .btn-add-product {
        bottom: 5%;
        right: 5%;
        position: absolute;
        z-index: 1;
    }

    .input-add-product {
        bottom: 5%;
        right: 5%;
        width: 40px;
        position: absolute;
        z-index: 2;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }

    .produto h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
    }

    .produto h4 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400; 
        font-size: 14px;  
        line-height: 14px;
        height: 42px;
        color: rgba(0, 0, 0, 0.7);
    }
</style>
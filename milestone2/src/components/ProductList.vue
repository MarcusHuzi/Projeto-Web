<template id="product-template">
    <li  v-for="(product, index) in products" class="produto" :key="product">
        <div class="prod-imagem-box" @click="this.$parent.showModal(product)">
            <img :src="getImgUrl(product.image_src)" :alt="product.image_alt">
            <button v-on:click.stop="addProduct(index)" v-show="product.quantity == 0" type="button" class="btn-add-product">+</button>
            <input v-on:click.stop v-show="product.quantity >= 1" v-model="product.quantity" type="number" class="input-add-product">
        </div>
        <h3>R$ {{ product.price.toFixed(2) }}</h3>
        <h4>{{ product.name }}</h4>
    </li>
</template>

<script>
    export default {
        name: "ProductList",
        data() {
            return {
                products: [
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "ype-clear",
                            name: "Detergente Líquido Ypê Clear 500ml",
                            description: "Detergente Líquido Ypê Clear 500ml",
                            quantity: 0,
                            price: 2.39
                        },
                        {
                            image_src: "image/produtos/ype-maca.png",
                            image_alt: "ype-maca",
                            name: "Detergente Líquido Ypê Maçã 500ml",
                            description: "Detergente Líquido Ypê Maçã 500ml",
                            quantity: 0,
                            price: 2.39
                        },
                        {
                            image_src: "image/produtos/ype-neutro.png",
                            image_alt: "ype-neutro",
                            name: "Detergente Líquido Ypê Neutro 500ml",
                            description: "Detergente Líquido Ypê Neutro 500ml",
                            quantity: 0,
                            price: 2.39
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        },
                        {
                            image_src: "image/produtos/ype-clear.png",
                            image_alt: "placeholder",
                            name: "Item a ser adicionado",
                            description: "TBD",
                            quantity: 0,
                            price: 0.00
                        }
                    ]
            }
        },
        methods: {
            addProduct(index) {
                this.products[index].quantity += 1
            },
            getImgUrl(url){
                try {
                    let str = require('@/assets/' + url)
                    return str
                }
                catch {
                    return ""
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
    }

    .prod-imagem-box img {
        width: 120px;
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
        overflow: scroll;
        color: rgba(0, 0, 0, 0.7);
    }
</style>
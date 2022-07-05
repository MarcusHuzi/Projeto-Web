<template id="product-box-template">
    <li v-for="(product, index) in products" :key="index">
        <div class="product-box">
            <div class="prod-details">
                <div class="prod-imagem-box">
                    <img :src="getImgUrl(product.image_src)" :alt="product.img_alt" class="prod-imagem">
                </div>
                <h2>{{ product.name }}</h2>
            </div>
            <div class="prod-quantity">
                <input type="number" v-model="product.quantity" min="0" max="999">
                <h2>R$ {{ (product.quantity * product.price).toFixed(2) }}</h2>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "ProdContent",
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
                        name: "Detergente Líquido Ypê Maca 500ml",
                        description: "Detergente Líquido Ypê Maca 500ml",
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
                    }
                ]
            }
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
                return require('@/assets/' + url)
            }
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
    }

    .prod-imagem {
        width: 100px;
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
        width: 120px;
    }

</style>
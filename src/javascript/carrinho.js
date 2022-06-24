let app = Vue.createApp({
    data() {
        return {
            price: 0
        }
    },
    methods: {
        updatePrice(newValue) {
            this.price = newValue
        }
    }
})

app.component("prod-content",{
    template: "#product-box-template",
    data() {
        return {
            products: [
            {
                    image_src: "../image/produtos/ype-clear.png",
                    image_alt: "ype-clear",
                    name: "Detergente Líquido Ypê Clear 500ml",
                    description: "Detergente Líquido Ypê Clear 500ml",
                    quantity: 0,
                    price: 2.39
                },
                {
                    image_src: "../image/produtos/ype-maca.png",
                    image_alt: "ype-maca",
                    name: "Detergente Líquido Ypê Maca 500ml",
                    description: "Detergente Líquido Ypê Maca 500ml",
                    quantity: 0,
                    price: 2.39
                },
                {
                    image_src: "../image/produtos/ype-neutro.png",
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
            for (product of this.products){
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
    emits: ['emit-price']
})

app.mount('#app')
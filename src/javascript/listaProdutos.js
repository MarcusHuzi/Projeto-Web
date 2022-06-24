let app = Vue.createApp({
    data() {
        return {
            isModalVisible: false,
            modalProduct: Object
        }
    },
    methods: {
        showModal(product) {
            this.modalProduct = product
            this.isModalVisible = true
        },
        closeModal() {
            this.isModalVisible = false
        }
    }
})

app.component("product-content",{
    template: "#product-template",
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
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "placeholder",
                        name: "Item a ser adicionado",
                        description: "TBD",
                        quantity: 0,
                        price: 0.00
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
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
        }
    }
})

app.component("modal",{
    template: "#modal-template",
    methods: {
        close() {
            this.$emit('close')
        }
    }
})

app.mount("#app")

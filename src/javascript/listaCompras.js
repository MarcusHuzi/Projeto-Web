let app = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {
        
    }
})

app.component("lista-compra",{
    template: "#template-lista-compra",
    data() {
        return {
            listas: [
                [
                    {
                        title: "Lista de terça"
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "ype-clear",
                        name: "Detergente Líquido Ypê Clear 500ml",
                        description: "Detergente Líquido Ypê Clear 500ml",
                        quantity: 2,
                        price: 2.39
                    },
                    {
                        image_src: "../image/produtos/ype-maca.png",
                        image_alt: "ype-maca",
                        name: "Detergente Líquido Ypê Maçã 500ml",
                        description: "Detergente Líquido Ypê Maçã 500ml",
                        quantity: 1,
                        price: 2.39
                    }
                ],
                [
                    {
                        title: "Lista de sempre"
                    },
                    {
                        image_src: "../image/produtos/ype-maca.png",
                        image_alt: "ype-maca",
                        name: "Detergente Líquido Ypê Maçã 500ml",
                        description: "Detergente Líquido Ypê Maçã 500ml",
                        quantity: 1,
                        price: 2.39
                    },
                    {
                        image_src: "../image/produtos/ype-neutro.png",
                        image_alt: "ype-neutro",
                        name: "Detergente Líquido Ypê Neutro 500ml",
                        description: "Detergente Líquido Ypê Neutro 500ml",
                        quantity: 3,
                        price: 2.39
                    }
                ],
                [
                    {
                        title: "Fins de semana"
                    },
                    {
                        image_src: "../image/produtos/ype-clear.png",
                        image_alt: "ype-clear",
                        name: "Detergente Líquido Ypê Clear 500ml",
                        description: "Detergente Líquido Ypê Clear 500ml",
                        quantity: 2,
                        price: 2.39
                    },
                    {
                        image_src: "../image/produtos/ype-maca.png",
                        image_alt: "ype-maca",
                        name: "Detergente Líquido Ypê Maçã 500ml",
                        description: "Detergente Líquido Ypê Maçã 500ml",
                        quantity: 1,
                        price: 2.39
                    },
                    {
                        image_src: "../image/produtos/ype-neutro.png",
                        image_alt: "ype-neutro",
                        name: "Detergente Líquido Ypê Neutro 500ml",
                        description: "Detergente Líquido Ypê Neutro 500ml",
                        quantity: 3,
                        price: 2.39
                    }
                ]
            ]
        }
    },
    methods: {
        removeListByIndex(index) {
            this.listas.splice(index, 1)
        },
        getListItems(index){
            return this.listas[index].slice(1)
        }
    }
})

app.mount("#app")

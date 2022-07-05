<template id="template-lista-compra">
    <div v-for="(lista, index) in listas" class="lista-div" :key="lista">
        <div class="titulo-lista">
            <h1>{{lista[0].title}}</h1>
            <!--<button type="button">ar</button>-->
            <button type="button" @click="removeListByIndex(index)" class="botao-lista">Excluir lista</button>
        </div>
        <ul>
            <li v-for="product in getListItems(index)" :key="product">
                <div class="product-box">
                    <div class="prod-details">
                        <div class="prod-imagem-box">
                            <img :src="product.image_src" :alt="product.img_alt" class="prod-imagem">
                        </div>
                        <h2>{{ product.name }}</h2>
                    </div>
                    <div class="prod-quantity">
                        <h2>{{product.quantity}}</h2>
                        <h2>R$ {{ (product.quantity * product.price).toFixed(2) }}</h2>
                    </div>
                </div>
            </li>
        </ul>
        <button type="button" class="btn-add-to-cart botao-lista">Adicionar ao carrinho</button>
    </div>

</template>

<script>
    export default {
        name: "ListaCompra",
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
    }

</script>

<style scoped>
    .lista-div {
        margin: 10px 3% 20px 3%;
        background-color: var(--cinza);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        max-width: 800px;
    }

    .lista-div li {
        padding: 10px;
    }

    .titulo-lista {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding: 10px;
    }

    .titulo-lista h1 {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.7);
    }

    .botao-lista {
        background-color: var(--vermelho-escuro);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        width: 120px;
        height: 40px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        transition: ease 600ms;
        color: var(--amarelo);
        font-family: 'Rubik', sans-serif;
    }

    .botao-lista:hover{
        opacity: 0.7;
        transform: scale(1.04);
    }

    .btn-add-to-cart {
        align-self: flex-end;
        margin: 10px;
    }

    .product-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        background-color: var(--vermelho-escuro);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 0px 20px 0px 20px;
    }

    .product-box h2 {
        color: var(--amarelo);
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
        max-width: 300px;
    }

    .prod-quantity {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .prod-quantity h2 {
        width: 80px;
    }
</style>
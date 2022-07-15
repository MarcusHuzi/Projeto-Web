<template id="template-lista-compra">
    <div v-for="(lista, index) in listas" class="lista-div" :key="lista">
        <div class="titulo-lista">
            <h1>{{lista[0].nome}}</h1>
            <button type="button" @click="removeListByIndex(index)" class="botao-lista">Excluir lista</button>
        </div>
        <ul>
            <li v-for="product in getListItems(index)" :key="product">
                <div class="product-box">
                    <div class="prod-details">
                        <div class="prod-imagem-box">
                            <img :src="getImgUrl(product.image_src)" :alt="product.image_alt">
                        </div>
                        <h2>{{ product.title }}</h2>
                    </div>
                    <div class="prod-quantity">
                        <h2>{{product.quantity}}</h2>
                        <h2>R$ {{ (product.quantity * product.price).toFixed(2) }}</h2>
                    </div>
                </div>
            </li>
        </ul>
        <button v-on:click="addListToCart(index)" type="button" class="btn-add-to-cart botao-lista">Adicionar ao carrinho</button>
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
                            nome: "lista-exemplo",
                            _id: "123"
                        },
                        {
                            slug: 'exemplo',
                            title: 'exemplo',
                            description: 'exemplo   ',
                            price: 0.00,
                            image_src: '',
                            image_alt: 'exemplo',
                            in_stock: 0,
                            quantity: 0
                        },
                        {
                            slug: 'exemplo2',
                            title: 'exemplo2',
                            description: 'exemplo2',
                            price: 0.00,
                            image_src: '',
                            image_alt: 'exemplo2',
                            in_stock: 0,
                            quantity: 0
                        }
                    ]
                ]
            }
        },
        created(){
            this.loadLists()
        },
        methods: {
            async removeListByIndex(index) {
                let listId = this.listas[index][0]._id

                try {
                    await fetch("http://localhost:3000/lists/" + listId, {
                        method: "DELETE"
                    })
                    this.listas.splice(index, 1)
                } catch(e) {
                    console.error("Erro ao remover lista");
                }

            },
            addListToCart(index){
                let cart = JSON.parse(this.$cookies.get("shopping_cart"))
                if (cart == null) cart = []
                
                let list = this.listas[index]
                for (let i = 1; i < list.length; i++) {
                    let prod = list[i]
                    let added = false
                    for (let i = 0; i < cart.length; i++){
                        if (cart[i].slug == prod.slug){
                            added = true
                            if (cart[i].quantity + prod.quantity > prod.in_stock){
                                cart[i].quantity = prod.in_stock
                                alert("A quantidade desejada de " + prod.title + " não consta no estoque e foi alterada")
                            }
                            else{
                                cart[i].quantity += prod.quantity
                            }
                            break
                        }
                    }
                    if (added == false) {
                        let qte = prod.quantity
                        if (qte > prod.in_stock){
                            alert("A quantidade desejada de " + prod.title + " não consta no estoque e foi alterada")
                            qte = prod.in_stock
                        }
                        cart.push({
                            slug: prod.slug,
                            quantity: qte
                        })
                    }
                }

                this.$cookies.set("shopping_cart", JSON.stringify(cart))
                alert("Produtos adicionados ao carrinho")
            },
            getListItems(index){
                return this.listas[index].slice(1)
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
            async loadLists(){
                this.listas = []
                
                let accountId = this.$cookies.get("account_id")
                
                //get email
                let email
                try {
                    let resp = await fetch("http://localhost:3000/clients/" + accountId)
                    resp = await resp.json()
                    email = resp.email
                } catch(e) {
                    alert("Erro ao ler dados do usuário");
                    return
                }

                //get lists
                let lists
                try {
                    lists = await fetch("http://localhost:3000/lists/" + email)	
                    lists = await lists.json()
                } catch(e) {
                    console.error("Erro ao requisitar listas do usuário");
                    return
                }
                    
                for (let list of lists) {
                    let entry = []
                    entry.push({
                        nome: list.nome,
                        _id: list._id
                    })
                    for (let i = 0; i < list.products.length; i++){

                        //get each product
                        try{
                            let prod = await fetch("http://localhost:3000/products/" + list.products[i].slug)
                            prod = await prod.json()

                            entry.push({
                                slug: prod.slug,
                                title: prod.title,
                                description: prod.description,
                                price: prod.price,
                                image_src: prod.image_src,
                                image_alt: prod.image_alt,
                                in_stock: prod.in_stock,
                                quantity: list.products[i].quant
                            })
                        } catch(e){
                            console.error("Erro ao ler um produto cujo slug é " + list.products[i].slug)
                        }
                    }

                    this.listas.push(entry)
                    
                }
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

    .btn-edit-lista {
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
        width: 100px;
        height: 100px;
    }

    .prod-imagem-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
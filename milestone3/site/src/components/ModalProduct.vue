<template id="modal-template">
    <div class="modal-backdrop" @click="close">
        <div class="modal">
            <div class="modal-prod-image-box">
                <img :src="getImgUrl(this.$parent.modalProduct.image_src)" :alt="this.$parent.modalProduct.image_alt">
            </div>
            <div class="modal-prod-description">
                <h1>{{this.$parent.modalProduct.title}}</h1>
                <h2>{{this.$parent.modalProduct.description}}</h2>
                <h3>R$ {{ (this.$parent.modalProduct.price).toFixed(2) }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalProduct",
        methods: {
            close() {
                this.$emit('close')
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
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 40px;
        gap: 30px;
    }

    .modal-prod-image-box {
        background-color: var(--cinza);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
    }

    .modal-prod-image-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .modal-prod-description {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        max-width: 400px;
        gap: 8px;
    }

    .modal-prod-description h1 {
        font-family: 'Inter';
        font-style: normal;
        color: #000000;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
    }

    .modal-prod-description h2 {
        font-family: 'Inter';
        font-style: normal;
        color: #000000;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }

    .modal-prod-description h3 {
        font-family: 'Inter';
        font-style: normal;
        color: #000000;
        font-weight: 600;
        font-size: 22px;
        line-height: 24px;
    }
</style>
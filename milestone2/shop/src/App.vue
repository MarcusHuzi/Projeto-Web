<template>
  <div class="container">
    <HeaderView/>

    
    <h1> Conteudo </h1>

    <FooterView/>
  </div>

</template>

<script>
  import HeaderView from "./components/HeaderView.vue";
  import FooterView from "./components/FooterView.vue";

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView,
  }
}
</script>

<style>
  @import '/src/assets/css/style.css';
</style>

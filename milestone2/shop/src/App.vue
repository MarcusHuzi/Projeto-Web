<template>
  <body>
    <div class="container">
        <HeaderView/>

        <router-view/>

        <FooterView/>
        
    </div>
  </body>
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
  @import '/src/assets/css/reset.css';
</style>

<template>  
  <div>  
    <Navigation />  
    <router-view />  
  
  </div>  
</template>  
  
<script>  
import Navigation from './components/Navigation.vue';  
import MineView from './views/Personalpage.vue'; 
export default {  
  name: 'App',  
  components: {  
    Navigation,
    MineView  
  }  
};  
</script>  
<style scoped>


</style>
<template>  
  <div class="card">  
    <div class="card-content">  
      <img :src="image" :alt="title" class="card-image" />  
      <div class="card-text">  
        <h2 class="card-title">{{ title }}</h2>  
        <p class="card-description">{{ content }}</p>  
      </div>  
    </div>  
  </div>  
</template>  
  
<script>  
import { defineComponent } from 'vue';  
export default defineComponent({  
  name: 'Card',  
  props: {  
    image: String,  
    title: String,  
    content: String ,
    channel: {  
      type: Object,  
      required: true  
    } 
  },
  methods: {  
    navigateToVideoPage(id) {  
      this.$router.push({ name: 'VideoPage', params: { id: id } });  
    }  
  }

});  
</script>  
  
<style scoped>  
.card {  
  position: relative; 
  width: 100%; 
}  
  
.card-content {  
  display: flex;  
  flex-direction: column;  
  justify-content: center;  
  height: 100%;  
}  
  
.card-image {  
  width: 100%; 
  height: auto;   
  display: block;  
}  
  
.card-text {  
  position: absolute;  
  bottom: 0; 
  left: 0;  
  right: 0;   
  color: white;  
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);  
}  
</style>
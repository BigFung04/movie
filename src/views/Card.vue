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
    content: String,
    channel: {  
      type: Object,  
      required: true  
    } 
  },
  methods: {  
    navigateToVideopage(id) {  
      this.$router.push({ name: 'Videopage', params: { id: id } });  
    }  
  }
});  
</script>  

<style scoped>  
.card {  
  position: relative; 
  width: 100%; 
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}



.card-content {  
  display: flex;  
  flex-direction: column;  
  justify-content: space-between;  
  height: 100%;  
}  

.card-image {  
  width: 100%; 
  height: auto;   
  display: block;  
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}  

.card-text {  
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}  

.card-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-description {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #fff;
}
</style>

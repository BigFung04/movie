<template>  
  <div class="channel-page">
    <a href="#/video">
      <div class="card-grid">  
        <Card  
        v-for="(channel, index) in channels"  
        :key="index"  
        :image="channel.image"  
        :channel="channel"  
        class="card-item"  
        @click="goToVideo(channel.id)"  
      /> 
    </div>  
    </a> 
    
  </div>  
</template> 

<script>
import { ref } from 'vue';
import Card from './Card.vue';
import { useRouter } from 'vue-router'; 
export default {
  name: 'Channelpage',
  components: {
    Card
  },
  setup() {
    const router = useRouter();  
    const channels = ref([
      { image: 'https://codelover.club/coursefiles/images/film/创意.jpeg' },
      { image: 'https://codelover.club/coursefiles/images/film/剧情.jpeg' },
      { image: 'https://codelover.club/coursefiles/images/film/动画.jpeg' },
      { image: 'https://codelover.club/coursefiles/images/film/实验.jpeg' },
      { image: 'https://codelover.club/coursefiles/images/film/搞笑.jpeg' },
      { image: 'https://codelover.club/coursefiles/images/film/时尚.jpeg' },

    ]);
    const goToVideo = (id) => {  
      router.push({ name: 'Videopage', params: { id: id } });  
    };
    return {
      channels,
      goToVideo
    };
  }
};  
</script>

<style scoped>
.channel-page {  
  display: flex;  
  flex-direction: column;  
  width: 100%;  
  max-width: 1200px;  
  margin: 0 auto;  
  box-sizing: border-box;  
  padding-top: 120px; 
  background-image: url('https://th.bing.com/th/id/R.0320fb9105df9b13ece2b44cfa8dc175?rik=%2fg5WP4UbMJK9Gg&riu=http%3a%2f%2fpic.616pic.com%2fbg_w1180%2f00%2f17%2f97%2fcVZmdsCGdL.jpg!%2ffw%2f1120&ehk=z5Wa%2bsQS85JH1X0rXVdaXkIJSd4euOJj%2f20jaEnj42I%3d&risl=&pid=ImgRaw&r=0'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}  
  
.card-grid {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: space-between;  
  padding: 20px; 
}  
  
.card-item {  
  flex: 0 0 calc(50% - 20px);  
  max-width: calc(50% - 20px);  
  margin-bottom: 30px; 
  background-color: #e0e0e0; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
  overflow: hidden;  
  transition: transform 0.3s ease; 
}  
  
/* .card-item:hover {  
  transform: scale(1.02); 
}   */
  
.card-item img {  
  width: 100%;  
  height: auto;  
  object-fit: cover;  
  border-radius: 10px 10px 0 0;   
}  
  
@media (max-width: 600px) {  
  .card-item {  
    max-width: 100%;  
  }  
}
</style>

<template>  
  <div class="channels-view">
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
  name: 'ChannelsView',
  components: {
    Card
  },
  setup() {
    const router = useRouter();  
    const channels = ref([
      { image: 'https://img2.baidu.com/it/u=3251206662,2302463034&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=435' },
      { image: 'https://img2.baidu.com/it/u=1082702029,3036621525&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500' },
      { image: 'https://n.sinaimg.cn/sinakd20116/302/w1622h1080/20220817/e7ef-2ac89dba127f917f97f16ed5b2ebd39f.jpg' },
      { image: 'https://n.sinaimg.cn/sinakd20240320s/1/w2048h1153/20240320/ec7b-ec7168a3fd765f3f51b76bdfdf58dc4e.jpg' },
      { image: 'https://b0.bdstatic.com/0d16d6c6bf31ad4bcde914c0b556052c.jpg@h_1280' },
      { image: 'https://n.sinaimg.cn/sinakd10121/213/w2048h1365/20221225/132d-0881a19b6d055d773897d43a3f551a27.jpg' },

    ]);
    const goToVideo = (id) => {  
      router.push({ name: 'VideoPage', params: { id: id } });  
    };
    return {
      channels,
      goToVideo
    };
  }
};  
</script>

<style scoped>
.channels-view {  
  display: flex;  
  flex-direction: column;  
  width: 100%;  
  max-width: 1200px;  
  margin: 0 auto;  
  box-sizing: border-box;  
  padding-top: 120px; 
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
  
.card-item:hover {  
  transform: scale(1.02); 
}  
  
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
{ image: 'https://img2.baidu.com/it/u=3251206662,2302463034&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=435' },
{ image: 'https://img2.baidu.com/it/u=1082702029,3036621525&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500' },
{ image: 'https://n.sinaimg.cn/sinakd20116/302/w1622h1080/20220817/e7ef-2ac89dba127f917f97f16ed5b2ebd39f.jpg' },
{ image: 'https://n.sinaimg.cn/sinakd20240320s/1/w2048h1153/20240320/ec7b-ec7168a3fd765f3f51b76bdfdf58dc4e.jpg' },
{ image: 'https://b0.bdstatic.com/0d16d6c6bf31ad4bcde914c0b556052c.jpg@h_1280' },
{ image: 'https://ww2.sinaimg.cn/mw690/0061Qw6Aly1hk1sxc5e3bj31hc0u0x52.jpg' },

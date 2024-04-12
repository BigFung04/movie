<template>  
  <div class="channels-view">  
   <nav class="top-navbar">  
      <!-- 导航栏内容，例如链接、logo等 -->  
    </nav> 
    <router-link to="/video" class="top-image-container">  
      <img :src="topImagePath" alt="顶部大照片" class="top-image" />  
    </router-link>  
  
    <div class="card-grid">  
      <div v-for="(channel, index) in channels" :key="index" class="card-item">  
        <router-link :to="`/video/`" class="card-link">  
          <img :src="channel.image" :alt="channel.name" class="card-image" />  
          <p class="card-description">{{ channel.description }}</p>  
        </router-link>  
      </div>  
    </div>  
  </div>  
</template>  

<script setup>  
import { ref } from 'vue';  
  
const topImagePath = ref('https://5b0988e595225.cdn.sohucs.com/images/20190202/9e21c1fe8659410a9185b123b656df32.jpeg');  
  
const channels = ref([  
  {  
    name: '星汉灿烂 月生沧海',  
    image: 'https://img2.baidu.com/it/u=3251206662,2302463034&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=435',  
    description: '星汉灿烂 月生沧海'  
  },  
  {  
    name: '苍兰诀',  
    image: 'https://n.sinaimg.cn/sinakd20116/302/w1622h1080/20220817/e7ef-2ac89dba127f917f97f16ed5b2ebd39f.jpg',  
    description: '苍兰诀'  
  },  
  {  
    name: '要久久爱',  
    image: 'https://n.sinaimg.cn/sinakd20240320s/1/w2048h1153/20240320/ec7b-ec7168a3fd765f3f51b76bdfdf58dc4e.jpg',  
    description: '要久久爱'  
  },  
  {  
    name: '长相思',  
    image: 'https://b0.bdstatic.com/0d16d6c6bf31ad4bcde914c0b556052c.jpg@h_1280',  
    description: '长相思'  
  },
  {  
    name: '云之羽',  
    image: 'https://p2.itc.cn/images01/20230917/927484d5ba6c4f2e8f08db64f070ca13.jpeg',  
    description: '云之羽'  
  },
]);  
</script>
  
<style scoped>  
.channels-view {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  height: 100vh;  
  background-color: #f5f5f5;  
  font-family: 'Arial', sans-serif;  
  height: calc(175vh - 60px);  
}  

.top-image-container {  
  width: 100%;  
  overflow: hidden;  
  position: relative; 
}  
  
.top-image {  
  margin-top: 100px;
  width: 100%;  
  height: 80%;  
  transition: transform 0.3s ease;  
  object-fit: cover;
}  
  
.top-image:hover {  
  transform: scale(1.05);  
}  
  
.card-grid {  
  display: grid;  
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  
  gap: 20px;  
  margin-top: 20px;  
}  
  
.card-item {  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
  border-radius: 8px;  
  overflow: hidden;  
  background-color: #fff;  
}  
  
.card-link {  
  text-decoration: none;  
  color: inherit;  
  display: block;  
  padding: 15px;  
}  
  
.card-image {  
  width: 100%;  
  height: auto;  
  border-radius: 8px 8px 0 0;  
  transition: transform 0.3s ease;  
}  
  
.card-image:hover {  
  transform: scale(1.05);  
}  
  
.card-description {  
  margin-top: 10px;  
  font-size: 14px;  
  line-height: 1.5;  
}  

@media (max-width: 768px) {  
  .card-item {  
    flex: 0 0 100%; 
    max-width: 100%;  
  }  
}  
</style>
  
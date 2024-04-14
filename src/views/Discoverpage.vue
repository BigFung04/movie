<template>  
  <div class="channels-view">  
   <nav class="top-navbar">  
    </nav> 
    <router-link to="/video" class="top-image-container">  
      <img :src="topImagePath" alt="海报" class="top-image" />  
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
  
const topImagePath = ref('https://img.zcool.cn/community/01073e5c4fca88a801203d220045a0.jpg@2o.jpg');  
  
const channels = ref([  
  {  
    name: '敢死队',  
    image: 'https://th.bing.com/th/id/R.dd84f87230ca43a9eeee5a80b1c9c95a?rik=srCqyBEhwIxaTQ&riu=http%3a%2f%2fpic8.nipic.com%2f20100729%2f1988006_155019008463_2.jpg&ehk=77GIcw0vCjuA%2bBfiZFAnR9QFIrbWdX3gIImpM7ayvXw%3d&risl=&pid=ImgRaw&r=0',  
    description: '敢死队'  
  },  
  {  
    name: '热烈',  
    image: 'https://img.zcool.cn/community/031eercaywa08tc8qlhbo3v3336.png',  
    description: '热烈'  
  },  
  {  
    name: '星际迷航',  
    image: 'https://photo.16pic.com/00/34/35/16pic_3435569_b.jpg',  
    description: '星际迷航'  
  },  
  {  
    name: '阿飞正传',  
    image: 'https://img.doooor.com/img/forum/201706/23/183330xbhzjjhwbal7t5bv.jpg',  
    description: '阿飞正传'  
  },
  {  
    name: '闪闪亮星星',  
    image: 'https://img.zcool.cn/community/0119d16236e53d0002c3290f01c9ef.jpg',  
    description: '闪闪亮星星'  
  },
  // {  
  //   name: '天下无双',  
  //   image: 'https://th.bing.com/th/id/R.d64f58217c94feb20c9061b08f82cc58?rik=yg1fSkqIiYB0HA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2008%2f0829%2f01153523357.jpg&ehk=loh9%2bQyMuYyNAncAbJYoI%2bAlwjkU0r0e6vWutDRUUyY%3d&risl=&pid=ImgRaw&r=0',  
  //   description: '天下无双'  
  // },
]);  
</script>
  
<style scoped>
.channels-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

.top-image-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}

.top-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  object-fit: cover;
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

  
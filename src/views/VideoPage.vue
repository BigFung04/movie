<template>  
  <div class="video-container">  
    <div class="video-player-wrapper">  
      <video src="https://codelover.club/coursefiles/lnnpREORzoIdSs-hRgPHOKXVIzwM.mp4"   
      controls  autoplay></video>
    </div>  
    <RouterLink to="/discover" class="back-button">返回</RouterLink>  
    <div class="credits-container">  
      <h2 class="credits-title">导演：</h2>  
      <p class="credits-text">{{ director }}</p>  
      <h2 class="credits-title">演员：</h2>  
      <p class="credits-text">{{ actors }}</p>  
    </div>  
    <div class="comment-container">  
      <h3 class="comment-title">评论：</h3>  
      <textarea v-model="comment" placeholder="请输入您的评论..." class="comment-input"></textarea>  
      <button @click="submitComment" class="comment-button">提交</button>  
    </div>  
    <div class="categories-container">  
      <div class="category-box" v-for="(imageUrl, category) in categoryImages" :key="category">  
        <h3 class="category-title">{{ category }}</h3>  
        <a :href="imageUrl" target="_blank">  
          <img :src="imageUrl" alt="类别图片" class="category-image" />  
        </a>  
      </div>  
    </div>  
  </div>  
</template>  
  
<script setup>  
import { ref } from 'vue';  
  
const videoUrl = ref('https://codelover.club/coursefiles/lnnpREORzoIdSs-hRgPHOKXVIzwM.mp4');  
const director = ref('韩寒');  
const actors = ref('沈腾，范丞丞');  
const categoryImages = ref({  
  campus: 'https://n.sinaimg.cn/sinakd20240320s/1/w2048h1153/20240320/ec7b-ec7168a3fd765f3f51b76bdfdf58dc4e.jpg',  
  ancient: 'https://ww2.sinaimg.cn/mw690/0061Qw6Aly1hk1sxc5e3bj31hc0u0x52.jpg'  
});  
const comment = ref('');  
  
const submitComment = () => {  
  console.log('提交的评论:', comment.value);  
  comment.value = '';  
};  
</script>
  
<style scoped>  
.video-container {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  width: 100%;  
  max-width: 1200px;  
  margin: 0 auto;  
  padding: 2rem;  
  box-sizing: border-box;  
  font-family: 'Arial', sans-serif;  
  color: #333;  
  background-color: #f5f5f5;  
  height: 500px;
  margin-top: 50px;
}  
  
.video-player-wrapper {  
  position: relative;  
  width: 100%;  
  max-width: 800px;  
  padding-top: 56.25%; /* 16:9 Aspect Ratio */  
}  
  
.video-player-wrapper video {  
  position: absolute;  
  top: 0;  
  left: 0;  
  width: 100%;  
  height: 100%;  
  border-radius: 10px;  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  
}  
  
.back-button {  
  display: inline-block;  
  margin-bottom: 2rem;  
  padding: 0.5rem 1rem;  
  background-color: #007bff;  
  color: white;  
  border-radius: 4px;  
  text-decoration: none;  
  font-weight: bold;  
  transition: background-color 0.3s ease;  
  text-align: center;  
  text-transform: uppercase;  
}  
  
.back-button:hover {  
  background-color: #0056b3;  
}  
  
.credits-container {  
  margin-bottom: 2rem;  
}  
  
.credits-title {  
  font-size: 1.2rem;  
  font-weight: bold;  
  margin-bottom: 0.5rem;  
}  
  
.credits-text {  
  font-size: 1rem;  
}  
  
.comment-container {  
  margin-bottom: 2rem;  
}  
  
.comment-title {  
  font-size: 1.2rem;  
  font-weight: bold;  
  margin-bottom: 0.5rem;  
}  
  
.comment-input {  
  width: 100%;  
  padding: 0.5rem;  
  border: 1px solid #ccc;  
  border-radius: 4px;  
  resize: none;  
  font-size: 1rem;  
}  
  
.comment-button {  
  display: inline-block;  
  margin-top: 0.5rem;  
  padding: 0.5rem 1rem;  
  background-color: #4CAF50;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
  transition: background-color 0.3s ease;  
  font-size: 1rem;  
}  
  
.comment-button:hover {  
  background-color: #45a049;  
}  
  
.categories-container {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: space-between;  
}  
  
.category-box {  
  width: calc(50% - 10px); /* Adjust as needed */  
  margin-bottom: 20px;  
}  
  
.category-title {  
  font-size: 1.2rem;  
  font-weight: bold;  
  margin-bottom: 0.5rem;  
}  
  
.category-image {  
  width: 100%;  
  height: auto;  
  border-radius: 10px;  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  
}  
  
/* Add responsive styles if needed */  
@media (max-width: 768px) {  
  .category-box {  
    width: 100%;  
  }  
}  
</style>
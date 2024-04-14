<template>
  <div class="video-container"></div>    
  <div class="video-container">  
    <div class="video-player-wrapper">  
      <video src="https://codelover.club/coursefiles/lnnpREORzoIdSs-hRgPHOKXVIzwM.mp4"   
      controls  autoplay></video>
    </div>  
    <RouterLink to="/discover" class="back-button">撤退</RouterLink>  
    <div class="credits-container">  
      <h2 class="credits-title">导演：</h2>  
      <p class="credits-text">{{ director }}</p>  
      <h2 class="credits-title">演员：</h2>  
      <p class="credits-text">{{ actors }}</p>  
    </div>  
    <div class="comment-container">  
      <h3 class="comment-title">点评：</h3>  
      <textarea v-model="comment" placeholder="输入您的点评...." class="comment-input"></textarea>  
      <button @click="submitComment" class="comment-button">上传</button>  
    </div>
    <div class="like-container">
        <button @click="toggleLike" class="like-button">
          <span :class="{ 'liked': liked }">&#10084;</span>
          <span>{{ likeCount }}</span>
        </button>
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
const director = ref('XXX');  
const actors = ref('XXX、XXX、XXX');  
const categoryImages = ref({  
  励志: 'https://img.zcool.cn/community/031eercaywa08tc8qlhbo3v3336.png',  
  科幻: 'https://photo.16pic.com/00/34/35/16pic_3435569_b.jpg',
});  
const comment = ref('');  
  
const submitComment = () => {  
  console.log('上传的评论:', comment.value);  
  comment.value = '';  
};  

const toggleLike = () => {
  liked.value = !liked.value;
  liked.value ? likeCount.value++ : likeCount.value--;
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
  margin-top: 50px;
}

.video-player-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  padding-top: 56.25%;
  border-radius: 10px;
  overflow: hidden; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.video-player-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.back-button {
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background-color: #2fb949;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  text-align: center;
  text-transform: uppercase;
  margin-left: auto; 
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
  display: flex;
  align-items: center; 
  width: 100%;
}

.comment-title {
  flex: 0 0 auto; 
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem; 
  color: white;
}

.comment-input {
  flex: 1; 
  margin-right: 1rem; 
}

.comment-button {
  flex: 0 0 auto; 
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
  width: calc(50% - 10px);
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

@media (max-width: 768px) {
  .category-box {
    width: 100%;
  }
}

.like-button .liked {
  color: red;
}

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
  margin-top: 50px;
  background-image: url('https://th.bing.com/th/id/R.0320fb9105df9b13ece2b44cfa8dc175?rik=%2fg5WP4UbMJK9Gg&riu=http%3a%2f%2fpic.616pic.com%2fbg_w1180%2f00%2f17%2f97%2fcVZmdsCGdL.jpg!%2ffw%2f1120&ehk=z5Wa%2bsQS85JH1X0rXVdaXkIJSd4euOJj%2f20jaEnj42I%3d&risl=&pid=ImgRaw&r=0');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

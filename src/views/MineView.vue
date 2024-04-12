<template>  
  <div class="user-profile">  
    <img :src="profilePicture" :alt="userName" class="profile-picture" @error="onError" />  
    <div class="profile-info">  
      <h2>{{ userName }}</h2>  
      <p class="gitee-repo-link">  
        <a :href="giteeRepoUrl" target="_blank" rel="noopener noreferrer">查看我的Gitee仓库</a>  
      </p>  
    </div>  
    <div class="buttons">  
      <button @click="logoutOrLogin" v-if="!isLoggedIn">登录</button>  
      <button @click="logout" v-else>退出登录</button>  
      <div class="button-separator"></div>  
      <button @click="changePassword">修改密码</button>  
    </div>  
  </div>  
</template>  
  
<script>  
import { ref } from 'vue';  
import { useRouter } from 'vue-router';  
  
export default {  
  name: 'UserProfile',  
  setup() {  
    const router = useRouter();  
    const userName = ref('00');   
    const profilePicture = ref('https://img0.baidu.com/it/u=1991123856,2945094112&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'); 
    const giteeRepoUrl = ref('https://gitee.com/li-xinglian/film.git');   
    const isLoggedIn = ref(true);  
  
    const logoutOrLogin = () => {  
      if (isLoggedIn.value) {  
        isLoggedIn.value = false;  
      } else {  
        router.push('/login');  
      }  
    };  
  
    const logout = () => {  
      isLoggedIn.value = false;  
      alert('已退出登录');  
    };  
  
    const changePassword = () => {  
      alert('请前往设置页面修改密码');  
    };  
  
    return {  
      userName,  
      profilePicture,  
      giteeRepoUrl,  
      isLoggedIn,  
      logoutOrLogin,  
      logout,  
      changePassword,  
    };  
  },  
};  
</script>  
<style scoped>    
.user-profile {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  padding: 20px;  
  width: 600px; 
  height: 500px; 
  margin: 0 auto;  
  border-radius: 10px;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  background-color: #fff;  
  margin-top: 180px;
}  
  
.profile-picture {  
  width: 300px;  
  height: 300px;  
  border-radius: 50%;  
  object-fit: cover;  
  margin-bottom: 10px;  
}  
  
.profile-info {  
  text-align: center;  
}  
  
.profile-info h2 {  
  font-size: 1.5em;  
  margin-bottom: 5px;  
}  
  
.buttons {  
  display: flex;  
  justify-content: space-between;  
  margin-top: 10px;
  width: 300px;  
  height: 60px;
}  
  
.btn {  
  padding: 8px 16px;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
  font-size: 1em;  
}  
  
.btn-primary {  
  background-color: #4CAF50; /* 绿色 */  
  color: white;  
}  
  
.btn-secondary {  
  background-color: #007BFF; /* 蓝色 */  
  color: white;  
}  
  
.button-separator {  
  width: 1px;  
  height: 20px;  
  background-color: #ccc;  
  margin: 0 10px;  
}  
</style>
<template>
  <div class="user-profile">
    <img :src="profilePicture" :alt="userName" class="profile-picture" @error="onError" />
    <div class="profile-info">
      <h2>{{ userName }}</h2>
      <p class="github-repo-link">
        <a :href="githubRepoUrl" target="_blank" rel="noopener noreferrer">☞咖喱饭🍛的仓库</a>
      </p>
    </div>
    <div class="buttons">
      <button @click="logoutOrLogin" v-if="!isLoggedIn" class="btn btn-primary">登录</button>
      <button @click="logout" v-else class="btn btn-secondary">退出登录</button>
      <div class="button-separator"></div>
      <button @click="changePassword" class="btn btn-primary">修改密码</button>
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
    const userName = ref('咖喱饭🍛');
    const profilePicture = ref('https://ts1.cn.mm.bing.net/th/id/R-C.3049959b8c06c802d16d535975ce730d?rik=FBkdTolVCAOemQ&riu=http%3a%2f%2fimg.touxiangwu.com%2fuploads%2fallimg%2f2022053119%2fjal1spg1ses.jpg&ehk=N8IhTcYE9yv5m4YWdmWaapxNQ3WOo723iAOlTPGir5I%3d&risl=&pid=ImgRaw&r=0');
    const githubRepoUrl = ref('https://github.com/BigFung04/movie.git');
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
      alert('已退出大本营');
    };

    const changePassword = () => {
      alert('不，我拒绝修改');
    };

    return {
      userName,
      profilePicture,
      githubRepoUrl,
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
  background: linear-gradient(135deg, #f1c3e6, #4094ed);
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
  width: 270px;
  height: 40px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.btn-primary {
  background-color: #19e87d;
  color: white;
}

.btn-secondary {
  background-color: #007BFF;
  color: white;
}

.button-separator {
  width: 1px;
  height: 20px;
  background-color: #ccc;
  margin: 0 10px;
}

</style>

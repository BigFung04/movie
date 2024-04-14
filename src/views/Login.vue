// Login.vue  
<template>  
  <div class="login-page">  
    <h1>登录</h1>  
    <form @submit.prevent="login">  
      <input type="text" v-model="username" placeholder="用户名" />  
      <input type="password" v-model="password" placeholder="密码" />  
      <button type="submit" :disabled="isSubmitting">登录</button>  
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>  
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>  
    </form>  
  </div>  
</template>  
  
<script>  
import { ref } from 'vue';  
import { useRouter } from 'vue-router';  
  
export default {  
  name: 'Login',  
  setup() {  
    const router = useRouter();  
    const username = ref('');  
    const password = ref('');  
    const isSubmitting = ref(false);  
    const successMessage = ref('');  
    const errorMessage = ref('');  
  
    const login = async () => {  
      isSubmitting.value = true;  
      successMessage.value = '';  
      errorMessage.value = '';  
  
      if (username.value === '咖喱饭' && password.value === 'man') {  
        successMessage.value = '恭喜你成功登录秘密基地，准备起飞！';  
        await router.push('/mine'); 
        successMessage.value = ''; 
      } else {  
        errorMessage.value = '用户名或密码错误，看来你不是村里人';  
      }  
  
      isSubmitting.value = false;  
    };  
  
    return {  
      username,  
      password,  
      login,  
      isSubmitting,  
      successMessage,  
      errorMessage,  
    };  
  },  
};  
</script>
  
<style scoped>  
.login-page {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  height: 400px;  
  width: 500px;
  background-color: #f0f0f0;  
}  
  
h1 {  
  text-align: center;  
  margin-bottom: 20px; 
  font-size: 30px; 
}  
  
form {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
}  
  
input {  
  margin-bottom: 10px;  
  padding: 5px;  
  width: 300px;
}  
  
button {  
  padding: 10px 20px;  
  cursor: pointer;  
}  
  
.error-message {  
  color: red;  
  margin-top: 10px;  
}  
</style>
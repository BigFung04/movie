import { createRouter, createWebHashHistory } from 'vue-router';  
import ChannelsView from '@/views/ChannelsView.vue';  
import MineView from '@/views/MineView.vue';  
import DiscoverView from '@/views/DiscoverView.vue'; 
import Card from '@/views/Card.vue';
import VideoPage from '@/views/VideoPage.vue';
import Login from '@/views/Login.vue';
const routes = [  
  {  
    path: '/',  
    redirect: '/discover'  
  },  
  {  
    path: '/discover',  
    name: 'Discover',  
    component: DiscoverView,  
  },  
  {  
    path: '/channels',  
    name: 'Channels',  
    component: ChannelsView,  
  },  
  {  
    path: '/mine',  
    name: 'Mine',  
    component: MineView,
  } ,
  {  
    path: '/card/:id',
    name: 'Card',  
    component: Card,  
    props: true 
  }, 
    {
      path: '/video',
      component: VideoPage
    },
    {  
      path: '/login',  
      name: 'Login',  
      component: Login  
    } ,
   // 在路由配置数组中增加如下一行
{
  path: '/video/:id',
  name: 'VideoPage',
  component: VideoPage
},
 


];  
  
const router = createRouter({  
  history: createWebHashHistory(),  
  routes  
});  
  
export default router;
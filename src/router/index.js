import { createRouter, createWebHashHistory } from 'vue-router';  
import Channelpage from '@/views/Channelpage.vue';  
import MineView from '@/views/Personalpage.vue';  
import Discoverpage from '@/views/Discoverpage.vue'; 
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
    component: Discoverpage,  
  },  
  {  
    path: '/channels',  
    name: 'Channels',  
    component: Channelpage,  
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
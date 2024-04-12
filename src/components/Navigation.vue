<template>
  <nav class="navigation-bar">
    <div class="navigation-wrapper">
      <ul class="nav-links">
        <router-link to="/discover" class="nav-link">发现</router-link>
        <router-link to="/channels" class="nav-link">频道</router-link>
        <router-link to="/mine" class="nav-link">我的</router-link>
      </ul>

      <div class="search-container">
        <div class="search-input-group">
          <input type="text" v-model="searchQuery" placeholder="搜索" @focus="showPanel = true"
            @blur="hidePanelOnDelay" />
          <button @click="showPanel = false">取消</button>
        </div>

        <transition name="fade">
          <div class="search-panel" v-if="showPanel">
            <div class="search-panel-header">
              <h3 class="panel-title">筛选结果</h3>
            </div>

            <div class="search-panel-body">
              <div class="search-panel-buttons">
                <button v-for="(option, key) in contentOptions" :key="key" @mouseover="displayContent = option.value"
                  @click="displayContent = option.value">
                  {{ key }}
                </button>
              </div>

              <div class="content-section" v-if="displayContent">
                <div v-if="displayContent === 'drama'" class="content-dramas">
                  <div class="content-buttons">
                    <button v-for="drama in dramas" :key="drama" @click="handleDramaClick(drama)">
                      {{ drama }}
                    </button>
                  </div>
                </div>

                <div v-if="displayContent === 'sorted'" class="content-sorted">
                  <!-- Add your button content here -->
                </div>

                <div v-if="displayContent === 'channels'" class="content-channels">
                  <div class="content-buttons">
                    <button v-for="channel in channels" :key="channel" @click="handleChannelClick(channel)">
                      {{ channel }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref, onUnmounted } from 'vue';
export default {
  name: 'Navigation',
  setup() {
    const searchQuery = ref('');
    const showPanel = ref(false);
    const hidePanelTimeout = ref(null);
    const displayContent = ref('');
    const contentOptions = ref({
      影片: { key: '影片', value: 'drama' },
      默认排序: { key: '默认排序', value: 'sorted' },
      全部频道: { key: '全部频道', value: 'channels' }
    });
    const dramas = ref(['飞驰人生2', '星汉灿烂 月生沧海', '苍兰诀', '要久久爱', '长相思', '宁安如梦', '云之羽', '归路']);
    const sorted = ref(['飞驰认识2', '星汉灿烂 月生沧海', '苍兰诀', '要久久爱', '长相思', '宁安如梦', '云之羽', '归路']);
    const channels = ref([
      '全部频道', '创意', '励志', '搞笑', '运动', '旅行', '爱情', '广告',
      '动画', '剧情', '音乐', '科幻', '记录', '预告', '混剪', '实验',
      '生活', '时尚', '汽车', '旅游', '美食'
    ]);
    const hidePanelOnDelay = () => {
      clearTimeout(hidePanelTimeout.value);

    };
    const handleDramaClick = (drama) => {
      console.log(`点击了影片: ${drama}`);
    };
    const handleSortedClick = (sortedOption) => {
      console.log(`点击了排序: ${sortedOption}`);
      if (sortedOption.value === 'sorted') {
        dramas.value.sort();
      }
    };
    function handleChannelClick(channel) {
      console.log(`点击了频道: ${channel}`);
    }
    onUnmounted(() => {
      clearTimeout(hidePanelTimeout.value);
    });
    const showPanelOnAction = () => {
      showPanel.value = true;
      clearTimeout(hidePanelTimeout.value);
    };
    onUnmounted(() => {
      clearTimeout(hidePanelTimeout.value);
    });
    return {
      searchQuery,
      showPanel,
      hidePanelOnDelay,
      displayContent,
      contentOptions,
      dramas,
      sorted,
      channels,
      handleDramaClick,
      handleSortedClick,
      handleChannelClick,
      showPanelOnAction,
      hidePanelOnDelay,
    };
  }
};

</script>

<style scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.nav-links {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-right: auto;
  font-size: px;
}

.nav-link {
  color: #fff;
  font-size: 1.333em;
  font-weight: 500;
  line-height: 60px;
  padding: 0 1rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #f4f4f4;
  }
}

.center-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
}

.search-container {
  position: fixed;
  width: 100%;
  top: 20px;
  right: 50px;
  max-width: 300px;
  margin: 20px;
 
}

.search-input-group {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  
}

.search-input-group input {
  flex: 1;
  height: 36px;
  padding: 0 1rem;
  background-color: #333;
  border: none;
  border-radius: 4px 0 0 4px;
  color: #fff;
  font-size: 0.875em;
  outline: none;
  background-color: rgb(228, 231, 230);
}

.search-input-group button {
  height: 36px;
  padding: 0 1rem;
  background-color: #333;
  border: none;
  border-radius: 0 4px 4px 0;
  color: #fff;
  font-size: 0..jpgem;
  cursor: pointer;
  outline: none;
  background-color: rgb(128, 128, 128);
}

.search-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 300px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: auto;
  z-index: 1000;
  transition: transform 0.3s ease;

  &.hidden {
    transform: translateY(-100%);
  }
}

.search-panel-header {
  padding: 8px 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eaeaea;
}

.panel-title {
  color: #666;
  font-size: 0.875em;
  font-weight: 500;
  margin: 0;
}

.search-panel-buttons {
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
  border-bottom: 1px solid #eaeaea;
}

.search-panel-buttons button {
  flex: 0 0 calc(33.33% - 10px);
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 10px 8px;
  background-color: #f8f8f8;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  color: #666;
  font-size: 0.875em;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #ebebeb;
    border-color: #d6d6d6;
    color: #444;
  }

  &:last-child {
    margin-right: 0;
  }
}

.content-section {
  padding: 8px 16px;
}

.content-dramas .content-buttons,
.content-channels .content-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}

.content-buttons button {
  height: 36px;
  padding: 0 1rem;
  background-color: #f8f8f8;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  color: #666;
  font-size: 0.875em;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #ebebeb;
    border-color: #d6d6d6;
    color: #444;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
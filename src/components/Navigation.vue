<template>
  <nav class="navigation-bar">
    <div class="navigation-wrapper">
      <ul class="nav-links">
        <router-link to="/discover" class="nav-link">发现</router-link>
        <router-link to="/channels" class="nav-link">频道</router-link>
        <router-link to="/mine" class="nav-link">个人</router-link>
      </ul>

      <div class="search-container">
        <div class="search-input-group">
          <input type="text" v-model="searchQuery" placeholder="搜索" @focus="showPanel = true"
            @blur="hidePanelOnDelay" />
          <button class="cancel-button" @click="showPanel = false">取消</button>
        </div>

        <transition name="fade">
          <div class="search-panel" v-if="showPanel">
            <div class="search-panel-header">
              <h3 class="panel-title">筛选结果</h3>
            </div>

            <div class="search-panel-body">
              <div class="search-panel-buttons">
                <button v-for="(option, key) in contentOptions" :key="key" @click="displayContent = option.value">
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
      排序: { key: '排序', value: 'sorted' },
      全部频道: { key: '全部频道', value: 'channels' }
    });
    const dramas = ref(['敢死队', '热烈', '星际迷航', '天下无双', '大路朝天', '闪闪亮星星', '阿飞正传', '智取威虎山']);
    const sorted = ref(['敢死队', '热烈', '星际迷航', '天下无双', '大路朝天', '闪闪亮星星', '阿飞正传', '智取威虎山']);
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
@media (max-width: 768px) {
  .navigation-bar {
    height: 160px;
    background: linear-gradient(135deg, hsl(191, 69%, 75%), #f1c3e6);
  }

  .nav-links {
    font-size: 22px;
  }

  .nav-link {
    padding: 0 1.5rem;
  }

  .search-container {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .search-input-group input {
    height: 30px;
    font-size: 12px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
  }

  .cancel-button {
    height: 30px;
    font-size: 12px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 6px 6px 6px 6px;
    background-color: #f8f8f8;
    cursor: pointer;
    outline: none;
  }
  .cancel-button:hover {
    background-color: #ebebeb;
  }

  .search-panel {
    top: calc(100% + 5px);
    width: 250px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow: auto;
  }

  .search-panel-header {
    padding: 8px 16px;
    background-color: #f8f8f8;
    border-radius: 8px 8px 0 0;
  }

  .panel-title {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  .search-panel-buttons button {
    padding: 8px;
    font-size: 12px;
    border-radius: 4px;
    background-color: #f8f8f8;
    border: 1px solid #eaeaea;
    margin: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .search-panel-buttons button:hover {
    background-color: #ebebeb;
  }

  .content-buttons button {
    height: 30px;
    padding: 0.5rem;
    font-size: 12px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #f8f8f8;
    margin: 0.5rem;
    transition: background-color 0.3s ease;
  }
  .content-buttons button:hover {
    background-color: #ebebeb;
  }
}
</style>

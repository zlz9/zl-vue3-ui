<template>
  <div class="z-search-shadow" @click="hiddenCard"></div>
  <div class="z-search">
    <el-input
      :placeholder="searchData"
      v-model="title"
      @focus="focus"
      @keyup.enter="search"
    >
      <!-- 搜索图标 -->
      <template #suffix>
        <div @click="search">
          <svg
            t="1676443423033"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2749"
            width="32"
            height="32"
          >
            <path
              d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"
              fill="#bfbfbf"
              p-id="2750"
            ></path>
          </svg>
        </div>
      </template>
      <template #prefix
        ><svg
          t="1676428221436"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2753"
          width="20"
          height="20"
        >
          <path
            d="M423.477333 938.666667S45.045333 855.424 214.186667 442.282667c0 0 38.4 45.909333 33.12 68 0 0 30.101333-104.277333 95.072-166.570667C398.165333 290.186667 454.848 139.712 402.570667 85.333333c0 0 258.933333 54.378667 287.754666 326.378667 0 0 33.12-86.666667 101.12-95.232 0 0-20.906667 47.616 0 119.04 0 0 214.485333 367.146667-155.157333 491.242667 0 0 110.805333-125.813333-124.181333-341.717334 0 0-55.402667 115.626667-88.533334 156.373334-0.096 0.106667-92.522667 103.722667-0.096 197.248z"
            fill="#d81e06"
            p-id="2754"
          ></path>
        </svg>
      </template>
    </el-input>
    <el-card shadow="always" v-show="isShow">
      <!-- 历史搜索 -->
      <div class="z-search-history" v-show="historySearch.length">
        <div class="z-search-head">
          <div class="z-search-title">
            <strong>历史</strong>
            &nbsp;
            <svg
              t="1676463008786"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2816"
              width="20"
              height="20"
            >
              <path
                d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m42.666667-486.869333V298.538667C554.666667 275.328 535.552 256 512 256c-23.722667 0-42.666667 19.029333-42.666667 42.538667v256.256a41.984 41.984 0 0 0 12.202667 29.866666l121.258667 121.258667a42.368 42.368 0 0 0 60.032-0.298667 42.666667 42.666667 0 0 0 0.298666-60.032L554.666667 537.130667z"
                fill="#d81e06"
                p-id="2817"
              ></path>
            </svg>
          </div>
          <div class="z-search-clear">
            <el-tooltip
              class="box-item"
              effect="dark"
              content="删除全部"
              placement="top"
            >
              <el-button
                type="danger"
                :icon="Delete"
                circle
                @click="clearAll"
              />
            </el-tooltip>
          </div>
        </div>

        <div class="z-search-box" v-show="historySearch.length">
          <div class="z-search-item" v-for="(item, index) in historySearch">
            <el-tag
              @click="checkTitle(item)"
              class="mx-1"
              closable
              @close="close(index)"
              :type="typeList[Math.round(Math.random() * 4)]"
              >{{ item }}</el-tag
            >
          </div>
        </div>
      </div>
      <!-- 排行榜 -->
      <div class="z-search-top">
        <div class="z-top-head">
          <div class="z-top-title">
            <div>
              <strong> 热门</strong>
            </div>
            <svg
              t="1676436440355"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7170"
              width="25"
              height="23"
            >
              <path
                d="M423.477333 938.666667S45.045333 855.424 214.186667 442.282667c0 0 38.4 45.909333 33.12 68 0 0 30.101333-104.277333 95.072-166.570667C398.165333 290.186667 454.848 139.712 402.570667 85.333333c0 0 258.933333 54.378667 287.754666 326.378667 0 0 33.12-86.666667 101.12-95.232 0 0-20.906667 47.616 0 119.04 0 0 214.485333 367.146667-155.157333 491.242667 0 0 110.805333-125.813333-124.181333-341.717334 0 0-55.402667 115.626667-88.533334 156.373334-0.096 0.106667-92.522667 103.722667-0.096 197.248z"
                fill="#d81e06"
                p-id="7171"
                z-search-item
              ></path>
            </svg>
          </div>
          <div class="z-top-box">
            <div class="z-top-item" v-for="(item, index) in hotList">
              <div style="width: 30px">
                {{ index + 1 }}
              </div>
              <div @click="checkTitle(item)">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "zSearch",
};
</script>
<script setup>
import { Delete } from "@element-plus/icons-vue";
import { reactive, ref, computed } from "vue";
let typeList = reactive(["success", "warning", "danger"]);
let searchData = ref("");
const title = ref("");
const isShow = ref(false);
let historyList = reactive([]);
let historySearch = reactive(
  JSON.parse(localStorage.getItem("historyList")) || []
);
console.log(historySearch);
let index = ref(0);
const focus = () => {
  isShow.value = true;
};
const emits = defineEmits(["search", "checkTitle"]);
const hiddenCard = () => {
  isShow.value = false;
};
const props = defineProps({
  listData: {
    type: Array,
    default: [],
  },
  hotList: {
    type: Array,
    default: [],
  },
});
const { listData, hotList } = props;
searchData.value = listData[index.value];
setInterval(() => {
  /**
   * 每五秒循环一次给searchData赋值
   */
  searchData.value = listData[index.value];
  if (index.value !== listData.length) {
    index.value++;
  } else {
    index.value = 0;
  }
}, 5000);
// 搜素
const search = () => {
  if (title.value !== "") {
    emits("search", title.value);
    setLocalHistory();
    if (!historySearch.includes(title.value)) {
      historySearch.unshift(title.value);
    }
    title.value = "";
  }
};

// 历史搜素
const setLocalHistory = () => {
  if (!historySearch.includes(title.value)) {
    historyList.unshift(title.value);
    localStorage.setItem("historyList", JSON.stringify(historyList));
  } else {
    let i = historyList.indexOf(title.value);
    historyList.splice(i, 1);
    historyList.unshift(title.value);
    localStorage.setItem("historyList", JSON.stringify(historyList));
  }
};
// 关闭标签
const close = (index) => {
  historySearch.splice(index, 1);
  localStorage.setItem("historyList", JSON.stringify(historySearch));
};
const clearAll = () => {
  historyList = [];
  historySearch = [];
  localStorage.removeItem("historyList");
};
const checkTitle = (item) => {
  emits("checkTitle", item);
};
</script>

<style lang="scss" scoped>
.z-search-box {
  display: flex;
  flex-wrap: wrap;
}
.z-search-item {
  position: relative;
  margin: 5px;
}
.z-top-box {
  position: relative;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .z-top-item {
    font-family: $font-family;
    font-weight: 600;
    display: flex;
    height: 32px;
    line-height: 32px;
    position: relative;
    width: 48%;
    font-size: 15px;
    left: 10px;
    box-sizing: border-box;
    &:hover {
      background-color: rgb(255 255 255);
      box-shadow: 2px -1px 9px 1px rgb(184 211 211 / 90%); /*blur值为5px*/
    }
  }
}
.z-search-top {
  position: relative;
  top: 5px;
}
.z-top-title {
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
}
.z-search-history {
  .z-search-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    .z-search-title {
      display: flex;
      align-items: center;
    }
    .z-search-clear {
    }
  }
}
.z-search-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
}
.z-search {
  position: relative;
  width: 400px;
  margin: 0 auto;
  z-index: 1;
  cursor: pointer;
}
</style>

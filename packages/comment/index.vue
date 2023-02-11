<template>
  <div
    class="z-comment"
    :style="{
      backgroundColor: commentStyle.color,
      width: `${commentStyle.width}px`,
      height: `${commentStyle.height}px`,
    }"
  >
    <!--遮罩层 -->
    <div class="shadow" @click="isShowShadow" v-if="shadow"></div>
    <div
      class="z-comment-box"
      :style="{
        backgroundColor: commentStyle.color,
        width: `${commentStyle.width * 0.9}px`,
        minHeight: `${commentStyle.height * 0.9}px`,
      }"
    >
      <h2>评论</h2>
      <!-- 输入框 -->
      <div class="z-comment-user">
        <div class="avatar">
          <img :src="user.avatar" alt="" />
        </div>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <el-input
          v-model="inputText"
          :autosize="{ minRows: 4, maxRows: 6 }"
          resize="none"
          type="textarea"
          placeholder="请输入您的评论"
        />
      </div>
      <div class="z-comment-btn">
        <V3Emoji @click-emoji="appendText" :options-name="optionsName" />
        <div class="btn">
          <el-button type="primary" @click="submit">发送</el-button>
        </div>
      </div>
      <!-- 评论列表 -->
      <h2>全部评论</h2>
      <div class="z-comment-list" v-for="(item, index) in commentData">
        <!--一级评论 -->
        <div class="z-comment-item-one">
          <div class="user">
            {{ item.user.nickName }}

            <div class="region">来自四川</div>
          </div>
          <div class="avatar">
            <img :src="item.user.avatar" alt="" />
          </div>
          <div class="content">{{ item.content }}</div>
          <!-- 尾部 -->
          <div class="z-comment-footer">
            <div class="z-comment-like">
              <!-- 点赞 -->
              <svg
                t="1676082931106"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2688"
                width="20"
                height="20"
              >
                <path
                  d="M194.792475 478.69343c16.167215 0 29.330002-13.163811 29.330002-29.346375 0-16.092513-13.015432-29.212322-29.801746-29.212322-0.086981 0-0.177032 0-0.264013 0l-60.606333 0.177032c-1.560542-0.206708-3.149736-0.325411-4.76963-0.325411-21.291932 0-38.636972 17.537422-38.636972 39.09439l-0.323365 423.853427c0 21.645996 16.9613 38.578644 38.636972 38.578644l1.677199 0.057305c0.707105 0.029676 1.385557 0.059352 2.032286 0.059352 0.823761 0 1.64957-0.029676 1.826602-0.11768l59.926858 0.086981c0.559748 0 1.001817-0.11768 1.089821-0.11768 0 0-0.029676 0-0.116657 0.057305l3.76986-0.147356 0-0.382717c13.517875-2.236947 23.64656-13.84124 23.64656-27.799136 0-13.987572-10.129708-25.589818-23.64656-27.828812l0-0.766456-49.827849 0 1.413186-385.92356L194.792475 478.69036z"
                  fill="#dbdbdb"
                  p-id="2689"
                ></path>
                <path
                  d="M918.228001 436.301947c-18.199501-29.66974-45.204551-44.821835-82.22163-46.322002-1.883907-0.25071-3.799536-0.412392-5.77247-0.412392l-195.744149-0.648776c13.398148-40.359196 20.732184-83.750449 20.732184-122.740462 0-27.255761-3.00545-54.686507-8.894577-81.543178l-1.206478-3.196809-0.089028 0.01535c-12.161994-46.837748-53.477982-79.259158-101.626585-79.259158-55.393611 0-97.18032 46.248324-97.18032 107.576087l-0.059352 3.047406c-0.057305 2.222621-0.116657 4.40124 0.059352 6.16849-2.796696 101.715613-83.869153 187.397041-188.559517 199.324698l-3.358491 0.36839-0.76441 274.43128 0 228.491994 13.930267 0.005117 0.587378 0.11154 3.179412-0.027629 0.01535-0.081864 485.653959 0.198521 8.685823-0.236384c19.84907 0 31.038924-5.03569 48.621371-16.344247 16.22452-10.482749 29.359678-25.266453 37.751812-42.316781 2.562359-3.76986 4.418636-7.862062 5.565762-12.251022l75.30101-336.657506c1.089821-4.225231 1.472538-8.643867 1.149173-12.56006C935.660023 478.42737 930.212964 455.900308 918.228001 436.301947zM879.148961 488.807788l-0.912789 3.799536 0.295735 0.074701-80.129992 355.2387-0.148379 0.353041c-2.296299 5.536087-6.15314 10.160407-11.101849 13.340843-3.415796 2.209318-7.185656 3.622504-11.161201 4.239558-0.470721-0.057305-0.941442-0.057305-1.413186-0.057305l-3.03308 0.086981-462.84344-0.530073-0.177032-392.299781c79.540567-35.986609 148.155295-73.959455 183.080735-167.79868l0.295735 0.074701 1.119497-3.328815c3.709485-11.263531 6.596232-22.350031 8.598842-32.909527 5.447059-28.577872 5.212722-56.422034 5.183046-58.041928-1.766226-13.502525 1.206478-24.738427 8.80555-33.394574 8.598842-9.777691 21.673625-14.151301 30.744211-14.151301 22.586414 0.766456 45.526893 30.966269 45.61592 48.163953 0.029676 0.26606 5.38873 26.945699 5.418406 55.186903 0.057305 27.65178-2.651386 45.277206-3.858888 51.828412l-0.500397 0-0.589424 3.062755c-5.595438 29.522384-15.518438 57.794287-29.41903 84.003206l-0.972141 2.856048 0.118704 0.132006c-1.885953 4.696975-2.856048 9.643638-2.856048 14.709003 0 25.032116 27.121707 25.032116 41.697681 25.032116l233.381351 0.264013 7.15598 0.221034c1.266853 0.045025 2.503007 0.089028 3.592828 0.118704l0 0.425695 5.538133-0.248663c10.453073 0 19.937075 5.344728 25.412786 14.296611C880.709503 471.080032 881.829 480.283648 879.148961 488.807788z"
                  fill="#dbdbdb"
                  p-id="2690"
                ></path>
              </svg>
              &nbsp;&nbsp;{{ item.likeCount }}
            </div>
            <!-- 取消点赞 -->
            <div class="z-comment-dislike">
              <svg
                t="1676082989300"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3569"
                width="20"
                height="20"
              >
                <path
                  d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4-8.3-3.6-17.2-5.4-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81z m627.2 160.4H496.8l9.6 198.4c0.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7-19.6-0.1-36.9-13.4-42.2-32.3L329 459.2V172h415.4c20.4 9.2 33.6 29.4 33.6 51.8 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 19.1-11 37.5-28.8 48.4z"
                  p-id="3570"
                  fill="#cdcdcd"
                ></path>
              </svg>
            </div>

            <!-- 回复 -->
            <div class="z-comment-reply">
              <svg
                t="1676083010158"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4614"
                width="20"
                height="20"
              >
                <path
                  d="M517.85728 863.9488l-124.23168-144.62976H162.14016V229.00736h711.84384v490.31168H645.24288l-127.3856 144.62976zM203.10016 678.35904h209.32608l105.84064 123.1872 108.46208-123.1872h206.29504V269.96736H203.10016v408.39168z"
                  fill="#cdcdcd"
                  p-id="4615"
                ></path>
                <path
                  d="M293.10976 450.6624h72.97024v40.96h-72.97024zM481.5872 450.6624h72.97024v40.96h-72.97024zM670.06464 450.6624h72.97024v40.96h-72.97024z"
                  fill="#cdcdcd"
                  p-id="4616"
                ></path>
              </svg>
              &nbsp;<span @click="showReplayInput(index)">回复</span>
            </div>
          </div>

          <!-- 回复框 -->
          <div
            class="z-comment-reply-content"
            :class="{ showInput: index == showInput }"
          >
            <el-input
              v-model="inputText"
              :autosize="{ minRows: 2, maxRows: 4 }"
              resize="none"
              type="textarea"
              :placeholder="'回复：' + item.user.nickName"
            />
            <div class="z-comment-btn">
              <V3Emoji @click-emoji="appendText" :options-name="optionsName" />
              <div class="btn">
                <el-button type="primary">发送</el-button>
              </div>
            </div>
          </div>
          <!-- 二级评论 -->
          <div class="z-comment-list-two">
            <div>
              <div
                class="z-comment-item-two"
                v-for="(subItem, index) in item.children"
              >
                <div class="user">
                  {{ subItem.user.nickName }}
                  <div class="region">来自四川</div>
                </div>
                <div class="avatar">
                  <img :src="subItem.user.avatar" alt="" />
                </div>
                <div class="content">{{ subItem.content }}</div>
                <div class="z-comment-footer">
                  <div class="z-comment-like">
                    <!-- 点赞 -->
                    <svg
                      t="1676082931106"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2688"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M194.792475 478.69343c16.167215 0 29.330002-13.163811 29.330002-29.346375 0-16.092513-13.015432-29.212322-29.801746-29.212322-0.086981 0-0.177032 0-0.264013 0l-60.606333 0.177032c-1.560542-0.206708-3.149736-0.325411-4.76963-0.325411-21.291932 0-38.636972 17.537422-38.636972 39.09439l-0.323365 423.853427c0 21.645996 16.9613 38.578644 38.636972 38.578644l1.677199 0.057305c0.707105 0.029676 1.385557 0.059352 2.032286 0.059352 0.823761 0 1.64957-0.029676 1.826602-0.11768l59.926858 0.086981c0.559748 0 1.001817-0.11768 1.089821-0.11768 0 0-0.029676 0-0.116657 0.057305l3.76986-0.147356 0-0.382717c13.517875-2.236947 23.64656-13.84124 23.64656-27.799136 0-13.987572-10.129708-25.589818-23.64656-27.828812l0-0.766456-49.827849 0 1.413186-385.92356L194.792475 478.69036z"
                        fill="#dbdbdb"
                        p-id="2689"
                      ></path>
                      <path
                        d="M918.228001 436.301947c-18.199501-29.66974-45.204551-44.821835-82.22163-46.322002-1.883907-0.25071-3.799536-0.412392-5.77247-0.412392l-195.744149-0.648776c13.398148-40.359196 20.732184-83.750449 20.732184-122.740462 0-27.255761-3.00545-54.686507-8.894577-81.543178l-1.206478-3.196809-0.089028 0.01535c-12.161994-46.837748-53.477982-79.259158-101.626585-79.259158-55.393611 0-97.18032 46.248324-97.18032 107.576087l-0.059352 3.047406c-0.057305 2.222621-0.116657 4.40124 0.059352 6.16849-2.796696 101.715613-83.869153 187.397041-188.559517 199.324698l-3.358491 0.36839-0.76441 274.43128 0 228.491994 13.930267 0.005117 0.587378 0.11154 3.179412-0.027629 0.01535-0.081864 485.653959 0.198521 8.685823-0.236384c19.84907 0 31.038924-5.03569 48.621371-16.344247 16.22452-10.482749 29.359678-25.266453 37.751812-42.316781 2.562359-3.76986 4.418636-7.862062 5.565762-12.251022l75.30101-336.657506c1.089821-4.225231 1.472538-8.643867 1.149173-12.56006C935.660023 478.42737 930.212964 455.900308 918.228001 436.301947zM879.148961 488.807788l-0.912789 3.799536 0.295735 0.074701-80.129992 355.2387-0.148379 0.353041c-2.296299 5.536087-6.15314 10.160407-11.101849 13.340843-3.415796 2.209318-7.185656 3.622504-11.161201 4.239558-0.470721-0.057305-0.941442-0.057305-1.413186-0.057305l-3.03308 0.086981-462.84344-0.530073-0.177032-392.299781c79.540567-35.986609 148.155295-73.959455 183.080735-167.79868l0.295735 0.074701 1.119497-3.328815c3.709485-11.263531 6.596232-22.350031 8.598842-32.909527 5.447059-28.577872 5.212722-56.422034 5.183046-58.041928-1.766226-13.502525 1.206478-24.738427 8.80555-33.394574 8.598842-9.777691 21.673625-14.151301 30.744211-14.151301 22.586414 0.766456 45.526893 30.966269 45.61592 48.163953 0.029676 0.26606 5.38873 26.945699 5.418406 55.186903 0.057305 27.65178-2.651386 45.277206-3.858888 51.828412l-0.500397 0-0.589424 3.062755c-5.595438 29.522384-15.518438 57.794287-29.41903 84.003206l-0.972141 2.856048 0.118704 0.132006c-1.885953 4.696975-2.856048 9.643638-2.856048 14.709003 0 25.032116 27.121707 25.032116 41.697681 25.032116l233.381351 0.264013 7.15598 0.221034c1.266853 0.045025 2.503007 0.089028 3.592828 0.118704l0 0.425695 5.538133-0.248663c10.453073 0 19.937075 5.344728 25.412786 14.296611C880.709503 471.080032 881.829 480.283648 879.148961 488.807788z"
                        fill="#dbdbdb"
                        p-id="2690"
                      ></path>
                    </svg>
                    &nbsp;&nbsp;{{ subItem.likeCount }}
                  </div>
                  <!-- 取消点赞 -->
                  <div class="z-comment-dislike">
                    <svg
                      t="1676082989300"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3569"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4-8.3-3.6-17.2-5.4-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81z m627.2 160.4H496.8l9.6 198.4c0.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7-19.6-0.1-36.9-13.4-42.2-32.3L329 459.2V172h415.4c20.4 9.2 33.6 29.4 33.6 51.8 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 19.1-11 37.5-28.8 48.4z"
                        p-id="3570"
                        fill="#cdcdcd"
                      ></path>
                    </svg>
                  </div>

                  <!-- 回复 -->
                  <div class="z-comment-reply">
                    <svg
                      t="1676083010158"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4614"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M517.85728 863.9488l-124.23168-144.62976H162.14016V229.00736h711.84384v490.31168H645.24288l-127.3856 144.62976zM203.10016 678.35904h209.32608l105.84064 123.1872 108.46208-123.1872h206.29504V269.96736H203.10016v408.39168z"
                        fill="#cdcdcd"
                        p-id="4615"
                      ></path>
                      <path
                        d="M293.10976 450.6624h72.97024v40.96h-72.97024zM481.5872 450.6624h72.97024v40.96h-72.97024zM670.06464 450.6624h72.97024v40.96h-72.97024z"
                        fill="#cdcdcd"
                        p-id="4616"
                      ></path>
                    </svg>
                    &nbsp;<span @click="showSubReplayInput(index)">回复</span>
                  </div>
                </div>

                <!-- 回复框 -->
                <div
                  class="z-comment-reply-content"
                  :class="{ showSubInput: index == showSubInput }"
                >
                  <el-input
                    v-model="inputText"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    resize="none"
                    type="textarea"
                    :placeholder="'回复：' + subItem.user.nickName"
                  />
                  <div class="z-comment-btn">
                    <V3Emoji
                      @click-emoji="appendText"
                      :options-name="optionsName"
                    />
                    <div class="btn">
                      <el-button type="primary">发送</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "z-comment",
};
</script>
<script setup>
import V3Emoji from "vue3-emoji";
import "vue3-emoji/dist/style.css";
import { ref, nextTick } from "vue";
const showInput = ref(null);
const shadow = ref(false);
const showSubInput = ref(null);
const emit = defineEmits();
const isShowShadow = () => {
  showInput.value = null;
  showSubInput.value = null;
  shadow.value = !shadow.value;
};
const showSubReplayInput = (index) => {
  showSubInput.value = index;
  shadow.value = !shadow.value;
};
const optionsName = {
  "Smileys & Emotion": "笑脸&表情",
  "Food & Drink": "食物&饮料",
  "Animals & Nature": "动物&自然",
  "Travel & Places": "旅行&地点",
  "People & Body": "人物&身体",
  Objects: "物品",
  Symbols: "符号",
  Flags: "旗帜",
  Activities: "活动",
};

const showReplayInput = (index) => {
  showInput.value = index;
  shadow.value = !shadow.value;
};
const inputText = ref("");
const appendText = (val) => {
  inputText.value += val;
};
/**
 * 属性
 * 1.宽高
 * 2.颜色
 * 3.整体数据
 * 4.用户
 */
const props = defineProps({
  // 样式
  commentStyle: {
    color: {
      type: String,
      default: "#FFF",
    },
    width: {
      type: Number,
      default: "800",
    },
    height: {
      type: Number,
      default: "600",
    },
  },
  // 整体数据
  commentData: {
    type: Array,
    default: [],
  },
  //用户
  user: {
    type: Object,
    default: {},
  },
  //发布评论
});
const { user } = props;
const submit = () => {
  let temp = 20;
  let comment = {
    id: 1,
    likeCount: 0,
    user: {
      id: user.id,
      nickName: user.nickName,
      avatar: user.avatar,
    },
    createTime: 1676028810070,
    parentId: 17,
    content: inputText,
    likeCount: 0,
  };
  console.log(comment);
  emit("submit", comment);
  setTimeout(() => {
    inputText.value = "";
  }, 200);
};
</script>

<style lang="scss">
.shadow {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
}
.z-comment-reply-content {
  position: relative;
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  display: none;
}
.showInput {
  display: block;
}
.showSubInput {
  display: block;
}
.z-comment-list-two {
  position: relative;
  left: 40px;
  box-shadow: inset -2px -1px 8px 3px #969999;
  padding: auto;
  top: 15px;
}
.user {
  font-weight: 900;
  font-size: 12px;
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 4px;
  position: relative;
  left: 40px;
  top: 10px;
  width: 140px;
}
.z-comment-footer {
  justify-content: space-around;
  cursor: pointer;
  width: 200px;
  display: flex;
  position: relative;
  bottom: 20px;
  .z-comment-like .z-comment-dislike .z-comment-reply {
  }
  .z-comment-like {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    width: 60px;
    height: 20px;
    display: flex;
    align-items: flex-end;
  }
  .z-comment-dislike {
    width: 30px;
    height: 20px;
  }
  .z-comment-reply {
    font-size: 12px;
    display: flex;
    width: 50px;
    height: 20px;
    align-items: center;
  }
}
.avatar {
  position: relative;
  left: 4px;
  width: 50px;
  width: 50px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    .z-comment-item-one {
    }
  }
}
.z-comment {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .el-textarea :focus {
    box-shadow: -1px 12px 0px #4e4e4e;
    border: 2px solid #2d52d3;
  }

  .z-comment-box {
    padding: 4px;
    background-color: rgb(132, 136, 136);
    .z-comment-user {
      display: flex;
      .avatar {
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }
    .z-comment-btn {
      width: 120px;
      display: flex;
      position: relative;
      top: 5px;
      left: 80%;
    }
  }
  .z-comment-list {
    .content {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 600px;
      height: 50px;
      font-size: 14px;
      position: relative;
      left: 10%;
      bottom: 35px;
      font-weight: 700;
    }
    .z-comment-item-two {
      .avatar {
        width: 40px;
        height: 40px;
      }
      .content {
        bottom: 20px;
      }
    }
  }
}
</style>

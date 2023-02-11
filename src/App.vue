<template>
  <div>
    <!-- 评论组件 -->
    <z-comment
      :commentStyle="commentStyle"
      :user="user"
      :commentData="commentData"
      @submit="submit"
    ></z-comment>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ElMessage } from "element-plus";
const user = reactive({
  id: 1,
  nickName: "小明",
  region: "四川",
  avatar:
    "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
});
// 提交信息
const submit = (aa) => {
  let comment = reactive(aa);
  commentData.unshift(JSON.parse(JSON.stringify(comment)));
  setTimeout(() => {
    ElMessage({ message: "评论成功!", type: "info" });
  }, 200);
};

const commentData = reactive([
  {
    id: 17,
    videoId: 5,
    likeCount: 12,
    user: {
      id: 1,
      nickName: "管理员",
      avatar:
        "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
    },
    toUser: null,
    createTime: 1676028810060,
    parentId: 0,
    content: "测试评论",
    likeCount: 2,
    children: [
      {
        id: 19,
        videoId: 5,
        likeCount: 12,
        user: {
          id: 1,
          nickName: "管理员",
          avatar:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          selfIntroduction: "虽然过去不能改变，未来可以。",
        },
        toUser: {
          id: 1,
          nickName: "管理员",
          avatar:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          selfIntroduction: "虽然过去不能改变，未来可以。",
        },
        createTime: 1676028810069,
        parentId: 17,
        content: "测试回复",
        likeCount: 1,
      },
      {
        id: 20,
        videoId: 5,
        likeCount: 12,
        user: {
          id: 1,
          nickName: "管理员",
          avatar:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          selfIntroduction: "虽然过去不能改变，未来可以。",
        },
        toUser: {
          id: 1,
          nickName: "管理员",
          avatar:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          selfIntroduction: "虽然过去不能改变，未来可以。",
        },
        createTime: 1676028810070,
        parentId: 17,
        content: "测试回复",
        likeCount: 1,
      },
      {
        id: 23,
        videoId: 5,
        likeCount: 12,
        user: {
          id: 1,
          nickName: "管理员",
          avatar:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          selfIntroduction: "虽然过去不能改变，未来可以。",
        },
        toUser: {
          id: 1,
          nickName: "管理员",
          avatar:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          selfIntroduction: "虽然过去不能改变，未来可以。",
        },
        createTime: 1676028810070,
        parentId: 17,
        content: "再次回复",
        likeCount: 0,
      },
    ],
  },
]);

const commentStyle = reactive({
  color: "rgb(132, 136, 136)",
  width: 1200,
  height: 1200,
});
</script>

<style lang="scss" scoped></style>

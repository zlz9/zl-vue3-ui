<template>
  <div>
    <!-- 评论组件 -->
    <z-comment
      :commentStyle="commentStyle"
      :user="user"
      :commentData="commentData"
      @submit="submit"
      @reply="reply"
      @like="like"
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
// 发布评论
const submit = (comment) => {
  console.log(comment);
};
// 回复
const reply = (comment) => {
  console.log(comment);
};
// 喜欢
const like = (comment) => {
  // 根据后端请求的状态码判断
  comment.likeCount += 1;
  comment.isLike = !comment.isLike;
  console.log(comment);
};
const commentData = reactive([
  {
    id: 17,
    likeCount: 12,
    user: {
      region: "来自四川",
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
    isLike: false,
    children: [
      {
        id: 19,
        likeCount: 12,
        user: {
          region: "来自四川",
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
        isLike: false,
      },
      {
        id: 20,
        likeCount: 12,
        user: {
          region: "来自四川",
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
        isLike: false,
      },
      {
        id: 23,
        likeCount: 12,
        user: {
          region: "来自四川",
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
        isLike: false,
      },
    ],
  },
  {
    id: 20,
    likeCount: 12,
    user: {
      region: "来自四川",
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
    isLike: false,
  },
]);

const commentStyle = reactive({
  theme: "light",
  width: 800,
  height: 1200,
});
</script>

<style lang="scss" scoped></style>

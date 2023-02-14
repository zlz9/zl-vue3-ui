# 评论组件

<demo src="../../demos/comment/index.vue" desc=""></demo>

# comment 属性

| 属性         | 说明               | 默认值                             |
| ------------ | ------------------ | ---------------------------------- |
| commentData  | 需要展示的评论内容 | -                                  |
| user         | 当前用户           | -                                  |
| commentStyle | 评论主题、宽、高   | width:800、height:1200、theme:dark |

# 事件

| 属性   | 说明             | 参数    | 返回值 |
| ------ | ---------------- | ------- | ------ |
| submit | 发布评论         | comment | void   |
| reply  | 回复             | comment | void   |
| like   | 点赞（取消点赞） | comment | void   |

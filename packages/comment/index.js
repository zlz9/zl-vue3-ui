import zComment from "./index.vue";
zComment.install = (app) => {
  app.component(zComment.name, zComment);
};

export default zComment;

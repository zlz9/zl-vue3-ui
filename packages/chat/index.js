import zChat from "./index.vue";
zChat.install = (app) => {
  app.component(zChat.name, zChat);
};

export default zChat;

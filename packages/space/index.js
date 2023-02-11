import zSpace from "./index.vue";
zSpace.install = (app) => {
  app.component(zSpace.name, zSpace);
};

export default zSpace;

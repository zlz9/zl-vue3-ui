import zSearch from "./index.vue";
zSearch.install = (app) => {
  app.component(zSearch.name, zSearch);
};

export default zSearch;

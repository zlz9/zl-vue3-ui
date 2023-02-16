import zChat from "./chat/index";
import zComment from "./comment/index";
import zSearch from "./search/index";
const components = [zChat, zComment, zSearch];
const install = (app) => {
  components.forEach((item) => {
    app.use(item);
  });
};
const ZUI = {
  install,
};
export { zChat, zComment, zSearch };
export default ZUI;

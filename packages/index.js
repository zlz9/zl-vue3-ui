import zChat from "./chat/index";
import zComment from "./comment/index";
import zSearch from "./search/index";
import zLoading from "./loading/index";
import ZVList from "./vList/index";
const components = [zChat, zComment, zSearch, zLoading, ZVList];
const install = (app) => {
  components.forEach((item) => {
    app.use(item);
  });
};
const ZUI = {
  install,
};
export { zChat, zComment, zSearch, zLoading, ZVList };
export default ZUI;

import zChat from "./chat/index";
import zComment from "./comment/index";
import zSearch from "./search/index";
import zLoading from "./loading/index";
const components = [zChat, zComment, zSearch, zLoading];
const install = (app) => {
  components.forEach((item) => {
    app.use(item);
  });
};
const ZUI = {
  install,
};
export { zChat, zComment, zSearch, zLoading };
export default ZUI;

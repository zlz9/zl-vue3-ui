import zButton from "./button/index";
import zInput from "./input/index";
import zTextArea from "./textarea/index";
import zSpace from "./space/index";
import zSelect from "./select/index";
import zChat from "./chat/index";
import zComment from "./comment/index";
const components = [
  zButton,
  zInput,
  zTextArea,
  zSpace,
  zSelect,
  zChat,
  zComment,
];
const install = (app) => {
  components.forEach((item) => {
    app.use(item);
  });
};
const ZUI = {
  install,
};
export { zButton, zInput, zTextArea, zSpace, zSelect, zChat, zComment };
export default ZUI;

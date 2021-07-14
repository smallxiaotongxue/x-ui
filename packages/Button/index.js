// 引入组件
import Button from "./src";

// 提供 install 安装方法，供按需引入
Button.install = function (Vue) {
  // 注册组件
  Vue.component(Button.name, Button);
};
// 暴露组件
export default Button;

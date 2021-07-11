// 定义插件

// 方法1:
// function MyPlugin(Vue) {
//   // 扩展Vue的功能

//   // 1. 扩展Vue的方法
//   Vue.globalMethod = function () {
//     console.log("globalMethod");
//   };
//   // 2. 扩展Vue的实例方法
//   Vue.prototype.$scopedMethod = function () {
//     console.log("$scopedMethod");
//   };
//   // 3. 扩展Vue的全局内容：指令
//   Vue.directive("upper-case", function (el, binding) {
//     el.textContent = binding.value.toUpperCase();
//   });
// }

// 方法2:
const MyPlugin = {
  install: function (Vue) {
    Vue.globalMethod = function () {
      console.log("globalMethod");
    };
    // 2. 扩展Vue的实例方法
    Vue.prototype.$scopedMethod = function () {
      console.log("$scopedMethod");
    };
    // 3. 扩展Vue的全局内容：指令
    Vue.directive("upper-case", function (el, binding) {
      el.textContent = binding.value.toUpperCase();
    });
  },
};

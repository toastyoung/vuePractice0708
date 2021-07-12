<template>
  <div>
    <h1>App...</h1>
    <Child :count="count" />
  </div>
</template>

<script>
import Child from "./views/Child";
/*
  组件间通信方法：props
    适用于父子组件
    使用：
      1. 父组件传递数据
        以标签属性方式传递  <Child :xxx="xxx" :yyy="yyy"/>
      2. 子组件声明接受
        props: ["count"],

        props: {
          count: Number,
        },

        props: {
          count: {
            type: Number,
            required: true, // 必须传递
            default: 11, // 默认值
            validator(val) {
            // 检验
              return val >= 18 && val <= 60;
            },
          },
        },
      3. 子组件使用(因为props会进行数据代理)
        this.xxx
*/
export default {
  name: "App",
  data() {
    return {
      count: 66,
    };
  },
  components: {
    Child,
  },
};
</script>
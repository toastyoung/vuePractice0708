<template>
  <div class="test">
    <p>{{ count }}</p>
    <button @click="count++">按钮</button>
    <Child></Child>
    <Child />
  </div>
</template>

<script>
import Child from "./views/Child";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Child,
  },
};
</script>

<style lang="less">
.test {
  height: 300px;
  background-color: aqua;
}
</style>
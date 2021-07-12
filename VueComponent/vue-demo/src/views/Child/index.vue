<template>
  <div>
    <h1>Child...</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "Child",
  // props: ["count"],
  // props: {
  //   count: Number,
  // },
  props: {
    count: {
      type: Number,
      // default: 111, //不传 =>默认值
      required: true, //必须传递
      validator(val) {
        return val >= 18; //传递的值需要符合要求
      },
    },
  },
};
</script>
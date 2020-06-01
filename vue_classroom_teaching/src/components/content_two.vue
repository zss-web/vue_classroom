<template>
  <div class="content-two">
    <div class="two_top">
      <slot name="h2"></slot>
      <slot name="p"></slot>
      <br />
      <slot name="fx_a"></slot>
    </div>
    <div class="two_down clearfix">
        <slot name="card"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content_two",
  data() {
    return {};
  }
};
</script>

<style scoped>
.content-two {
  margin: 30px auto;
  width: 960px;
}
.two_top {
  text-align: center;
  margin: 40px 0;
}
.two_top p {
  width: 100%;
  margin: 10px 0;
}

</style>
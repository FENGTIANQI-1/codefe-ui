<template>
  <div class="cf-form-item">
    <label
      class="cf-form-item-label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="cf-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  inject: ["Form"],
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scope>
.cf-form-item {
  margin-bottom: 25px;
  .cf-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .cf-form-item-content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
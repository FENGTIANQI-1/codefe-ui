<template>
  <div class="el-page-header">
    <div class="el-page-header--left" @click="$emit('back')">
      <i class="icon-back"></i>
      <div class="el-page-header--title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="el-page-header--content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CfPageHeader",
  props: {
    title: {
      type: String,
      default: "返回",
    },
    content: String,
  },
};
</script>

<style lang="scss" scope>
.el-page-header {
  display: flex;
  line-height: 24px;

  .el-page-header--left {
    display: flex;
    cursor: pointer;
    margin-right: 40px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 16px;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #ecf5ff;
    }

    .el-icon-back {
      font-size: 18px;
      margin-right: 6px;
      align-self: center;
    }

    .el-page-header--title {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .el-page-header--content {
    font-size: 18px;
    color: #409eff;
  }
}
</style>;

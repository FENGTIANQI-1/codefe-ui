<template>
  <div>
    <!-- 对话遮罩层 self点自己才会触发-->
    <transition name="dialog-active">
      <div class="cf-dialog-wrapper" v-show="visible" @click.self="handleClick">
        <div class="cf-dialog" :style="{ width, top }">
          <div class="cf-dialog-header">
            <slot name="title">
              <span class="cf-dialog-title">{{ title }}</span>
            </slot>
            <button class="cf-icon-headerbtn" @click="handleClick">
              <i class="icon-close"></i>
            </button>
          </div>
          <div class="cf-dialog-body">
            <!-- 默认的插槽 -->
            <slot></slot>
          </div>
          <div class="cf-dialog-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "cfDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang='scss' scope>
.cf-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 1111;
  background-color: rgba(0, 0, 0, 0.5);

  .cf-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
  }
  .cf-dialog-header {
    padding: 20px 20px 10px;
    .cf-dialog-title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .cf-icon-headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      i {
        color: #909399;
      }
    }
  }
  .cf-dialog-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .cf-dialog-footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    // 深度选择器 scss ::v-deep    lss  /deep/    css  >>>
    ::v-deep .cf-button:first-child {
      margin-right: 20px;
    }
  }
}
// 给dialog加上动画效果
.dialog-active-enter-active {
  animation: identifier 0.5s;
}
.dialog-active-leave-active {
  animation: identifier 0.5s reverse;
}

@keyframes identifier {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
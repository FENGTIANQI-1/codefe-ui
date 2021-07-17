<template>
  <label class="cf-radio" :class="{ 'cf-radio-checked': label === radioValue }">
    <span class="cf-radio-input">
      <span class="cf-radio-inner"></span>
      <input
        type="radio"
        class="cf-radio-original"
        :value="label"
        :name="name"
        v-model="radioValue"
      />
    </span>
    <span class="cf-radio-label">
      <slot></slot>
      <!-- 如果没传内容就把label当成内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "CfRadio",
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    radioValue: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // this.$emit("input", value);
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      // 判断radio是否被RadioGroup包裹
      return !!this.RadioGroup;
    },
  },
};
</script>

<style lang='scss' scope>
.cf-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .cf-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cf-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .cf-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cf-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.cf-radio-checked {
  .cf-radio-input {
    .cf-radio-inner {
      border-color: #409eff;
      background: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .cf-radio-label {
    color: #409eff;
  }
}
</style>
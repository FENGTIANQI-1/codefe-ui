<template>
  <label class="cf-checkbox" :class="{ 'cf-checkbox-checked': isChecked }">
    <span class="cf-checkbox-input">
      <span class="cf-checkbox-inner"></span>
      <input
        type="checkbox"
        class="cf-checkbox-original"
        :name="name"
        v-model="checkboxValue"
        :value="label"
      />
    </span>
    <span class="cf-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "CfCheckbox",
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    checkboxValue: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        // this.$emit("input", value);
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      // 判断radio是否被CheckboxGroup包裹
      return !!this.CheckboxGroup;
    },
    isChecked() {
      return this.isGroup
        ? this.checkboxValue.includes(this.label)
        : this.checkboxValue;
    },
  },
};
</script>

<style lang="scss" scope>
.cf-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .cf-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cf-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .cf-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .cf-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.cf-checkbox-checked {
  .cf-checkbox-input {
    .cf-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .cf-checkbox-label {
    color: #409eff;
  }
}
</style>
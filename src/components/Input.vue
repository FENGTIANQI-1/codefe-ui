<template>
  <!--  -->
  <div class="cf-input" :class="{ 'cf-input--suffix': showSuffix }">
    <input
      class="cf-input-inner"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleClick"
      :clearable="clearable"
      :showPassword="showPassword"
      :class="{ 'cf-input-disabled': disabled }"
    />
    <span class="cf-input-suffix" v-if="showSuffix">
      <i
        class="icon-viewlarger1"
        v-if="showPassword"
        @click="changeView"
        :class="{ 'cf-icon-view-active': passwordVisible }"
      ></i>
      <i class="icon-close" v-if="clearable && value" @click="clear"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "CfInput",
  data() {
    return {
      passwordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    changeView() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  computed: {
    showSuffix() {
      return this.showPassword || this.clearable;
    },
  },
};
</script>

<style lang='scss' scope>
.cf-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .cf-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    font-size: inherit;
    height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.cf-input-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.cf-input--suffix {
  .cf-input-inner {
    padding-right: 30px;
  }
  .cf-input-suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 1000;
  }
  i {
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .cf-icon-view-active {
    color: blue;
  }
}
</style>
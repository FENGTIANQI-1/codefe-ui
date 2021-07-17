<template>
  <div
    class="cf-switch"
    @click="changeActive"
    :class="{ 'cf-switch-checked': value }"
  >
    <span class="cf-switch-core" ref="core">
      <span class="cf-switch-button"></span>
    </span>
    <input class="cf-switch-input" type="checkbox" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "CfSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    async changeActive() {
      this.$emit("input", !this.value);
      await this.$nextTick();
      this.getColor();
      this.$refs.input.checkbox = this.value;
    },
    getColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    this.getColor();
    this.$refs.input.checkbox = this.value;
  },
};
</script>

<style lang='scss' scope>
.cf-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .cf-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .cf-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--color-inactive);
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: var(--color-inactive);
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .cf-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.cf-switch-checked {
  .cf-switch-core {
    border-color: var(--color-active);
    background-color: var(--color-active);
    .cf-switch-button {
      transform: translate(20px);
    }
  }
}
</style>
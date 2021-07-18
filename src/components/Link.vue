<template>
  <a
    :class="[
      'cf-link',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <span v-if="$slots.default" class="cf-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: "CfLink",
  props: {
    type: {
      type: String,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    href: String,
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit("click", e);
        }
      }
    },
  },
};
</script>

<style lang='scss' scope>
.cf-link.is-disabled {
  cursor: no-drop;
}

.cf-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;

  .is-underline {
    &:hover:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #409eff;
    }
  }
}
</style>
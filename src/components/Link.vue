<template>
  <a
    :class="[
      'cf-link',
      type ? `cf-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
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
</style>
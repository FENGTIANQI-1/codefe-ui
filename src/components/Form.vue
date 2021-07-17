<template>
  <div class="cf-from">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CfForm",
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
  },
  provide() {
    return {
      Form: this,
    };
  },
};
</script>

<style>
</style>
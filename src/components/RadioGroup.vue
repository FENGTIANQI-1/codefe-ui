<template>
  <div class="cf-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CfRadioGroup",
  props: {
    value: null,
  },
  provide() {
    return {
      RadioGroup: this,
    };
  },
};
</script>

<style>
</style>
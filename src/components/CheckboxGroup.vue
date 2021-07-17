<template>
  <div class="cf-Checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CfCheckboxGroup",
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>

<style>
</style>
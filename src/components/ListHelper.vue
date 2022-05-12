<template>
  <div>
    <slot name="listItem"></slot>
    I am a list helper
    <slot name="pera"></slot>
    <slot name="loading">Loading...</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style>
</style>
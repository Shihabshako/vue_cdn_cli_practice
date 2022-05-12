<template>
  <div>
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="Name"
      v-model="name"
    />
    <br />
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="Name"
      v-model="firstName"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const firstName = ref("");
    watch(firstName, (newValue, oldValue) => {
      console.log("Old Value", oldValue);
      console.log("New Value", newValue);
    });
    return {
      firstName,
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("Old Value", oldValue);
      console.log("New Value", newValue);
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="space-y-4">
    <h2>{{ name }}</h2>

    <button class="bg-green-400 p-1 px-3 rounded-full" @click="setName">
      Change Name
    </button>
    <h2>Count - {{ count }}</h2>
    <button class="bg-green-400 p-1 px-3 rounded-full" @click="incrementCount">
      Increment Count
    </button>
    <br />
    <h2>{{ firstName }} {{ lastName }}</h2>
    <button class="bg-green-400 p-1 px-3 rounded-full" @click="changeHero">
      Change Hero
    </button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const count = ref(0);
    function incrementCount() {
      count.value++;
    }

    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });
    function changeHero() {
      state.firstName = "Clark";
      state.lastName = "Kent";
    }
    
    return {
      count,
      incrementCount,
      changeHero,
      ...toRefs(state),
    };
  },

  data() {
    return {
      name: "Shihab",
    };
  },
  methods: {
    setName() {
      this.name = "Pumba";
    },
  },
};
</script>

<style>
</style>
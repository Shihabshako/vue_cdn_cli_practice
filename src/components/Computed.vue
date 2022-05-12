<template>
  <div class="space-y-4">
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="First Name"
      v-model="fName"
    />
    <br />
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="Last Name"
      v-model="lName"
    />
    <br />
    <h2>Options name is {{ fullName }} </h2>
    <br><br>
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="First Name"
      v-model="refFirstName"
    />
    <br />
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="Last Name"
      v-model="refLastName"
    />
    <br>
    <h2>Composition name is {{ refFullName }}</h2>
    <br><br>
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="First Name"
      v-model="reactiveFirstName"
    />
    <br />
    <input
      type="text"
      class="border-solid border-2 border-green-400"
      placeholder="Last Name"
      v-model="reactiveLastName"
    />
    <br>
    <h2>Composition reactive name is {{ reactiveFullName }}</h2>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
export default {
  setup() {
      const refFirstName = ref('')
      const refLastName = ref('')

    const refFullName =  computed(() => {
        return ` ${refFirstName.value} ${refLastName.value} `
    })

    const state = reactive({
        reactiveFirstName : '',
        reactiveLastName : '',
    })

    const reactiveFullName = computed(() => {
        return ` ${state.reactiveFirstName} ${state.reactiveLastName} `
    })

      return{
          refFirstName,
          refLastName,
          refFullName,
          ...toRefs(state),
          reactiveFullName
      }
  }
  ,data() {
    return {
      fName: "",
      lName: "",
    };
  },
  computed: {
      fullName(){
          return ` ${this.fName} ${this.lName} `
      }
  },
};
</script>

<style>
</style>